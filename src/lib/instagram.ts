/**
 * Últimas publicaciones de Instagram, leídas en el build.
 *
 * Usa la API oficial de Instagram (inicio de sesión con Instagram) con un token
 * de larga duración en la variable de entorno INSTAGRAM_TOKEN. Las imágenes se
 * descargan y optimizan en el build: quien visita la página no hace ninguna
 * petición a Meta, así que no hace falta pedirle consentimiento.
 *
 * Sin token, o si la API falla, devuelve [] y la sección muestra solo el enlace
 * al perfil. El build nunca se cae por Instagram.
 *
 * El token vence a los 60 días si no se renueva. Cada build lo renueva (la API
 * lo permite cuando tiene más de 24 horas), y el despliegue diario de
 * .github/workflows/actualizar-instagram.yml hace que eso pase todos los días.
 */

export interface Publicacion {
  id: string;
  enlace: string;
  imagen: string;
  alt: string;
}

interface Medio {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
}

const API = 'https://graph.instagram.com';
const CAMPOS = 'id,caption,media_type,media_url,thumbnail_url,permalink';
const ESPERA_MS = 8000;

/** Texto alternativo a partir de la primera línea del pie de foto, sin etiquetas ni emojis. */
function textoAlternativo(caption?: string): string {
  const linea = (caption ?? '')
    .split('\n')[0]
    .replace(/[#@][\p{L}\p{N}_.]+/gu, '')
    .replace(/\p{Extended_Pictographic}|\u{FE0F}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!linea) return 'Publicación de Instagram de David Flórez';
  return linea.length <= 140 ? linea : `${linea.slice(0, linea.lastIndexOf(' ', 137))}…`;
}

async function pedir<T>(url: string): Promise<T> {
  const r = await fetch(url, { signal: AbortSignal.timeout(ESPERA_MS) });
  const cuerpo = await r.json().catch(() => ({}));
  if (!r.ok) {
    const detalle = (cuerpo as { error?: { message?: string } }).error?.message ?? r.statusText;
    throw new Error(`${r.status} ${detalle}`);
  }
  return cuerpo as T;
}

async function cargar(limite: number): Promise<Publicacion[]> {
  let token = import.meta.env.INSTAGRAM_TOKEN;
  if (!token) {
    console.info('[instagram] sin INSTAGRAM_TOKEN: la sección muestra solo el enlace al perfil');
    return [];
  }

  try {
    const r = await pedir<{ access_token?: string; expires_in?: number }>(
      `${API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`,
    );
    if (r.access_token) token = r.access_token;
    if (r.expires_in) console.info(`[instagram] token renovado: vence en ${Math.round(r.expires_in / 86400)} días`);
  } catch (e) {
    // Un token de menos de 24 horas no se puede renovar todavía; sigue sirviendo.
    console.info(`[instagram] el token no se renovó en este build (${(e as Error).message})`);
  }

  try {
    const { data = [] } = await pedir<{ data?: Medio[] }>(
      `${API}/me/media?fields=${CAMPOS}&limit=12&access_token=${encodeURIComponent(token)}`,
    );
    const publicaciones: Publicacion[] = [];
    for (const m of data) {
      const imagen = m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url;
      if (!imagen || /\.mp4(\?|$)/.test(imagen)) continue;
      if (!m.permalink?.startsWith('https://www.instagram.com/')) continue;
      publicaciones.push({ id: m.id, enlace: m.permalink, imagen, alt: textoAlternativo(m.caption) });
      if (publicaciones.length === limite) break;
    }
    console.info(`[instagram] ${publicaciones.length} publicaciones`);
    return publicaciones;
  } catch (e) {
    console.warn(`[instagram] no se pudieron leer las publicaciones (${(e as Error).message}); se muestra solo el enlace al perfil`);
    return [];
  }
}

let enCurso: Promise<Publicacion[]> | undefined;

/** Las publicaciones se piden una sola vez por build, aunque varias páginas las usen. */
export function publicacionesInstagram(limite = 4): Promise<Publicacion[]> {
  enCurso ??= cargar(limite);
  return enCurso;
}
