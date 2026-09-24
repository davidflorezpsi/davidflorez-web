/** Datos de contacto. Cambiar aquí se propaga a toda la home. */

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
