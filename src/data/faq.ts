/**
 * Preguntas frecuentes. La home las muestra todas; cada página de servicio
 * elige las suyas por id. Texto y schema salen de aquí.
 */
import { SEDES, direccionCompleta } from './contacto';

export interface Pregunta {
  id: string;
  q: string;
  a: string;
}

const sedes = SEDES.map((s) => `${s.localidad} (${direccionCompleta(s).replace(`, ${s.localidad}, Bogotá`, '')})`).join(' y ');

export const PREGUNTAS: Pregunta[] = [
  {
    id: 'quien',
    q: '¿Quién va a atender mi caso?',
    a: 'Siempre conmigo. Atiendo niñez y adolescencia —incluido neurodesarrollo y evaluación diagnóstica del espectro autista— y adultez joven, hasta los 25 años.',
  },
  {
    id: 'donde',
    q: '¿Dónde queda el consultorio?',
    a: `Hay dos sedes en Bogotá: ${sedes}. La sede y el horario de cada sesión se confirman al agendar. También atiendo en modalidad telepresencial.`,
  },
  {
    id: 'adultos',
    q: '¿Atiendes adultos o parejas?',
    a: 'Atiendo hasta la adultez joven: personas de 18 a 25 años por ansiedad, depresión, duelo, autocrítica o dificultades de regulación emocional. No atiendo adultos mayores de 25 ni terapia de pareja; si es tu caso, escríbeme y te oriento hacia un colega.',
  },
  {
    id: 'eps',
    q: '¿Atiendes por EPS o seguro médico?',
    a: 'No. Es una práctica privada particular: el programa contratado se paga por anticipado, con el link de pago de Wompi.',
  },
  {
    id: 'sesion-suelta',
    q: '¿Puedo pedir solo una sesión para ver cómo va?',
    a: 'No hay sesiones sueltas: todo se trabaja como programa. Si quieres conocerme antes de contratar, existe la llamada de orientación: gratuita y de 20 minutos. Ese es el espacio para conocerse sin contratar nada.',
  },
  {
    id: 'duracion',
    q: '¿Cuánto dura un proceso?',
    a: 'La evaluación — Funcional Clínica en niñez y adolescencia, Clínica Inicial en jóvenes adultos — es un proceso corto y delimitado. El programa de intervención es un ciclo de 16 sesiones con el consultante; en niñez y adolescencia se suman cuatro sesiones mensuales con los cuidadores y una asesoría al colegio durante el ciclo. Lleva reportes mensuales de progreso y criterios definidos de avance y cierre. Si al final del ciclo hace falta continuar, se decide con datos, no por inercia.',
  },
  {
    id: 'diagnostico-previo',
    q: 'Ya tenemos un diagnóstico. ¿Hay que repetir la evaluación?',
    a: 'No necesariamente. Un informe diagnóstico externo vigente, no mayor a 12 meses, puede habilitar el ingreso al programa de intervención; lo reviso antes de iniciar para confirmar que alcanza.',
  },
  {
    id: 'online-ninos',
    q: '¿La consulta online funciona igual con niños?',
    a: 'Depende del caso y de la edad. Buena parte del trabajo con niños pequeños ocurre con los cuidadores, y eso se sostiene bien en modalidad virtual. La evaluación con ADOS-2 requiere observación presencial en Bogotá.',
  },
  {
    id: 'no-pertinente',
    q: '¿Qué pasa si mi caso no es para esta práctica?',
    a: 'Te lo digo desde el primer contacto y te oriento sobre qué tipo de profesional o servicio corresponde. Aceptar un caso que no es pertinente no ayuda a nadie.',
  },
];

export function preguntasPorId(ids: string[]): Pregunta[] {
  return ids.map((id) => {
    const p = PREGUNTAS.find((x) => x.id === id);
    if (!p) throw new Error(`Pregunta desconocida: ${id}`);
    return p;
  });
}
