/**
 * Pagos con Wompi, la pasarela de Bancolombia.
 *
 * El sitio no cobra: cada programa tiene un link de pago de Wompi que se crea
 * en el panel de comercios (Links de pago → monto fijo, uso múltiple, sin
 * vencimiento). Su URL y el monto con que se creó van aquí. Mientras un link
 * esté vacío, /pagar/ ofrece pedirlo por WhatsApp.
 *
 * Los precios no se repiten: salen de servicios.ts. Si cambias un precio allá
 * y el link de aquí quedó con el monto viejo, el build falla y dice cuál es:
 * así nadie paga un valor que ya no está publicado.
 */
import { PESTANAS, type Servicio } from './servicios';

/** Medios de pago, tal como se nombran en todo el sitio. */
export const MEDIOS_DE_PAGO = 'tarjeta de crédito o débito (también internacional), PSE, Nequi o botón Bancolombia';

/** Cuotas: no hay financiación propia; las da el banco de cada quien. */
export const CUOTAS =
  'Si quieres pagarlo en cuotas, usa tu tarjeta de crédito: Wompi te pregunta en cuántas, y los intereses los define tu banco.';

interface LinkDePago {
  url: string;
  /** El monto exacto, en pesos, con que se creó el link en Wompi. */
  monto: number;
}

export interface ProductoDePago {
  /** Ancla en /pagar/ (/pagar/#evaluacion). */
  id: string;
  nombre: string;
  /** Ids de servicios.ts que se pagan con este link. Deben tener el mismo precio. */
  servicios: string[];
  link?: LinkDePago;
}

export const PRODUCTOS: ProductoDePago[] = [
  { id: 'evaluacion', nombre: 'Evaluación Funcional Clínica · niñez y adolescencia', servicios: ['n1', 'a1'] },
  { id: 'evaluacion-inicial', nombre: 'Evaluación Clínica Inicial · jóvenes adultos', servicios: ['d1'] },
  { id: 'espectro-autista', nombre: 'Evaluación del espectro autista · ADOS-2 / ADI-R', servicios: ['n2', 'a2'] },
  { id: 'programa', nombre: 'Programa de Intervención Individual · niñez y adolescencia', servicios: ['n3', 'a3'] },
  { id: 'programa-jovenes', nombre: 'Programa de Intervención Individual · jóvenes adultos', servicios: ['d2'] },
  { id: 'cuidadores', nombre: 'Entrenamiento conductual a cuidadores', servicios: ['n4'] },
  { id: 'peers', nombre: 'PEERS · Habilidades sociales', servicios: ['a4'] },
  { id: 'consulta-cuidadores', nombre: 'Consulta con cuidadores · una sesión', servicios: ['f1'] },
];

/**
 * Link de monto abierto (la persona escribe el valor), para lo que se cotiza:
 * talleres, charlas, asesoría institucional. Vacío = no se muestra.
 */
export const LINK_MONTO_ABIERTO = '';

const PATRON_LINK = /^https:\/\/checkout\.wompi\.co\/l\/[\w-]+$/;
const TODOS: Servicio[] = PESTANAS.flatMap((p) => p.servicios);

/** "$1.050.000" → 1050000. */
function monto(precio?: string): number | undefined {
  if (!precio || precio.includes('/')) return undefined;
  const n = Number(precio.replace(/\D/g, ''));
  return n || undefined;
}

export interface PrecioDeProducto {
  monto: number;
  precio: string;
  nota?: string;
}

/** Precio publicado del producto, validado contra servicios.ts y contra su link. */
export function precioDe(p: ProductoDePago): PrecioDeProducto {
  const servicios = p.servicios.map((id) => {
    const s = TODOS.find((x) => x.id === id);
    if (!s) throw new Error(`pagos.ts: "${p.id}" apunta al servicio "${id}", que no existe en servicios.ts`);
    return s;
  });
  const montos = new Set(servicios.map((s) => monto(s.precio)));
  const [valor] = montos;
  if (montos.size !== 1 || valor === undefined) {
    throw new Error(`pagos.ts: los servicios de "${p.id}" no tienen un precio único (${servicios.map((s) => s.precio).join(', ')})`);
  }
  if (p.link) {
    if (!PATRON_LINK.test(p.link.url)) {
      throw new Error(`pagos.ts: el link de "${p.id}" no es un link de pago de Wompi: ${p.link.url}`);
    }
    if (p.link.monto !== valor) {
      throw new Error(`pagos.ts: el link de "${p.id}" cobra ${p.link.monto} y el precio publicado es ${valor}. Crea un link nuevo en Wompi.`);
    }
  }
  return { monto: valor, precio: servicios[0].precio!, nota: servicios[0].notaPrecio };
}

if (LINK_MONTO_ABIERTO && !PATRON_LINK.test(LINK_MONTO_ABIERTO)) {
  throw new Error(`pagos.ts: LINK_MONTO_ABIERTO no es un link de pago de Wompi: ${LINK_MONTO_ABIERTO}`);
}
