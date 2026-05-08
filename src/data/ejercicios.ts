export interface Ejercicio {
  nombre: string;
  imagen: string;
  descripcion: string;
}

export interface Subcategoria {
  slug: string;
  nombre: string;
  ejercicios: Ejercicio[];
}

export interface Categoria {
  slug: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  subcategorias: Subcategoria[];
}

export const categorias: Categoria[] = [
  {
    slug: "movilidad-consciente",
    titulo: "Movilidad Consciente",
    subtitulo: "Mejora tu control corporal",
    descripcion: "Ejercicios diseñados para mejorar la conexión mente-cuerpo y el control motor.",
    subcategorias: [
      {
        slug: "coordinacion",
        nombre: "Coordinación",
        ejercicios: [
          {
            nombre: "CoordinacióN Brazo Y Pierna",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Coordinación brazo y pierna.jpeg",
            descripcion: "Ejercicio de coordinación brazo y pierna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Escalera De CoordinacióN",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Escalera de coordinación.jpeg",
            descripcion: "Ejercicio de escalera de coordinación para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Marcha Coordinada",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Marcha coordinada.jpeg",
            descripcion: "Ejercicio de marcha coordinada para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Paso AtráS Con Brazos Coordinados",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso atrás con brazos coordinados.jpeg",
            descripcion: "Ejercicio de paso atrás con brazos coordinados para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Paso Direccional Con Alcance",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso direccional con alcance.jpeg",
            descripcion: "Ejercicio de paso direccional con alcance para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Paso Lateral Alternado",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso lateral alternado.jpeg",
            descripcion: "Ejercicio de paso lateral alternado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Paso Lateral Cruzado",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso lateral cruzado.jpeg",
            descripcion: "Ejercicio de paso lateral cruzado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Pasos Adelante Y AtráS",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Pasos adelante y atrás.jpeg",
            descripcion: "Ejercicio de pasos adelante y atrás para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Pasos Laterales RáPidos",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Pasos laterales rápidos.jpeg",
            descripcion: "Ejercicio de pasos laterales rápidos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rodillas Altas CoordinacióN",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Rodillas altas coordinación.jpeg",
            descripcion: "Ejercicio de rodillas altas coordinación para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos Coordinados",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Saltos coordinados.jpeg",
            descripcion: "Ejercicio de saltos coordinados para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos Laterales",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Saltos laterales.jpeg",
            descripcion: "Ejercicio de saltos laterales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Subir Y Bajar Step En 4 Tiempos",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Subir y bajar step en 4 tiempos.jpeg",
            descripcion: "Ejercicio de subir y bajar step en 4 tiempos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Tocar Rodilla Con Codo Opuesto",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Tocar Rodilla con Codo opuesto.jpeg",
            descripcion: "Ejercicio de tocar rodilla con codo opuesto para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Tocar Punta De Pie",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Tocar punta de pie.jpeg",
            descripcion: "Ejercicio de tocar punta de pie para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "movilidad-articular",
        nombre: "Movilidad Articular",
        ejercicios: [
          {
            nombre: "Apertura De Cadera",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Apertura de cadera.jpeg",
            descripcion: "Ejercicio de apertura de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Balanceo De Pierna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Balanceo de pierna.jpeg",
            descripcion: "Ejercicio de balanceo de pierna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "CíRculos De Rodillas",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Círculos de Rodillas.jpeg",
            descripcion: "Ejercicio de círculos de rodillas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "CíRculos De Hombros",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Círculos de hombros.jpeg",
            descripcion: "Ejercicio de círculos de hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Extensiones De Columna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Extensiones de columna.jpeg",
            descripcion: "Ejercicio de extensiones de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexo ExtensióN De Tobillo",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Flexo extensión de Tobillo.jpeg",
            descripcion: "Ejercicio de flexo extensión de tobillo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Gato Vaca",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Gato vaca.jpeg",
            descripcion: "Ejercicio de gato vaca para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movilidad De Cadera En Sentadilla",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Movilidad de cadera en sentadilla.jpeg",
            descripcion: "Ejercicio de movilidad de cadera en sentadilla para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movilidad De Cuello",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Movilidad de cuello.jpeg",
            descripcion: "Ejercicio de movilidad de cuello para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Ondulaciones De Columna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Ondulaciones de columna.jpeg",
            descripcion: "Ejercicio de ondulaciones de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones Completas De Cadera",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones completas de cadera.jpeg",
            descripcion: "Ejercicio de rotaciones completas de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones De Hombros",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones de hombros.jpeg",
            descripcion: "Ejercicio de rotaciones de hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones Externas De Cadera",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones externas de cadera.jpeg",
            descripcion: "Ejercicio de rotaciones externas de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones ToráCicas",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones torácicas.jpeg",
            descripcion: "Ejercicio de rotaciones torácicas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "RotacióN Completa De Hombros",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación completa de hombros.jpeg",
            descripcion: "Ejercicio de rotación completa de hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "RotacióN De Columna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación de columna.jpeg",
            descripcion: "Ejercicio de rotación de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "RotacióN De Hombros Con Banda",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación de hombros con banda.jpeg",
            descripcion: "Ejercicio de rotación de hombros con banda para mejorar tu rendimiento físico.",
          }
        ]
      }
    ],
  },
  {
    slug: "fuerza",
    titulo: "Fuerza",
    subtitulo: "Construye músculo y estabilidad",
    descripcion: "Entrenamiento de fuerza para desarrollar masa muscular y estabilidad articular.",
    subcategorias: [
      {
        slug: "core",
        nombre: "Core",
        ejercicios: [
          {
            nombre: "Abdominales Con Rotaciones",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales con rotaciones.jpeg",
            descripcion: "Ejercicio de abdominales con rotaciones para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales Con Rueda",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales con rueda.jpeg",
            descripcion: "Ejercicio de abdominales con rueda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales Cortos",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales cortos.jpeg",
            descripcion: "Ejercicio de abdominales cortos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales En V",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales en V.jpeg",
            descripcion: "Ejercicio de abdominales en v para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales Inferiores",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales inferiores.jpeg",
            descripcion: "Ejercicio de abdominales inferiores para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales IsoméTricos",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales isométricos.jpeg",
            descripcion: "Ejercicio de abdominales isométricos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales Rodillas Al Pecho",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales rodillas al pecho.jpeg",
            descripcion: "Ejercicio de abdominales rodillas al pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Adominales Rotaciones Con Banda",
            imagen: "/images/ejercicios/Fuerza/core/Adominales rotaciones con banda.jpeg",
            descripcion: "Ejercicio de adominales rotaciones con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bicho Muerto",
            imagen: "/images/ejercicios/Fuerza/core/Bicho muerto.jpeg",
            descripcion: "Ejercicio de bicho muerto para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bird Dog",
            imagen: "/images/ejercicios/Fuerza/core/Bird dog.jpeg",
            descripcion: "Ejercicio de bird dog para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevaciones De Piernas",
            imagen: "/images/ejercicios/Fuerza/core/Elevaciones de piernas.jpeg",
            descripcion: "Ejercicio de elevaciones de piernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevaciones De Rodillas",
            imagen: "/images/ejercicios/Fuerza/core/Elevaciones de rodillas.jpeg",
            descripcion: "Ejercicio de elevaciones de rodillas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Pies A La Barra",
            imagen: "/images/ejercicios/Fuerza/core/Pies a la barra.jpeg",
            descripcion: "Ejercicio de pies a la barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha Con Hombros",
            imagen: "/images/ejercicios/Fuerza/core/Plancha con hombros.jpeg",
            descripcion: "Ejercicio de plancha con hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha Frontal",
            imagen: "/images/ejercicios/Fuerza/core/Plancha frontal.jpeg",
            descripcion: "Ejercicio de plancha frontal para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha Lateral",
            imagen: "/images/ejercicios/Fuerza/core/Plancha lateral.jpeg",
            descripcion: "Ejercicio de plancha lateral para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones Con Polea",
            imagen: "/images/ejercicios/Fuerza/core/Rotaciones con polea.jpeg",
            descripcion: "Ejercicio de rotaciones con polea para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "fullbody",
        nombre: "Full Body",
        ejercicios: [
        ],
      },
      {
        slug: "tren-inferior",
        nombre: "Tren Inferior",
        ejercicios: [
        ],
      },
      {
        slug: "tren-superior",
        nombre: "Tren Superior",
        ejercicios: [
        ],
      },
      {
        slug: "fuerza-isometrica",
        nombre: "Fuerza Isométrica",
        ejercicios: [
        ]
      }
    ],
  },
  {
    slug: "metabolico-condicionamiento",
    titulo: "Metabólico y condicionamiento",
    subtitulo: "Incrementa tu resistencia y energía",
    descripcion: "Trabajo cardiovascular y metabólico para mejorar la capacidad aeróbica y anaeróbica.",
    subcategorias: [
      {
        slug: "cardio-continuo",
        nombre: "Cardio Continuo",
        ejercicios: [
        ],
      },
      {
        slug: "hiit",
        nombre: "HIIT",
        ejercicios: [
        ]
      }
    ],
  },
  {
    slug: "regulacion-descarga",
    titulo: "Regulación y descarga",
    subtitulo: "Relaja el cuerpo y reduce el estrés",
    descripcion: "Técnicas de recuperación activa y relajación para el bienestar general.",
    subcategorias: [
      {
        slug: "stretching-pasivo",
        nombre: "Stretching Pasivo",
        ejercicios: [
        ],
      },
      {
        slug: "movimiento-restaurativo",
        nombre: "Movimiento Restaurativo",
        ejercicios: [
        ],
      },
      {
        slug: "conciencia-corporal",
        nombre: "Conciencia Corporal",
        ejercicios: [
        ],
      },
      {
        slug: "respiracion",
        nombre: "Respiración",
        ejercicios: [
        ]
      }
    ],
  },
  {
    slug: "rehabilitacion-correctivos",
    titulo: "Rehabilitación y correctivos",
    subtitulo: "Recupera movilidad y previene lesiones",
    descripcion: "Ejercicios terapéuticos para la recuperación y prevención de lesiones.",
    subcategorias: [
      {
        slug: "cuello",
        nombre: "Cuello",
        ejercicios: [
        ],
      },
      {
        slug: "hombros",
        nombre: "Hombros",
        ejercicios: [
        ],
      },
      {
        slug: "escapulas",
        nombre: "Escápulas",
        ejercicios: [
        ],
      },
      {
        slug: "columna-toracica",
        nombre: "Columna Torácica",
        ejercicios: [
        ],
      },
      {
        slug: "columna-lumbar",
        nombre: "Columna Lumbar",
        ejercicios: [
        ],
      },
      {
        slug: "cadera",
        nombre: "Cadera",
        ejercicios: [
        ],
      },
      {
        slug: "rodillas",
        nombre: "Rodillas",
        ejercicios: [
        ],
      },
      {
        slug: "tobillo",
        nombre: "Tobillo",
        ejercicios: [
        ]
      }
    ]
  }
];
