/**
 * Catálogo de servicios — copy y precios literales del prototipo de diseño.
 * Cambiar un precio aquí lo cambia en la tarjeta, en el cajón de detalle
 * y en el mensaje predefinido de WhatsApp.
 */

export type Audiencia = 'ninos' | 'ados' | 'adultos' | 'fam';

export interface Accion {
  label: string;
  /** Mensaje predefinido que llega a WhatsApp. Nombra el servicio y su precio. */
  msg: string;
  primaria: boolean;
}

export interface Columna {
  titulo: string;
  items?: string[];
  texto?: string;
}

export interface Detalle {
  /** Cejilla del cajón: "01 / Evaluación". */
  cejilla: string;
  titulo: string;
  columnas: Columna[];
  pie?: string;
}

export interface Servicio {
  /** Clave única global del cajón de detalle: n1, a3, d2, f1… */
  id: string;
  /** Número de parada en la ruta curva (1..4). */
  n: number;
  cejilla: string;
  titulo: string;
  desc: string;
  precio?: string;
  notaPrecio?: string;
  btnDetalle: string;
  chips: string[];
  /** Borde superior cyan de 3px. */
  destacada?: boolean;
  /** Fondo #ececec. */
  alterna?: boolean;
  /** Fondo navy, texto claro (tarjeta institucional). */
  oscura?: boolean;
  acciones: Accion[];
  detalle: Detalle;
}

export interface Pestana {
  key: Audiencia;
  label: string;
  servicios: Servicio[];
}

export const PESTANAS: Pestana[] = [
  {
    key: 'ninos',
    label: 'Niños · 2 a 11',
    servicios: [
      {
        id: 'n1',
        n: 1,
        cejilla: '01 / Evaluación',
        titulo: 'Evaluación Funcional Clínica',
        desc: 'Proceso estructurado que entrega dos cosas distintas: el análisis funcional que explica qué sostiene la dificultad de tu hijo o hija y guía el tratamiento, y el diagnóstico que pide el sistema de salud cuando corresponde.',
        precio: '$390.000',
        notaPrecio: '3 sesiones · $130.000 cada una',
        btnDetalle: 'Qué incluye y para quién',
        chips: ['Presencial · Bogotá', 'Telepresencial'],
        destacada: true,
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Evaluación Funcional Clínica ($390.000) y recibir el link de pago.', primaria: true },
        ],
        detalle: {
          cejilla: '01 / Evaluación',
          titulo: 'Evaluación Funcional Clínica',
          columnas: [
            { titulo: 'Incluye', items: [
              'Entrevista clínica estructurada con cuidadores',
              'Observación directa y entrevista del consultante',
              'Aplicación de instrumentos y análisis de registros, triangulando múltiples informantes',
              'Informe clínico con el análisis funcional del caso e indicadores de intervención',
              'Diagnóstico cuando corresponde, con la ruta de valoraciones complementarias si el cuadro es del neurodesarrollo',
              'Sesión de entrega del informe y ruta de intervención',
            ] },
            { titulo: '¿Para quién?', texto: 'Familias que notan dificultades conductuales, emocionales o del neurodesarrollo y buscan una conceptualización clínica rigurosa antes de iniciar cualquier intervención. También para segundas opiniones y familias referidas por pediatras, neuropediatras o instituciones educativas.' },
          ],
          pie: 'Si el cuadro es del neurodesarrollo, el informe incluye la ruta de valoraciones complementarias: neurología pediátrica, neuropsicología y evaluación específica cuando aplica',
        },
      },
      {
        id: 'n2',
        n: 2,
        cejilla: '02 / Evaluación especializada',
        titulo: 'Espectro autista · ADOS-2 / ADI-R',
        desc: 'Aplicación de los instrumentos de referencia internacional para la evaluación del espectro autista en niños: observación estructurada (ADOS-2) y entrevista diagnóstica con cuidadores (ADI-R), integradas en un informe único.',
        precio: '$1.050.000',
        notaPrecio: '6 sesiones · $175.000 con protocolos',
        btnDetalle: 'Qué incluye y para quién',
        chips: ['Presencial · Bogotá'],
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Espectro autista · ADOS-2 / ADI-R ($1.050.000) y recibir el link de pago.', primaria: true },
          { label: 'Financiar a cuotas', msg: 'Hola, escribo desde la web. Quiero financiar a cuotas Espectro autista · ADOS-2 / ADI-R ($1.050.000). ¿Me cuentas las opciones?', primaria: false },
        ],
        detalle: {
          cejilla: '02 / Evaluación especializada',
          titulo: 'Espectro autista · ADOS-2 / ADI-R',
          columnas: [
            { titulo: 'Incluye', items: [
              'Entrevista ADI-R con cuidadores',
              'Aplicación del módulo ADOS-2 correspondiente al nivel de lenguaje',
              'Integración con historia de desarrollo y reportes escolares',
              'Informe diagnóstico con recomendaciones de apoyo',
              'Sesión de entrega y orientación a la familia',
            ] },
            { titulo: '¿Para quién?', texto: 'Familias con sospecha de condición del espectro autista, o que requieren confirmación o segunda opinión sobre un diagnóstico previo.' },
          ],
          pie: 'Certificación ADOS-2 / ADI-R · ADIPA 2026',
        },
      },
      {
        id: 'n3',
        n: 3,
        cejilla: '03 / Intervención',
        titulo: 'Programa de Intervención Individual',
        desc: 'Ciclo de 16 sesiones de psicoterapia basada en procesos, más cuatro sesiones mensuales con los cuidadores y una asesoría al colegio. Objetivos conductuales definidos desde la primera sesión y seguimiento cuantificable del progreso. No es acompañamiento abierto: es un programa con criterios clínicos claros de avance y cierre.',
        precio: '$2.750.000',
        notaPrecio: '20 sesiones · $130.000 + asesoría al colegio',
        btnDetalle: 'Qué incluye y cómo se ingresa',
        chips: ['Presencial · Bogotá', 'Telepresencial'],
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Programa de Intervención Individual ($2.750.000) y recibir el link de pago.', primaria: true },
          { label: 'Financiar a cuotas', msg: 'Hola, escribo desde la web. Quiero financiar a cuotas Programa de Intervención Individual ($2.750.000). ¿Me cuentas las opciones?', primaria: false },
        ],
        detalle: {
          cejilla: '03 / Intervención',
          titulo: 'Programa de Intervención Individual',
          columnas: [
            { titulo: 'Incluye', items: [
              '16 sesiones individuales con el consultante',
              '4 sesiones con los cuidadores, una por cada mes del ciclo',
              'Una asesoría al colegio durante el ciclo, con el equipo de psicoorientación',
              'Registro conductual continuo a lo largo del ciclo',
              '4 reportes mensuales de progreso para los cuidadores',
              'Sesión de cierre y evaluación de resultados',
            ] },
            { titulo: 'Condición de ingreso', texto: 'Haber completado la Evaluación Funcional conmigo, o presentar un informe externo vigente (no mayor a 12 meses) cuya calidad permita construir la formulación sobre él. Si el informe no alcanza, hay que reevaluar antes de iniciar.' },
          ],
          pie: 'La asesoría al colegio va incluida en el programa a $150.000. Contratada por fuera, la hora de asesoría institucional es de $185.000',
        },
      },
      {
        id: 'n4',
        n: 4,
        cejilla: '04 / Padres',
        titulo: 'Entrenamiento conductual a cuidadores',
        desc: 'Programa de entrenamiento a cuidadores con evidencia para dificultades conductuales en primera y segunda infancia. El trabajo ocurre en la interacción real: el cuidador practica en sesión con acompañamiento en vivo.',
        precio: '$1.040.000',
        notaPrecio: '8 sesiones · $130.000 cada una',
        btnDetalle: 'Cómo funciona',
        chips: ['Presencial · Bogotá'],
        alterna: true,
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Entrenamiento conductual a cuidadores ($1.040.000) y recibir el link de pago.', primaria: true },
          { label: 'Financiar a cuotas', msg: 'Hola, escribo desde la web. Quiero financiar a cuotas Entrenamiento conductual a cuidadores ($1.040.000). ¿Me cuentas las opciones?', primaria: false },
        ],
        detalle: {
          cejilla: '04 / Padres',
          titulo: 'Entrenamiento conductual a cuidadores',
          columnas: [
            { titulo: 'Incluye', items: [
              'Sesiones con el cuidador y el niño o niña juntos',
              'Codificación de la interacción en cada sesión',
              'Práctica en casa con registro diario',
              'Avance por criterios de dominio, no por número de sesiones',
            ] },
          ],
        },
      },
    ],
  },
  {
    key: 'ados',
    label: 'Adolescentes · 12 a 17',
    servicios: [
      {
        id: 'a1',
        n: 1,
        cejilla: '01 / Evaluación',
        titulo: 'Evaluación Funcional Clínica',
        desc: 'Con adolescentes la evaluación se hace con ellos, no sobre ellos: entrevista directa, análisis funcional de la conducta problema en su contexto real y triangulación con cuidadores y colegio.',
        precio: '$390.000',
        notaPrecio: '3 sesiones · $130.000 cada una',
        btnDetalle: 'Qué incluye y para quién',
        chips: ['Presencial · Bogotá', 'Telepresencial'],
        destacada: true,
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Evaluación Funcional Clínica ($390.000) y recibir el link de pago.', primaria: true },
        ],
        detalle: {
          cejilla: '01 / Evaluación',
          titulo: 'Evaluación Funcional Clínica',
          columnas: [
            { titulo: 'Incluye', items: [
              'Entrevista clínica estructurada con cuidadores',
              'Entrevista individual con el o la adolescente',
              'Aplicación de instrumentos y análisis de registros, triangulando múltiples informantes',
              'Informe clínico con el análisis funcional del caso e indicadores de intervención',
              'Diagnóstico cuando corresponde, con la ruta de valoraciones complementarias si el cuadro es del neurodesarrollo',
              'Sesión de entrega del informe y ruta de intervención',
            ] },
            { titulo: '¿Para quién?', texto: 'Familias que notan dificultades emocionales, conductuales o del neurodesarrollo en la adolescencia y buscan una conceptualización clínica rigurosa antes de iniciar intervención. También para segundas opiniones y casos referidos por colegios o instituciones.' },
          ],
        },
      },
      {
        id: 'a2',
        n: 2,
        cejilla: '02 / Evaluación especializada',
        titulo: 'Espectro autista en adolescentes',
        desc: 'Muchos diagnósticos llegan tarde: adolescentes que compensaron durante años y hoy presentan ansiedad, aislamiento o agotamiento social. La evaluación usa el módulo ADOS-2 para adolescentes con lenguaje fluido, junto con la entrevista ADI-R.',
        precio: '$1.050.000',
        notaPrecio: '6 sesiones · $175.000 con protocolos',
        btnDetalle: 'Qué incluye y para quién',
        chips: ['Presencial · Bogotá'],
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Espectro autista en adolescentes ($1.050.000) y recibir el link de pago.', primaria: true },
          { label: 'Financiar a cuotas', msg: 'Hola, escribo desde la web. Quiero financiar a cuotas Espectro autista en adolescentes ($1.050.000). ¿Me cuentas las opciones?', primaria: false },
        ],
        detalle: {
          cejilla: '02 / Evaluación especializada',
          titulo: 'Espectro autista en adolescentes',
          columnas: [
            { titulo: 'Incluye', items: [
              'Entrevista ADI-R con cuidadores',
              'Módulo ADOS-2 para adolescentes con lenguaje fluido',
              'Revisión de historia escolar y de desarrollo',
              'Informe diagnóstico con recomendaciones de apoyo',
              'Sesión de entrega con la familia y con el o la adolescente',
            ] },
            { titulo: '¿Para quién?', texto: 'Adolescentes con sospecha de condición del espectro autista no detectada en la infancia, o que requieren confirmación o segunda opinión sobre un diagnóstico previo.' },
          ],
        },
      },
      {
        id: 'a3',
        n: 3,
        cejilla: '03 / Intervención',
        titulo: 'Programa de Intervención Individual',
        desc: 'Ciclo de 16 sesiones con objetivos conductuales definidos desde la primera sesión y seguimiento cuantificable, más cuatro sesiones mensuales con los cuidadores y una asesoría al colegio. Con adolescentes se negocia el encuadre: qué se comparte con los cuidadores y qué queda en el espacio terapéutico.',
        precio: '$2.750.000',
        notaPrecio: '20 sesiones · $130.000 + asesoría al colegio',
        btnDetalle: 'Qué incluye y cómo se ingresa',
        chips: ['Presencial · Bogotá', 'Telepresencial'],
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Programa de Intervención Individual ($2.750.000) y recibir el link de pago.', primaria: true },
          { label: 'Financiar a cuotas', msg: 'Hola, escribo desde la web. Quiero financiar a cuotas Programa de Intervención Individual ($2.750.000). ¿Me cuentas las opciones?', primaria: false },
        ],
        detalle: {
          cejilla: '03 / Intervención',
          titulo: 'Programa de Intervención Individual',
          columnas: [
            { titulo: 'Incluye', items: [
              '16 sesiones individuales con el consultante',
              '4 sesiones con los cuidadores, una por cada mes del ciclo',
              'Una asesoría al colegio durante el ciclo, con el equipo de psicoorientación',
              'Registro conductual continuo a lo largo del ciclo',
              '4 reportes mensuales de progreso para los cuidadores',
              'Sesión de cierre y evaluación de resultados',
            ] },
            { titulo: 'Condición de ingreso', texto: 'Haber completado la Evaluación Funcional conmigo, o presentar un informe externo vigente (no mayor a 12 meses) cuya calidad permita construir la formulación sobre él. Si el informe no alcanza, hay que reevaluar antes de iniciar.' },
          ],
          pie: 'La asesoría al colegio va incluida en el programa a $150.000. Contratada por fuera, la hora de asesoría institucional es de $185.000',
        },
      },
      {
        id: 'a4',
        n: 4,
        cejilla: '04 / Habilidades sociales',
        titulo: 'PEERS · Habilidades sociales',
        desc: 'Programa manualizado de UCLA para habilidades sociales en adolescentes, con evidencia en población autista y en dificultades de interacción con pares. Se enseñan reglas sociales concretas y se practican en tareas reales entre sesiones.',
        precio: '$1.400.000',
        notaPrecio: '14 sesiones en grupo · $100.000 por adolescente',
        btnDetalle: 'Cómo funciona',
        chips: ['Presencial · Bogotá', 'Telepresencial'],
        alterna: true,
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar PEERS · Habilidades sociales ($1.400.000) y recibir el link de pago.', primaria: true },
          { label: 'Financiar a cuotas', msg: 'Hola, escribo desde la web. Quiero financiar a cuotas PEERS · Habilidades sociales ($1.400.000). ¿Me cuentas las opciones?', primaria: false },
        ],
        detalle: {
          cejilla: '04 / Habilidades sociales',
          titulo: 'PEERS · Habilidades sociales',
          columnas: [
            { titulo: 'Incluye', items: [
              'Sesiones estructuradas con el o la adolescente',
              'Sesiones paralelas de acompañamiento a cuidadores',
              'Tareas sociales entre sesiones, con revisión semanal',
              'Medición de habilidades al inicio y al cierre',
            ] },
          ],
          pie: 'Certificación PEERS · ADIPA 2026',
        },
      },
    ],
  },
  {
    key: 'adultos',
    label: 'Jóvenes adultos · 18 a 25',
    servicios: [
      {
        id: 'd1',
        n: 1,
        cejilla: '01 / Evaluación',
        titulo: 'Evaluación Clínica Inicial',
        desc: 'Proceso corto y delimitado que entrega dos cosas distintas: el análisis funcional que explica qué sostiene el malestar y guía el trabajo, y el diagnóstico que pide el sistema de salud cuando corresponde.',
        precio: '$390.000',
        notaPrecio: '3 sesiones · $130.000 cada una',
        btnDetalle: 'Qué incluye y para quién',
        chips: ['Presencial · Bogotá', 'Telepresencial'],
        destacada: true,
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Evaluación Clínica Inicial ($390.000) y recibir el link de pago.', primaria: true },
        ],
        detalle: {
          cejilla: '01 / Evaluación',
          titulo: 'Evaluación Clínica Inicial',
          columnas: [
            { titulo: 'Incluye', items: [
              'Entrevista clínica estructurada',
              'Aplicación de pruebas psicológicas según el motivo de consulta',
              'Formulación funcional del caso, con hipótesis explícita',
              'Diagnóstico cuando corresponde, para el sistema de salud',
              'Devolución con plan de trabajo y criterios de cierre',
            ] },
            { titulo: '¿Para quién?', texto: 'Jóvenes de 18 a 25 años que consultan por ansiedad, depresión, duelo, autocrítica o dificultades de regulación emocional, y quieren una formulación clara antes de comprometerse con un proceso.' },
          ],
        },
      },
      {
        id: 'd2',
        n: 2,
        cejilla: '02 / Intervención',
        titulo: 'Programa de Intervención Individual',
        desc: 'Ciclo de 16 sesiones desde las terapias conductuales y contextuales — ACT, DBT y FAP. Objetivos acordados desde la primera sesión y revisión periódica del progreso.',
        precio: '$2.080.000',
        notaPrecio: '16 sesiones · $130.000 cada una',
        btnDetalle: 'Qué incluye y cómo se ingresa',
        chips: ['Presencial · Bogotá', 'Telepresencial'],
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Programa de Intervención Individual ($2.080.000) y recibir el link de pago.', primaria: true },
          { label: 'Financiar a cuotas', msg: 'Hola, escribo desde la web. Quiero financiar a cuotas Programa de Intervención Individual ($2.080.000). ¿Me cuentas las opciones?', primaria: false },
        ],
        detalle: {
          cejilla: '02 / Intervención',
          titulo: 'Programa de Intervención Individual',
          columnas: [
            { titulo: 'Incluye', items: [
              '16 sesiones individuales',
              'Objetivos acordados y escritos en la primera sesión',
              'Práctica entre sesiones con registro propio',
              'Revisión de progreso cada cuatro sesiones',
              'Sesión de cierre y evaluación de resultados',
            ] },
            { titulo: 'Condición de ingreso', texto: 'Haber completado la Evaluación Clínica Inicial conmigo, o presentar un informe externo vigente (no mayor a 12 meses) cuya calidad permita construir la formulación sobre él. Si el informe no alcanza, hay que reevaluar antes de iniciar.' },
          ],
        },
      },
    ],
  },
  {
    key: 'fam',
    label: 'Familias e instituciones',
    servicios: [
      {
        id: 'f1',
        n: 1,
        cejilla: '01 / Familias',
        titulo: 'Coaching parental',
        desc: 'Trabajo directo con cuidadores sobre las prácticas de crianza que sostienen o modifican la conducta del niño o adolescente. El foco no es el diagnóstico del hijo, es lo que ocurre en la interacción diaria.',
        precio: '$130.000',
        notaPrecio: 'por sesión · el número se acuerda en la llamada',
        btnDetalle: 'Cómo funciona',
        chips: ['Presencial · Bogotá', 'Telepresencial'],
        destacada: true,
        acciones: [
          { label: 'Reservar y pagar', msg: 'Hola, escribo desde la web. Quiero reservar Coaching parental ($130.000 por sesión) y recibir el link de pago.', primaria: true },
        ],
        detalle: {
          cejilla: '01 / Familias',
          titulo: 'Coaching parental',
          columnas: [
            { titulo: 'Incluye', items: [
              'Análisis funcional de las situaciones difíciles de la casa',
              'Acuerdos concretos de manejo, con registro entre sesiones',
              'Revisión de resultados y ajuste de la estrategia',
              'Cuando aplica, se deriva al entrenamiento conductual a cuidadores o al programa individual',
            ] },
            { titulo: 'Qué es y qué no', texto: 'Se paga por sesión, pero no son sesiones sueltas: el número se acuerda en la llamada, con objetivos y registro entre sesiones. Es trabajo con los adultos de la casa, no psicoterapia del niño o adolescente, y no reemplaza el programa de intervención cuando el caso lo pide.' },
          ],
        },
      },
      {
        id: 'f2',
        n: 2,
        cejilla: '02 / Instituciones',
        titulo: 'Colegios y equipos de psicoorientación',
        desc: 'Trabajo con instituciones educativas en cuatro frentes. Cada uno se cotiza según alcance, número de participantes y modalidad.',
        precio: '$185.000 / hora',
        notaPrecio: 'asesoría · taller $1.800.000 por grupo',
        btnDetalle: 'Cuatro frentes de trabajo',
        chips: ['B2B · cotización a la medida'],
        oscura: true,
        acciones: [
          { label: 'Solicitar cotización', msg: 'Hola, escribo desde la web. Necesito una cotización de servicios institucionales: ', primaria: false },
        ],
        detalle: {
          cejilla: '02 / Instituciones',
          titulo: 'Colegios y equipos de psicoorientación',
          columnas: [
            { titulo: 'Incluye', items: [
              'Talleres y capacitación docente · $1.800.000 por grupo',
              'Asesoría a psicoorientación en casos',
              'Evaluaciones referidas por el colegio',
              'Charlas a familias del colegio · $90.000 por persona en cupo abierto',
            ] },
            { titulo: 'Cómo se contrata', texto: 'Escribe por WhatsApp con el alcance que necesitas — número de participantes, modalidad y fechas — y se cotiza a la medida. Si la familia ya está en un programa de intervención individual, la asesoría al colegio va incluida a $150.000 en lugar de la hora suelta. Los talleres abiertos a familias van a $90.000 por persona. La llamada de orientación gratuita está reservada para familias.' },
          ],
        },
      },
    ],
  },
];
