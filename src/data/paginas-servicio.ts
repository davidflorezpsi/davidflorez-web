/**
 * Páginas de servicio: una por decisión de contratación.
 *
 * Las tarjetas (qué incluye, precio, modalidad, condición de ingreso) no se
 * copian: se toman de PESTANAS por id, así un cambio de precio en servicios.ts
 * llega a la home, a estas páginas y a su schema a la vez.
 *
 * Regla para el texto propio de cada página: solo hechos que la práctica ya
 * publica. Sede, fechas de grupo, cupos o credenciales nuevas se añaden
 * cuando estén confirmados, no antes.
 */
import { PESTANAS, type Audiencia, type Servicio } from './servicios';
import { CUOTAS, MEDIOS_DE_PAGO } from './pagos';

export interface Bloque {
  titulo: string;
  parrafos: string[];
}

export interface PaginaServicio {
  slug: string;
  /** <title>: servicio + ciudad + nombre. */
  titulo: string;
  descripcion: string;
  /** Nombre corto para migas de pan y enlaces. */
  nombre: string;
  cejilla: string;
  h1: string;
  entrada: string;
  /** Ids de PESTANAS, en el orden en que se muestran. */
  servicios: string[];
  bloques: Bloque[];
  /** Público del servicio, para el schema. */
  edadMin: number;
  edadMax: number;
  /** Otras páginas de servicio relacionadas (slugs). */
  relacionadas: string[];
  /** Artículos del blog relacionados (slugs). */
  articulos: string[];
  /** Preguntas frecuentes de src/data/faq.ts que aplican a esta página (ids). */
  preguntas: string[];
}

/**
 * Igual en todas las páginas. Lo que ya responden las preguntas frecuentes de
 * cada página (EPS, a quién se remite) no se repite aquí.
 */
const COMO_EMPEZAR: Bloque = {
  titulo: 'Cómo se empieza',
  parrafos: [
    'Escríbeme por WhatsApp: me cuentas el caso, te digo qué servicio aplica y te envío el link de pago. Si prefieres conversarlo antes de decidir, puedes agendar una llamada de orientación gratuita de 20 minutos; es opcional.',
    `El pago es anticipado y se hace solo en Wompi, con ${MEDIOS_DE_PAGO}. ${CUOTAS} Con el pago confirmado se abre tu expediente y se agendan las sesiones.`,
    'No es un servicio de urgencias: si hay riesgo inmediato, marca la línea 123.',
  ],
};

export const PAGINAS_SERVICIO: PaginaServicio[] = [
  {
    slug: 'psicologo-infantil-bogota',
    titulo: 'Psicólogo infantil en Bogotá · 2 a 11 años | David Flórez',
    descripcion:
      'Psicólogo infantil en Bogotá para niños de 2 a 11 años: evaluación funcional, espectro autista con ADOS-2 / ADI-R, programa individual y trabajo con cuidadores.',
    nombre: 'Psicología infantil',
    cejilla: 'Niñez · 2 a 11 años',
    h1: 'Psicólogo infantil en Bogotá',
    entrada:
      'Atención psicológica para niños de 2 a 11 años, siempre con los cuidadores cerca. Todo empieza por una evaluación que explica qué sostiene la dificultad, y la intervención se organiza con objetivos conductuales, registro y criterios de cierre definidos desde el inicio. Presencial en Bogotá y, según el caso, telepresencial.',
    servicios: ['n1', 'n2', 'n3', 'n4'],
    bloques: [
      {
        titulo: 'Qué dificultades se atienden',
        parrafos: [
          'Dificultades conductuales, emocionales y del neurodesarrollo en la niñez: rabietas y conducta desafiante, ansiedad, dificultades de regulación emocional, sospecha de condición del espectro autista y otros cuadros del neurodesarrollo. También segundas opiniones y familias referidas por pediatras, neuropediatras o colegios.',
        ],
      },
      {
        titulo: 'El papel de los cuidadores',
        parrafos: [
          'Con niños pequeños buena parte del trabajo ocurre con los adultos de la casa: el niño pasa una hora a la semana en consulta y el resto del tiempo en su vida. Por eso el programa individual incluye sesiones mensuales con los cuidadores y una asesoría al colegio, y existe un programa específico de entrenamiento conductual a cuidadores.',
        ],
      },
      COMO_EMPEZAR,
    ],
    edadMin: 2,
    edadMax: 11,
    relacionadas: ['evaluacion-autismo-ados-2-bogota', 'psicologo-adolescentes-bogota'],
    articulos: ['terapia-basada-en-procesos', 'entrenamiento-a-cuidadores-en-vivo', 'despues-del-informe-de-evaluacion'],
    preguntas: ['online-ninos', 'diagnostico-previo', 'duracion', 'donde', 'eps'],
  },
  {
    slug: 'psicologo-adolescentes-bogota',
    titulo: 'Psicólogo para adolescentes en Bogotá | David Flórez',
    descripcion:
      'Psicólogo para adolescentes de 12 a 17 años en Bogotá y online: evaluación funcional, espectro autista y programa individual, con los cuidadores cerca.',
    nombre: 'Psicología para adolescentes',
    cejilla: 'Adolescencia · 12 a 17 años',
    h1: 'Psicólogo para adolescentes en Bogotá',
    entrada:
      'Atención psicológica para adolescentes de 12 a 17 años: el adolescente es protagonista de su proceso, con los cuidadores y el colegio cerca. Presencial en Bogotá y telepresencial.',
    servicios: ['a1', 'a2', 'a3'],
    bloques: [
      {
        titulo: 'Qué se comparte y qué no',
        parrafos: [
          'Con adolescentes el encuadre se negocia al inicio: qué información se comparte con los cuidadores y qué queda en el espacio terapéutico. Los cuidadores participan con cuatro sesiones mensuales durante el programa y reciben reportes de progreso; el trabajo individual sigue siendo del adolescente.',
          'La confidencialidad tiene un límite, el mismo que fija la ética profesional del psicólogo: si hay riesgo para la vida o la integridad del adolescente o de otra persona, esa información se comparte con los cuidadores y, cuando corresponde, con las autoridades. Ese límite se le explica al adolescente desde la primera sesión, para que nunca sea una sorpresa.',
        ],
      },
      {
        titulo: 'Si la dificultad está con los pares',
        parrafos: [
          'Cuando lo que más pesa es la interacción con otros adolescentes, el programa PEERS trabaja habilidades sociales en grupo, con reglas concretas y práctica entre sesiones.',
        ],
      },
      COMO_EMPEZAR,
    ],
    edadMin: 12,
    edadMax: 17,
    relacionadas: ['peers-adolescentes-bogota', 'evaluacion-autismo-ados-2-bogota', 'psicologo-jovenes-adultos-bogota'],
    articulos: ['terapia-basada-en-procesos'],
    preguntas: ['diagnostico-previo', 'duracion', 'donde', 'eps', 'no-pertinente'],
  },
  {
    slug: 'evaluacion-autismo-ados-2-bogota',
    titulo: 'Evaluación de autismo con ADOS-2 y ADI-R en Bogotá | David Flórez',
    descripcion:
      'Evaluación del espectro autista con ADOS-2 y ADI-R para niños y adolescentes en Bogotá: qué incluye, sesiones, informe, precio y límites.',
    nombre: 'Evaluación del espectro autista',
    cejilla: 'Evaluación especializada · niñez y adolescencia',
    h1: 'Evaluación del espectro autista con ADOS-2 y ADI-R en Bogotá',
    entrada:
      'Evaluación diagnóstica del espectro autista para niños y adolescentes, con los dos instrumentos de referencia internacional: la observación estructurada ADOS-2 y la entrevista diagnóstica ADI-R con los cuidadores. Seis sesiones, presenciales en Bogotá, integradas en un solo informe.',
    servicios: ['n2', 'a2'],
    bloques: [
      {
        titulo: 'Qué aporta cada instrumento',
        parrafos: [
          'El ADOS-2 es una observación estructurada: se aplica el módulo que corresponde al nivel de lenguaje del niño o adolescente. El ADI-R es una entrevista con los cuidadores sobre la historia del desarrollo. Uno mira el presente en consulta; el otro, la trayectoria.',
          'Ninguno de los dos decide solo. El diagnóstico es un juicio clínico que integra ambos instrumentos con la historia de desarrollo y los reportes escolares, y por eso el resultado es un informe único con recomendaciones de apoyo, entregado en una sesión con la familia.',
        ],
      },
      {
        titulo: 'Qué no cubre',
        parrafos: [
          'Esta evaluación responde a la pregunta por el espectro autista. Si el cuadro pide otras valoraciones —neurología pediátrica, neuropsicología u otras evaluaciones específicas—, el informe lo dice y deja la ruta. No reemplaza la valoración médica.',
        ],
      },
      COMO_EMPEZAR,
    ],
    edadMin: 2,
    edadMax: 17,
    relacionadas: ['psicologo-infantil-bogota', 'psicologo-adolescentes-bogota', 'peers-adolescentes-bogota'],
    articulos: ['despues-del-informe-de-evaluacion'],
    preguntas: ['quien', 'donde', 'eps', 'no-pertinente'],
  },
  {
    slug: 'peers-adolescentes-bogota',
    titulo: 'PEERS para adolescentes en Bogotá | David Flórez',
    descripcion:
      'Programa PEERS (UCLA) de habilidades sociales para adolescentes en Bogotá y online: 14 sesiones en grupo, con sesiones para cuidadores. Precio y para quién es.',
    nombre: 'PEERS · Habilidades sociales',
    cejilla: 'Habilidades sociales · adolescencia',
    h1: 'PEERS: habilidades sociales para adolescentes en Bogotá',
    entrada:
      'Un programa en grupo para adolescentes a quienes les cuesta relacionarse con sus pares. Catorce sesiones, presencial en Bogotá o telepresencial.',
    servicios: ['a4'],
    bloques: [
      {
        titulo: 'Cómo participan los cuidadores',
        parrafos: [
          'Mientras los adolescentes trabajan en su grupo, los cuidadores tienen sesiones paralelas de acompañamiento: son quienes sostienen la práctica entre semana. Las tareas sociales se revisan cada semana y las habilidades se miden al inicio y al cierre.',
        ],
      },
      {
        titulo: 'Fechas y cupos',
        parrafos: [
          'Los grupos se abren por ciclos. Las fechas del próximo grupo y los cupos disponibles se confirman por WhatsApp; ahí también revisamos si el programa encaja con el caso.',
        ],
      },
      COMO_EMPEZAR,
    ],
    edadMin: 12,
    edadMax: 17,
    relacionadas: ['psicologo-adolescentes-bogota', 'evaluacion-autismo-ados-2-bogota'],
    articulos: [],
    preguntas: ['donde', 'eps', 'no-pertinente'],
  },
  {
    slug: 'psicologo-jovenes-adultos-bogota',
    titulo: 'Psicólogo para jóvenes de 18 a 25 años en Bogotá | David Flórez',
    descripcion:
      'Psicólogo para jóvenes de 18 a 25 años en Bogotá y online: ansiedad, depresión, duelo y regulación emocional. Evaluación inicial y programa de 16 sesiones.',
    nombre: 'Psicología para jóvenes adultos',
    cejilla: 'Adultez joven · 18 a 25 años',
    h1: 'Psicólogo para jóvenes de 18 a 25 años en Bogotá',
    entrada:
      'Atención psicológica para jóvenes de 18 a 25 años que consultan por ansiedad, depresión, duelo, autocrítica o dificultades de regulación emocional. Presencial en Bogotá y telepresencial.',
    servicios: ['d1', 'd2'],
    bloques: [
      {
        titulo: 'Hasta los 25 años',
        parrafos: [
          'La práctica atiende hasta los 25 años. No atiende adultos mayores de 25 ni terapia de pareja; si es tu caso, escríbeme y te oriento hacia un colega.',
        ],
      },
      COMO_EMPEZAR,
    ],
    edadMin: 18,
    edadMax: 25,
    relacionadas: ['psicologo-adolescentes-bogota'],
    articulos: [],
    preguntas: ['sesion-suelta', 'duracion', 'diagnostico-previo', 'donde', 'eps'],
  },
];

const TODOS: Servicio[] = PESTANAS.flatMap((p) => p.servicios);

export function servicioPorId(id: string): Servicio {
  const s = TODOS.find((x) => x.id === id);
  if (!s) throw new Error(`Servicio desconocido: ${id}`);
  return s;
}

/**
 * La página más específica que contiene un servicio (la de menos servicios):
 * la evaluación del espectro autista enlaza a su página propia, no a la general.
 */
export function paginaDeServicio(id: string): PaginaServicio | undefined {
  return PAGINAS_SERVICIO.filter((p) => p.servicios.includes(id)).sort(
    (a, b) => a.servicios.length - b.servicios.length,
  )[0];
}

/** Edades de cada pestaña, para el público del schema de cada servicio. */
const EDADES: Partial<Record<Audiencia, [number, number]>> = {
  ninos: [2, 11],
  ados: [12, 17],
  adultos: [18, 25],
};

export function edadesDeServicio(id: string): [number, number] | undefined {
  const pestana = PESTANAS.find((p) => p.servicios.some((s) => s.id === id));
  return pestana ? EDADES[pestana.key] : undefined;
}

export function paginaPorSlug(slug: string): PaginaServicio {
  const p = PAGINAS_SERVICIO.find((x) => x.slug === slug);
  if (!p) throw new Error(`Página de servicio desconocida: ${slug}`);
  return p;
}

/** "$1.050.000" → "1050000". Devuelve undefined si el precio no es un monto único. */
export function precioNumerico(precio?: string): string | undefined {
  if (!precio || precio.includes('/')) return undefined;
  const digitos = precio.replace(/\D/g, '');
  return digitos || undefined;
}
