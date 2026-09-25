/** Datos de contacto. Cambiar aquí se propaga a todo el sitio. */

/** Solo dígitos, formato internacional sin "+". */
export const WHATSAPP = '573181649161';

export const CAL_COM =
  'https://cal.com/david-florez-rojas-pdno9v/llamada-de-orientacion-inicial';

export const INSTAGRAM = 'https://instagram.com/ps.davidflorez';

/** Construye un enlace de WhatsApp con mensaje predefinido. */
export function wa(mensaje?: string): string {
  const base = `https://wa.me/${WHATSAPP}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

/** "+57 318 164 9161": el mismo número de los botones de WhatsApp, legible. */
export const TELEFONO_VISIBLE = `+${WHATSAPP.slice(0, 2)} ${WHATSAPP.slice(2, 5)} ${WHATSAPP.slice(5, 8)} ${WHATSAPP.slice(8)}`;

export interface Sede {
  /** Clave estable para el @id del schema. */
  id: string;
  nombre: string;
  /** Localidad de Bogotá. */
  localidad: string;
  direccion: string;
  /** Edificio, torre o consultorio, si aplica. */
  complemento?: string;
}

/**
 * Sedes de atención presencial. Solo datos confirmados por David: sin horarios
 * ni número de consultorio hasta tenerlos. Cambiar aquí actualiza la página de
 * contacto, el pie, las páginas de servicio, el schema y llms.txt.
 */
export const SEDES: Sede[] = [
  {
    id: 'usaquen',
    nombre: 'Sede Usaquén',
    localidad: 'Usaquén',
    direccion: 'Carrera 7C Bis #139-18',
    complemento: 'Edificio GIA',
  },
  {
    id: 'chapinero',
    nombre: 'Sede Chapinero',
    localidad: 'Chapinero',
    direccion: 'Carrera 19A #84-29',
  },
];

export function direccionCompleta(s: Sede): string {
  return [s.direccion, s.complemento, `${s.localidad}, Bogotá`].filter(Boolean).join(', ');
}

/** Enlace de búsqueda de Google Maps: no requiere coordenadas ni API. */
export function enlaceMapa(s: Sede): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccionCompleta(s))}`;
}
