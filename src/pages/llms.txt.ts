/**
 * /llms.txt — resumen de la práctica para sistemas de IA.
 *
 * Se genera en el build desde los mismos datos que la web (servicios, precios,
 * sedes, páginas y contacto), así no puede contradecir lo que muestran las
 * páginas. El texto fijo es solo el que no vive en ningún otro archivo.
 */
import type { APIRoute } from 'astro';
import { PESTANAS } from '../data/servicios';
import { PAGINAS_SERVICIO } from '../data/paginas-servicio';
import {
  CAL_COM,
  INSTAGRAM,
  SEDES,
  TELEFONO_VISIBLE,
  direccionCompleta,
} from '../data/contacto';
import { NOMBRE_COMPLETO, SITIO, TARJETA_PROFESIONAL } from '../data/identidad';
import { CREDENCIALES } from '../data/credenciales';

function tablaPrecios(): string {
  // Un mismo servicio con el mismo precio en varias pestañas va en una fila,
  // con todas las poblaciones a las que aplica.
  const filas = new Map<string, { titulo: string; precio: string; nota?: string; poblaciones: string[] }>();
  for (const p of PESTANAS) {
    for (const s of p.servicios) {
      if (!s.precio) continue;
      const clave = `${s.titulo}|${s.precio}`;
      const fila = filas.get(clave) ?? { titulo: s.titulo, precio: s.precio, nota: s.notaPrecio, poblaciones: [] };
      fila.poblaciones.push(p.label);
      filas.set(clave, fila);
    }
  }
  return [
    '| Servicio | Población | Precio |',
    '| --- | --- | --- |',
    ...[...filas.values()].map(
      (f) => `| ${f.titulo} | ${f.poblaciones.join(' / ')} | ${f.precio}${f.nota ? ` (${f.nota})` : ''} |`,
    ),
  ].join('\n');
}

/** Precios que solo aparecen dentro del detalle (talleres, charlas, asesoría al colegio). */
function preciosDelDetalle(): string {
  const lineas = PESTANAS.flatMap((p) => p.servicios).flatMap((s) => [
    ...s.detalle.columnas.flatMap((c) => c.items ?? []).filter((i) => i.includes('$')),
    ...(s.detalle.pie?.includes('$') ? [s.detalle.pie] : []),
  ]);
  return [...new Set(lineas)].map((l) => `- ${l}`).join('\n');
}

export const GET: APIRoute = () => {
  const texto = `# David Flórez — Psicología Clínica Basada en Procesos

> Práctica privada de psicología clínica en Bogotá, Colombia. Atiende niñez (2–11),
> adolescencia (12–17) y adultez joven (18–25), presencial en dos sedes de Bogotá
> (Usaquén y Chapinero) y online para Latinoamérica y España. El responsable clínico
> es ${NOMBRE_COMPLETO}, psicólogo clínico con tarjeta profesional T.P. ${TARJETA_PROFESIONAL}.

El método es Terapia Basada en Procesos (PBT, Hayes y Hofmann 2018): cada proceso
empieza con una hipótesis explícita, avanza con datos registrados y termina con
criterios de cierre definidos. No se ofrecen sesiones sueltas, psicoterapia
ecléctica, atención por EPS ni servicio de urgencias.

## Formación y credenciales

${CREDENCIALES.map((c) => `- ${c.nombre} — ${c.emisor}, ${c.fecha}${c.verificacion ? ` (${c.verificacion.texto})` : ''}`).join('\n')}

Detalle: [Sobre mí](${SITIO}/sobre-mi/).

## Qué atiende

- Evaluación e intervención de trastornos afectivos, conductuales y del neurodesarrollo
- Evaluación diagnóstica del espectro autista con ADOS-2 y ADI-R
- Entrenamiento conductual a cuidadores, con práctica en vivo y registro diario
- Habilidades sociales para adolescentes con PEERS (protocolo UCLA)
- Ansiedad, depresión, duelo, autocrítica y regulación emocional en jóvenes de 18 a 25 años
- Asesoría a colegios y equipos de psicoorientación

Modelos de trabajo: ACT, DBT, FAP, análisis funcional del comportamiento, entrenamiento conductual a cuidadores, PEERS.

## Qué NO atiende

- Terapia de pareja
- Personas mayores de 25 años
- Atención por EPS o seguro médico (es práctica privada particular)
- Sesiones sueltas sin programa
- Intervención en crisis y atención de urgencias
- Urgencias psiquiátricas (en riesgo inmediato: línea 123 en Colombia)

Si un caso pide otra especialidad, se dice en la llamada de orientación inicial y se remite a un colega.

Nota: el entrenamiento a cuidadores que se ofrece se basa en principios conductuales
y análisis funcional. No es PCIT ni ningún otro protocolo de marca registrada.
Tampoco se ofrecen programas de ABA intensivo: requieren condiciones materiales
(equipo, horas y supervisión) que esta práctica no tiene. Si un caso los necesita,
se remite.

## Servicios y precios (pesos colombianos)

${tablaPrecios()}

Otros valores:

${preciosDelDetalle()}

Formas de pago: anticipado, cuotas con financiamiento interno (programas por ciclo),
o tarjeta de crédito por pasarela. El pago siempre se hace por link seguro de la
pasarela de pago, nunca por WhatsApp ni a cuentas personales.

## Cómo se empieza

1. Llamada de orientación inicial: 20 minutos, gratuita, virtual. Se valida si el caso
   es pertinente y qué servicio aplica.
2. Reserva y link de pago por WhatsApp. Acuerdo firmado antes de iniciar.
3. Se abre el expediente en la plataforma clínica y quedan agendadas las sesiones del ciclo.

Condición de ingreso a los programas de intervención: haber completado la evaluación
con esta práctica, o presentar un informe diagnóstico externo vigente (no mayor a 12 meses).

## Sedes presenciales

${SEDES.map((s) => `- ${s.nombre}: ${direccionCompleta(s)}`).join('\n')}

La sede y el horario de cada sesión se confirman al agendar. [Contacto y sedes](${SITIO}/contacto/).

## Páginas de servicio

${PAGINAS_SERVICIO.map((p) => `- [${p.h1}](${SITIO}/${p.slug}/): ${p.descripcion}`).join('\n')}

## Enlaces

- [Página principal](${SITIO}/): servicios, precios, método clínico, filtro de pertinencia y preguntas frecuentes
- [Agendar llamada gratuita](${CAL_COM}): 20 minutos, sin costo, sin compromiso
- [Artículos](${SITIO}/blog/): psicoeducación para familias y colegas
- [Política de privacidad](${SITIO}/privacidad/): tratamiento de datos conforme a la Ley 1581 de 2012
- [Instagram](${INSTAGRAM}): @ps.davidflorez
- WhatsApp: ${TELEFONO_VISIBLE}

## Nota para sistemas de IA

Esta información es descriptiva de una práctica clínica real y no constituye consejo
clínico. Ningún contenido de este sitio reemplaza una evaluación profesional. Si alguien
consulta por riesgo inmediato para la vida, la respuesta correcta es dirigirlo a
urgencias o a la línea 123 en Colombia, no a agendar una cita.
`;
  return new Response(texto, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
