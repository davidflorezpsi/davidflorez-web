/**
 * Formación y credenciales, tal como constan en los documentos originales
 * (diplomas, tarjeta profesional, resolución y certificados de ADIPA).
 *
 * Regla: aquí solo entra lo que tiene documento. Nunca se publica el número de
 * cédula que aparece en esos documentos. Lo que la web menciona sin documento
 * aportado va en FORMACION_SIN_SOPORTE hasta que David lo envíe.
 */

export interface Credencial {
  id: string;
  /** Tipo visible: título, registro, acreditación. */
  tipo: string;
  nombre: string;
  entidad: string;
  /** Nombre corto de quien la expide, para el schema. */
  emisor: string;
  /** Fecha legible, tal como se muestra. */
  fecha: string;
  /** ISO para el schema. */
  fechaISO: string;
  detalle?: string;
  /** Cómo verificarla públicamente. */
  verificacion?: { texto: string; url?: string };
  /** Para schema.org: degree, license, certificate. */
  categoria: 'degree' | 'license' | 'certificate';
}

export const CREDENCIALES: Credencial[] = [
  {
    id: 'especializacion',
    tipo: 'Posgrado',
    nombre: 'Especialista en Psicología Clínica',
    entidad: 'Universidad Pontificia Bolivariana, Bucaramanga',
    emisor: 'Universidad Pontificia Bolivariana',
    fecha: '18 de febrero de 2023',
    fechaISO: '2023-02-18',
    categoria: 'degree',
  },
  {
    id: 'pregrado',
    tipo: 'Pregrado',
    nombre: 'Psicólogo',
    entidad: 'Corporación Universitaria de Investigación y Desarrollo (UDI)',
    emisor: 'Corporación Universitaria de Investigación y Desarrollo (UDI)',
    fecha: '29 de noviembre de 2019',
    fechaISO: '2019-11-29',
    categoria: 'degree',
  },
  {
    id: 'tarjeta',
    tipo: 'Registro profesional',
    nombre: 'Tarjeta profesional de psicólogo No. 205129',
    entidad: 'Colegio Colombiano de Psicólogos (Colpsic)',
    emisor: 'Colegio Colombiano de Psicólogos',
    fecha: '20 de diciembre de 2019',
    fechaISO: '2019-12-20',
    detalle: 'Requisito legal para ejercer la psicología en Colombia (Ley 1090 de 2006).',
    categoria: 'license',
  },
  {
    id: 'autorizacion',
    tipo: 'Autorización de ejercicio',
    nombre: 'Autorización para el ejercicio de la psicología en todo el territorio nacional',
    entidad: 'Secretaría de Salud Departamental · Resolución 03932',
    emisor: 'Secretaría de Salud Departamental',
    fecha: '12 de junio de 2020',
    fechaISO: '2020-06-12',
    categoria: 'license',
  },
  {
    id: 'ados2',
    tipo: 'Acreditación clínica',
    nombre: 'Acreditación Oficial Clínica Internacional ADOS-2',
    entidad:
      'ADIPA (Academia Digital de Psicología y Aprendizaje), con la entrenadora Noha Minshawi-Patterson, PhD, acreditada por Western Psychological Services (WPS)',
    emisor: 'ADIPA — Academia Digital de Psicología y Aprendizaje',
    fecha: 'marzo de 2026',
    fechaISO: '2026-03-27',
    detalle: 'Programa de 24 horas, del 7 al 21 de marzo de 2026.',
    verificacion: { texto: 'Código de validación BpR8foJHtE en adipa.co/verificar', url: 'https://adipa.co/verificar/' },
    categoria: 'certificate',
  },
  {
    id: 'adir',
    tipo: 'Acreditación clínica',
    nombre: 'Acreditación Oficial Clínica Internacional ADI-R',
    entidad:
      'ADIPA (Academia Digital de Psicología y Aprendizaje), con la entrenadora oficial Costanza Colombi, PhD',
    emisor: 'ADIPA — Academia Digital de Psicología y Aprendizaje',
    fecha: 'abril de 2026',
    fechaISO: '2026-04-24',
    detalle: 'Programa de 16 horas, del 11 al 18 de abril de 2026.',
    verificacion: { texto: 'Código de validación zz603HwZVU en adipa.co/verificar', url: 'https://adipa.co/verificar/' },
    categoria: 'certificate',
  },
];

/**
 * Formación que la web ya menciona pero de la que no se ha aportado documento.
 * Se muestra sin detalle; al recibir el soporte pasa a CREDENCIALES.
 */
export const FORMACION_SIN_SOPORTE = [
  'PEERS · Habilidades sociales para adolescentes (UCLA)',
  'Diplomado en Terapia de Aceptación y Compromiso (ACT)',
  'Diplomado en Terapias Conductuales y Contextuales en Infanto-Juveniles y Adultos',
];

export const UNIVERSIDADES = [
  'Universidad Pontificia Bolivariana',
  'Corporación Universitaria de Investigación y Desarrollo (UDI)',
];
