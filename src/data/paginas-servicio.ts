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

const COMO_EMPEZAR: Bloque = {
  titulo: 'Cómo se empieza',
  parrafos: [
    'Primero, una llamada de orientación inicial: 20 minutos, gratuita y virtual. Ahí se valida si el caso es pertinente para esta práctica y qué servicio aplica. Si el caso pide otra especialidad, se dice en esa llamada y se remite a un colega.',
    'Después, la reserva y el link de pago llegan por WhatsApp, y el acuerdo se firma antes de iniciar. El pago siempre se hace por el link seguro de la pasarela, nunca a cuentas personales.',
    'Es una práctica privada particular: no hay atención por EPS ni por seguro médico, y no es un servicio de urgencias. Si hay riesgo inmediato, la línea es el 123.',
  ],
};

export const PAGINAS_SERVICIO: PaginaServicio[] = [
  {
    slug: 'psicologo-infantil-bogota',
    titulo: 'Psicólogo infantil en Bogotá · niños de 2 a 11 años | David Flórez',
    descripcion:
      'Evaluación e intervención psicológica para niños de 2 a 11 años en Bogotá: evaluación funcional, espectro autista con ADOS-2 / ADI-R, programa individual y entrenamiento a cuidadores. Precios y qué incluye cada uno.',
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
          'Buena parte de ese trabajo con cuidadores se sostiene bien en modalidad virtual. La evaluación con ADOS-2 sí requiere observación presencial en Bogotá.',
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
    titulo: 'Psicólogo para adolescentes en Bogotá · 12 a 17 años | David Flórez',
    descripcion:
      'Evaluación e intervención psicológica para adolescentes de 12 a 17 años en Bogotá y online: evaluación funcional, espectro autista, programa individual y PEERS. Cómo participan el adolescente y los cuidadores.',
    nombre: 'Psicología para adolescentes',
    cejilla: 'Adolescencia · 12 a 17 años',
    h1: 'Psicólogo para adolescentes en Bogotá',
    entrada:
      'Atención psicológica para adolescentes de 12 a 17 años. La evaluación se hace con el adolescente, no sobre él: entrevista directa, análisis de la dificultad en su contexto real y triangulación con cuidadores y colegio. Presencial en Bogotá y telepresencial.',
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
        titulo: 'Diagnósticos que llegan tarde',
        parrafos: [
          'Muchos diagnósticos del espectro autista llegan en la adolescencia: jóvenes que compensaron durante años y hoy presentan ansiedad, aislamiento o agotamiento social. Para ellos existe una evaluación específica con el módulo ADOS-2 para adolescentes con lenguaje fluido y la entrevista ADI-R.',
          'Si la dificultad principal está en la interacción con pares, el programa PEERS trabaja habilidades sociales en grupo.',
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
      'Evaluación del espectro autista para niños y adolescentes en Bogotá con ADOS-2 y ADI-R: qué incluye, cuántas sesiones, qué informe recibe la familia, precio y límites de la evaluación.',
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
          'Es para niñez y adolescencia. Requiere observación presencial en Bogotá; no se hace en modalidad virtual.',
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
    titulo: 'PEERS: habilidades sociales para adolescentes en Bogotá | David Flórez',
    descripcion:
      'Programa PEERS (UCLA) de habilidades sociales para adolescentes en Bogotá y online: 14 sesiones en grupo con acompañamiento a cuidadores. Para quién es, cómo funciona y precio.',
    nombre: 'PEERS · Habilidades sociales',
    cejilla: 'Habilidades sociales · adolescencia',
    h1: 'PEERS: habilidades sociales para adolescentes en Bogotá',
    entrada:
      'PEERS es un programa manualizado de UCLA para habilidades sociales en adolescentes, con evidencia en población autista y en dificultades de interacción con pares. Se enseñan reglas sociales concretas y se practican en tareas reales entre sesiones. Catorce sesiones en grupo, presencial en Bogotá o telepresencial.',
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
          'Los grupos se abren por ciclos. Las fechas del próximo grupo y los cupos disponibles se confirman por WhatsApp o en la llamada de orientación inicial, donde también se revisa si el programa encaja con el caso.',
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
      'Atención psicológica para jóvenes adultos de 18 a 25 años en Bogotá y online: ansiedad, depresión, duelo, autocrítica y regulación emocional. Evaluación inicial y programa de 16 sesiones con ACT, DBT y FAP.',
    nombre: 'Psicología para jóvenes adultos',
    cejilla: 'Adultez joven · 18 a 25 años',
    h1: 'Psicólogo para jóvenes de 18 a 25 años en Bogotá',
    entrada:
      'Atención psicológica para jóvenes de 18 a 25 años que consultan por ansiedad, depresión, duelo, autocrítica o dificultades de regulación emocional. Una evaluación inicial corta y delimitada, y después un programa de 16 sesiones desde las terapias conductuales y contextuales. Presencial en Bogotá y telepresencial.',
    servicios: ['d1', 'd2'],
    bloques: [
      {
        titulo: 'Hasta los 25 años',
        parrafos: [
          'La práctica atiende hasta los 25 años. No atiende adultos mayores de 25 ni terapia de pareja; si es tu caso, en la llamada inicial se orienta y se remite a un colega.',
        ],
      },
      COMO_EMPEZAR,
    ],
    edadMin: 18,
    edadMax: 25,
    relacionadas: ['psicologo-adolescentes-bogota'],
    articulos: [],
    preguntas: ['adultos', 'sesion-suelta', 'duracion', 'diagnostico-previo', 'donde', 'eps'],
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
