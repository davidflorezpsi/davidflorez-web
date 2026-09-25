/**
 * Identidad del profesional y de la práctica, en un solo lugar.
 *
 * El nombre, la tarjeta profesional y los @id de los datos estructurados salen
 * de aquí para que la home, el blog, las páginas de servicio y la política de
 * privacidad no vuelvan a desincronizarse.
 */
import { WHATSAPP, CAL_COM, INSTAGRAM, SEDES } from './contacto';

export const SITIO = 'https://davidflorez.co';

export const NOMBRE_COMPLETO = 'Erwin David Flórez Rojas';
export const NOMBRE_CORTO = 'David Flórez';
export const TARJETA_PROFESIONAL = '205129';

/** Identificadores estables: los demás bloques de schema apuntan aquí. */
export const ID_PERSONA = `${SITIO}/#david`;
export const ID_PRACTICA = `${SITIO}/#practica`;
export const ID_WEB = `${SITIO}/#web`;

export const idSede = (id: string) => `${SITIO}/contacto/#sede-${id}`;

/**
 * Solo perfiles propios, vigentes y confirmados. Antes de añadir uno
 * (LinkedIn, registro profesional…) hay que confirmar que los datos que
 * muestra coinciden con los de esta web: teléfono, sedes y precios.
 * Doctoralia no entra: el perfil se cierra.
 */
export const PERFILES = [INSTAGRAM];

/**
 * Grafo base del sitio: la web, la persona y la práctica.
 *
 * La práctica es MedicalBusiness: schema.org no tiene un tipo "Psychologist",
 * y Physician atribuiría una profesión médica que no corresponde.
 * Cada sede presencial es su propio nodo (así lo pide Google para negocios con
 * varias ubicaciones), enlazado a la práctica. Sin horarios ni coordenadas:
 * el schema no debe decir más de lo que dice la página de contacto.
 */
export const DESCRIPCION_PRACTICA =
  'Psicología clínica basada en procesos para niñez, adolescencia y adultez joven. Evaluación e intervención con objetivos y progreso medible. Bogotá y online.';

export function grafoBase(
  /** Propiedades extra de la práctica (p. ej. el catálogo de la home). */
  extraPractica: Record<string, unknown> = {},
) {
  return [
    {
      '@type': 'WebSite',
      '@id': ID_WEB,
      url: `${SITIO}/`,
      name: `${NOMBRE_CORTO} · Psicólogo Clínico`,
      inLanguage: 'es-CO',
      publisher: { '@id': ID_PRACTICA },
    },
    {
      '@type': 'Person',
      '@id': ID_PERSONA,
      name: NOMBRE_COMPLETO,
      givenName: 'Erwin David',
      familyName: 'Flórez Rojas',
      alternateName: NOMBRE_CORTO,
      jobTitle: 'Psicólogo clínico',
      url: `${SITIO}/#equipo`,
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'Tarjeta profesional de psicólogo (Colombia)',
        value: TARJETA_PROFESIONAL,
      },
      knowsLanguage: 'es',
      knowsAbout: [
        'Terapia Basada en Procesos (PBT)',
        'Terapia de Aceptación y Compromiso (ACT)',
        'Terapia Dialéctica Conductual (DBT)',
        'Psicoterapia Analítico Funcional (FAP)',
        'Análisis funcional del comportamiento',
        'Entrenamiento conductual a cuidadores',
        'PEERS · Habilidades sociales',
        'ADOS-2 y ADI-R · Evaluación del espectro autista',
      ],
      worksFor: { '@id': ID_PRACTICA },
      sameAs: PERFILES,
    },
    {
      '@type': 'MedicalBusiness',
      '@id': ID_PRACTICA,
      name: `${NOMBRE_CORTO} · Psicología Clínica`,
      url: `${SITIO}/`,
      image: `${SITIO}/og-image.png`,
      description: DESCRIPCION_PRACTICA,
      telephone: `+${WHATSAPP}`,
      priceRange: '$390.000 – $2.750.000 COP',
      currenciesAccepted: 'COP',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bogotá',
        addressCountry: 'CO',
      },
      areaServed: [
        { '@type': 'City', name: 'Bogotá' },
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'Place', name: 'Latinoamérica y España (online)' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'agendamiento',
        telephone: `+${WHATSAPP}`,
        availableLanguage: 'es',
      },
      founder: { '@id': ID_PERSONA },
      employee: { '@id': ID_PERSONA },
      department: SEDES.map((sede) => ({ '@id': idSede(sede.id) })),
      sameAs: PERFILES,
      potentialAction: {
        '@type': 'ReserveAction',
        name: 'Llamada de orientación gratuita de 20 minutos',
        target: CAL_COM,
      },
      ...extraPractica,
    },
    ...SEDES.map((sede) => ({
      '@type': 'MedicalBusiness',
      '@id': idSede(sede.id),
      name: `${NOMBRE_CORTO} · Psicología Clínica — ${sede.nombre}`,
      url: `${SITIO}/contacto/`,
      image: `${SITIO}/og-image.png`,
      telephone: `+${WHATSAPP}`,
      priceRange: '$390.000 – $2.750.000 COP',
      address: {
        '@type': 'PostalAddress',
        streetAddress: [sede.direccion, sede.complemento].filter(Boolean).join(', '),
        addressLocality: 'Bogotá',
        addressRegion: 'Bogotá D.C.',
        addressCountry: 'CO',
      },
      parentOrganization: { '@id': ID_PRACTICA },
      employee: { '@id': ID_PERSONA },
    })),
  ];
}
