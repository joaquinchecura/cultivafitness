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
          {
            nombre: "Arranque De Potencia",
            imagen: "/images/ejercicios/Fuerza/fullbody/Arranque de potencia.jpeg",
            descripcion: "Ejercicio de arranque de potencia para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Burpees",
            imagen: "/images/ejercicios/Fuerza/fullbody/Burpees.jpeg",
            descripcion: "Ejercicio de burpees para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata Con Carga",
            imagen: "/images/ejercicios/Fuerza/fullbody/Caminata con carga.jpeg",
            descripcion: "Ejercicio de caminata con carga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata De Oso",
            imagen: "/images/ejercicios/Fuerza/fullbody/Caminata de Oso.jpeg",
            descripcion: "Ejercicio de caminata de oso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata De Granjero",
            imagen: "/images/ejercicios/Fuerza/fullbody/Caminata de granjero.jpeg",
            descripcion: "Ejercicio de caminata de granjero para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Cargada Y Empuje Vertical",
            imagen: "/images/ejercicios/Fuerza/fullbody/Cargada y empuje vertical.jpeg",
            descripcion: "Ejercicio de cargada y empuje vertical para mejorar tu rendimiento físico.",
          },
          {
            nombre: "ElevacióN De Carga",
            imagen: "/images/ejercicios/Fuerza/fullbody/Elevación de carga.jpeg",
            descripcion: "Ejercicio de elevación de carga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Empuje Vertical Con Mancuerna",
            imagen: "/images/ejercicios/Fuerza/fullbody/Empuje vertical con mancuerna.jpeg",
            descripcion: "Ejercicio de empuje vertical con mancuerna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Macho Man",
            imagen: "/images/ejercicios/Fuerza/fullbody/Macho man.jpeg",
            descripcion: "Ejercicio de macho man para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Pararse Con Peso",
            imagen: "/images/ejercicios/Fuerza/fullbody/Pararse con peso.jpeg",
            descripcion: "Ejercicio de pararse con peso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo En Plancha",
            imagen: "/images/ejercicios/Fuerza/fullbody/Remo en plancha.jpeg",
            descripcion: "Ejercicio de remo en plancha para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rodillas Al Pecho",
            imagen: "/images/ejercicios/Fuerza/fullbody/Rodillas al pecho.jpeg",
            descripcion: "Ejercicio de rodillas al pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla Con Empuje Vertical",
            imagen: "/images/ejercicios/Fuerza/fullbody/Sentadilla con empuje vertical.jpeg",
            descripcion: "Ejercicio de sentadilla con empuje vertical para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla Con Lanzamiento De Pelota",
            imagen: "/images/ejercicios/Fuerza/fullbody/Sentadilla con lanzamiento de pelota.jpeg",
            descripcion: "Ejercicio de sentadilla con lanzamiento de pelota para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Subidas Al Step Con Peso",
            imagen: "/images/ejercicios/Fuerza/fullbody/Subidas al step con peso.jpeg",
            descripcion: "Ejercicio de subidas al step con peso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Swing Con Pesa Alternado",
            imagen: "/images/ejercicios/Fuerza/fullbody/Swing con pesa alternado.jpeg",
            descripcion: "Ejercicio de swing con pesa alternado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Swing Con Pesa Rusa",
            imagen: "/images/ejercicios/Fuerza/fullbody/Swing con pesa rusa.jpeg",
            descripcion: "Ejercicio de swing con pesa rusa para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Thruster Con Barra",
            imagen: "/images/ejercicios/Fuerza/fullbody/Thruster con barra.jpeg",
            descripcion: "Ejercicio de thruster con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Thruster Con Mancuerna",
            imagen: "/images/ejercicios/Fuerza/fullbody/Thruster con mancuerna.jpeg",
            descripcion: "Ejercicio de thruster con mancuerna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Zancada Con RotacióN",
            imagen: "/images/ejercicios/Fuerza/fullbody/Zancada con rotación.jpeg",
            descripcion: "Ejercicio de zancada con rotación para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "tren-inferior",
        nombre: "Tren Inferior",
        ejercicios: [
          {
            nombre: "AbduccióN De Cadera",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Abducción de cadera.jpeg",
            descripcion: "Ejercicio de abducción de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata Lateral Con Banda",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Caminata lateral con banda.jpeg",
            descripcion: "Ejercicio de caminata lateral con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "CuáDriceps En MáQuina",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Cuádriceps en máquina.jpeg",
            descripcion: "Ejercicio de cuádriceps en máquina para mejorar tu rendimiento físico.",
          },
          {
            nombre: "ElevacióN De Talones Parado",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Elevación de talones parado.jpeg",
            descripcion: "Ejercicio de elevación de talones parado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "ElevacióN De Talones Sentado",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Elevación de talones sentado.jpeg",
            descripcion: "Ejercicio de elevación de talones sentado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Empuje De Cadera",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Empuje de cadera.jpeg",
            descripcion: "Ejercicio de empuje de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Isquiotibiales Con MáQuina",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Isquiotibiales con máquina.jpeg",
            descripcion: "Ejercicio de isquiotibiales con máquina para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Peso Muerto Convencional",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Peso muerto convencional.jpeg",
            descripcion: "Ejercicio de peso muerto convencional para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Peso Muerto Rumano",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Peso muerto rumano.jpeg",
            descripcion: "Ejercicio de peso muerto rumano para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Prensa De Piernas",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Prensa de piernas.jpeg",
            descripcion: "Ejercicio de prensa de piernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Puente De GlúTeos",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Puente de Glúteos.jpeg",
            descripcion: "Ejercicio de puente de glúteos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla BúLgara",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla búlgara.jpeg",
            descripcion: "Ejercicio de sentadilla búlgara para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla Con Barra",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla con barra.jpeg",
            descripcion: "Ejercicio de sentadilla con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla Globet",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla globet.jpeg",
            descripcion: "Ejercicio de sentadilla globet para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla Sumo",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla sumo.jpeg",
            descripcion: "Ejercicio de sentadilla sumo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla.jpeg",
            descripcion: "Ejercicio de sentadilla para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Subidas Al CajóN",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Subidas al cajón.jpeg",
            descripcion: "Ejercicio de subidas al cajón para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Swing Con Pesa",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Swing con pesa.jpeg",
            descripcion: "Ejercicio de swing con pesa para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Zancadas Caminando",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Zancadas caminando.jpeg",
            descripcion: "Ejercicio de zancadas caminando para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Zancadas Con Mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Zancadas con mancuernas.jpeg",
            descripcion: "Ejercicio de zancadas con mancuernas para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "tren-superior",
        nombre: "Tren Superior",
        ejercicios: [
          {
            nombre: "BíCeps Con Barra",
            imagen: "/images/ejercicios/Fuerza/tren superior/Bíceps con barra.jpeg",
            descripcion: "Ejercicio de bíceps con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "BíCeps Con Mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Bíceps con mancuernas.jpeg",
            descripcion: "Ejercicio de bíceps con mancuernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Dominadas Asistidas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Dominadas asistidas.jpeg",
            descripcion: "Ejercicio de dominadas asistidas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Dominadas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Dominadas.jpeg",
            descripcion: "Ejercicio de dominadas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevaciones Laterales Con Peso",
            imagen: "/images/ejercicios/Fuerza/tren superior/Elevaciones laterales con peso.jpeg",
            descripcion: "Ejercicio de elevaciones laterales con peso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "ExtensióN De TríCeps Con Polea",
            imagen: "/images/ejercicios/Fuerza/tren superior/Extensión de Tríceps con polea.jpeg",
            descripcion: "Ejercicio de extensión de tríceps con polea para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexo ExtensióN De Pecho",
            imagen: "/images/ejercicios/Fuerza/tren superior/Flexo extensión de pecho.jpeg",
            descripcion: "Ejercicio de flexo extensión de pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Fondos En Paralelas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Fondos en paralelas.jpeg",
            descripcion: "Ejercicio de fondos en paralelas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Jalones A La Cara",
            imagen: "/images/ejercicios/Fuerza/tren superior/Jalones a la cara.jpeg",
            descripcion: "Ejercicio de jalones a la cara para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Patada De TríCeps",
            imagen: "/images/ejercicios/Fuerza/tren superior/Patada de Tríceps.jpeg",
            descripcion: "Ejercicio de patada de tríceps para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press De Hombros Con Mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press de hombros con mancuernas.jpeg",
            descripcion: "Ejercicio de press de hombros con mancuernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press De Pecho Con Mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press de pecho con mancuernas.jpeg",
            descripcion: "Ejercicio de press de pecho con mancuernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press De Pecho Inclinado",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press de pecho inclinado.jpeg",
            descripcion: "Ejercicio de press de pecho inclinado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press En Banco Inclinado",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press en banco inclinado.jpeg",
            descripcion: "Ejercicio de press en banco inclinado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press Militar Con Barra",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press militar con barra.jpeg",
            descripcion: "Ejercicio de press militar con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo Bajo Con Polea",
            imagen: "/images/ejercicios/Fuerza/tren superior/Remo bajo con polea.jpeg",
            descripcion: "Ejercicio de remo bajo con polea para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo Con Barra",
            imagen: "/images/ejercicios/Fuerza/tren superior/Remo con barra.jpeg",
            descripcion: "Ejercicio de remo con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo Con Mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Remo con mancuernas.jpeg",
            descripcion: "Ejercicio de remo con mancuernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Vuelos Posteriores",
            imagen: "/images/ejercicios/Fuerza/tren superior/Vuelos posteriores.jpeg",
            descripcion: "Ejercicio de vuelos posteriores para mejorar tu rendimiento físico.",
          },
          {
            nombre: "JalóN Con Polea",
            imagen: "/images/ejercicios/Fuerza/tren superior/jalón con polea.jpeg",
            descripcion: "Ejercicio de jalón con polea para mejorar tu rendimiento físico.",
          }
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
          {
            nombre: "AeróBicos De Bajo Impacto",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Aeróbicos de bajo impacto.jpeg",
            descripcion: "Ejercicio de aeróbicos de bajo impacto para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bicicleta De Aire",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Bicicleta de aire.jpeg",
            descripcion: "Ejercicio de bicicleta de aire para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bicicleta Fija",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Bicicleta fija.jpeg",
            descripcion: "Ejercicio de bicicleta fija para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Camina En Escalador",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Camina en escalador.jpeg",
            descripcion: "Ejercicio de camina en escalador para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata Con InclinacióN",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Caminata con inclinación.jpeg",
            descripcion: "Ejercicio de caminata con inclinación para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata RáPida",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Caminata rápida.jpeg",
            descripcion: "Ejercicio de caminata rápida para mejorar tu rendimiento físico.",
          },
          {
            nombre: "ElíPtico",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Elíptico.jpeg",
            descripcion: "Ejercicio de elíptico para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Escaleras",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Escaleras.jpeg",
            descripcion: "Ejercicio de escaleras para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo ErgoméTrico",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Remo ergométrico.jpeg",
            descripcion: "Ejercicio de remo ergométrico para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remos Con MáQuina",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Remos con máquina.jpeg",
            descripcion: "Ejercicio de remos con máquina para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos Con Soga",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Saltos con soga.jpeg",
            descripcion: "Ejercicio de saltos con soga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Trote Con Intervalos",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Trote con intervalos.jpeg",
            descripcion: "Ejercicio de trote con intervalos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Trote Continuo",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/cardio continuo/Trote continuo.jpeg",
            descripcion: "Ejercicio de trote continuo para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "hiit",
        nombre: "HIIT",
        ejercicios: [
          {
            nombre: "Burpees",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Burpees.jpeg",
            descripcion: "Ejercicio de burpees para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Complex Con Barra",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Complex con barra.jpeg",
            descripcion: "Ejercicio de complex con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevaciones De Talones",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Elevaciones de talones.jpeg",
            descripcion: "Ejercicio de elevaciones de talones para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Empuje De Trineo",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Empuje de trineo.jpeg",
            descripcion: "Ejercicio de empuje de trineo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estocadas Laterales",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Estocadas laterales.jpeg",
            descripcion: "Ejercicio de estocadas laterales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexo ExtensióN Con Toque De Hombros",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Flexo extensión con toque de hombros.jpeg",
            descripcion: "Ejercicio de flexo extensión con toque de hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Golpes Con La Soga",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Golpes con la soga.jpeg",
            descripcion: "Ejercicio de golpes con la soga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Marcha Con Rodillas Elevadas",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Marcha con rodillas elevadas.jpeg",
            descripcion: "Ejercicio de marcha con rodillas elevadas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Medio Burpee",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Medio burpee.jpeg",
            descripcion: "Ejercicio de medio burpee para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Ondas Con Soga",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Ondas con soga.jpeg",
            descripcion: "Ejercicio de ondas con soga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha Con Paso Lateral",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Plancha con paso lateral.jpeg",
            descripcion: "Ejercicio de plancha con paso lateral para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha Con Rodillas Al Pecho",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Plancha con rodillas al pecho.jpeg",
            descripcion: "Ejercicio de plancha con rodillas al pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo En Plancha",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Remo en plancha.jpeg",
            descripcion: "Ejercicio de remo en plancha para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Salto Hacia Delante",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Salto hacia delante.jpeg",
            descripcion: "Ejercicio de salto hacia delante para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos Al CajóN",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Saltos al cajón.jpeg",
            descripcion: "Ejercicio de saltos al cajón para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos Con Rodillas Al Pecho",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Saltos con rodillas al pecho.jpeg",
            descripcion: "Ejercicio de saltos con rodillas al pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos Con Soga",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Saltos con soga.jpeg",
            descripcion: "Ejercicio de saltos con soga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos Con Zancadas",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Saltos con zancadas.jpeg",
            descripcion: "Ejercicio de saltos con zancadas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos Desde Sentadilla",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Saltos desde sentadilla.jpeg",
            descripcion: "Ejercicio de saltos desde sentadilla para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos Laterales",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Saltos laterales.jpeg",
            descripcion: "Ejercicio de saltos laterales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla Contra Pared",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Sentadilla contra pared.jpeg",
            descripcion: "Ejercicio de sentadilla contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadillas Con Brazos Elevados",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Sentadillas con brazos elevados.jpeg",
            descripcion: "Ejercicio de sentadillas con brazos elevados para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Skipping A",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Skipping A.jpeg",
            descripcion: "Ejercicio de skipping a para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sprint Con Intervalos Cortos",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Sprint con intervalos cortos.jpeg",
            descripcion: "Ejercicio de sprint con intervalos cortos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sprint Cortos En Pendiente",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Sprint cortos en pendiente.jpeg",
            descripcion: "Ejercicio de sprint cortos en pendiente para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sprint En Airbike",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Sprint en airbike.jpeg",
            descripcion: "Ejercicio de sprint en airbike para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Step Jacks",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Step jacks.jpeg",
            descripcion: "Ejercicio de step jacks para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Subidas Al CajóN",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Subidas al cajón.jpeg",
            descripcion: "Ejercicio de subidas al cajón para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Swing Con Balanceo",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Swing con balanceo.jpeg",
            descripcion: "Ejercicio de swing con balanceo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Thruster",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Thruster.jpeg",
            descripcion: "Ejercicio de thruster para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Thrusters Con Cargada De Mancuernas",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/hiit/Thrusters con cargada de mancuernas.jpeg",
            descripcion: "Ejercicio de thrusters con cargada de mancuernas para mejorar tu rendimiento físico.",
          }
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
          {
            nombre: "Estirameinto De Pantorrilla",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estirameinto de pantorrilla.jpeg",
            descripcion: "Ejercicio de estirameinto de pantorrilla para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Adductores",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de adductores.jpeg",
            descripcion: "Ejercicio de estiramiento de adductores para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De BíCeps En Pared",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de bíceps en pared.jpeg",
            descripcion: "Ejercicio de estiramiento de bíceps en pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De BíCeps Posterior",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de bíceps posterior.jpeg",
            descripcion: "Ejercicio de estiramiento de bíceps posterior para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Cadera Arrodillado",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de cadera arrodillado.jpeg",
            descripcion: "Ejercicio de estiramiento de cadera arrodillado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Cadera Sentado",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de cadera sentado.jpeg",
            descripcion: "Ejercicio de estiramiento de cadera sentado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De CuáDriceps Arrodillado",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de cuádriceps arrodillado.jpeg",
            descripcion: "Ejercicio de estiramiento de cuádriceps arrodillado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De CuáDriceps Parado",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de cuádriceps parado.jpeg",
            descripcion: "Ejercicio de estiramiento de cuádriceps parado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De CuáDriceps",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de cuádriceps.jpeg",
            descripcion: "Ejercicio de estiramiento de cuádriceps para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Dorsales Con Abrazo",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de dorsales con abrazo.jpeg",
            descripcion: "Ejercicio de estiramiento de dorsales con abrazo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Dorsales",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de dorsales.jpeg",
            descripcion: "Ejercicio de estiramiento de dorsales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Gemelos En Step",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de gemelos en step.jpeg",
            descripcion: "Ejercicio de estiramiento de gemelos en step para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Gemelos",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de gemelos.jpeg",
            descripcion: "Ejercicio de estiramiento de gemelos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De GlúTeos Acostado",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de glúteos acostado.jpeg",
            descripcion: "Ejercicio de estiramiento de glúteos acostado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De GlúTeos",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de glúteos.jpeg",
            descripcion: "Ejercicio de estiramiento de glúteos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Hombros Contra Pared",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de hombros contra pared.jpeg",
            descripcion: "Ejercicio de estiramiento de hombros contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Hombros Cruzado",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de hombros cruzado.jpeg",
            descripcion: "Ejercicio de estiramiento de hombros cruzado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Hombros Sobre Cabeza",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de hombros sobre cabeza.jpeg",
            descripcion: "Ejercicio de estiramiento de hombros sobre cabeza para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Isquiotibiales",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de isquiotibiales.jpeg",
            descripcion: "Ejercicio de estiramiento de isquiotibiales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Isquiotibilaes Con Banda",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de isquiotibilaes con banda.jpeg",
            descripcion: "Ejercicio de estiramiento de isquiotibilaes con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Isquiotibilaes Parado",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de isquiotibilaes parado.jpeg",
            descripcion: "Ejercicio de estiramiento de isquiotibilaes parado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Isquiotibilaes Sentado",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de isquiotibilaes sentado.jpeg",
            descripcion: "Ejercicio de estiramiento de isquiotibilaes sentado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Pecho Contra Pared",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de pecho contra pared.jpeg",
            descripcion: "Ejercicio de estiramiento de pecho contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Pecho Contra Puerta",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de pecho contra puerta.jpeg",
            descripcion: "Ejercicio de estiramiento de pecho contra puerta para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Pectorales",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de pectorales.jpeg",
            descripcion: "Ejercicio de estiramiento de pectorales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De Tibiales",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de tibiales.jpeg",
            descripcion: "Ejercicio de estiramiento de tibiales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De TríCeps Trasnuca",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de tríceps trasnuca.jpeg",
            descripcion: "Ejercicio de estiramiento de tríceps trasnuca para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento De TríCeps",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento de tríceps.jpeg",
            descripcion: "Ejercicio de estiramiento de tríceps para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento Lateral De Columna",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento lateral de columna.jpeg",
            descripcion: "Ejercicio de estiramiento lateral de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento Lateral De Cuello",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento lateral de cuello.jpeg",
            descripcion: "Ejercicio de estiramiento lateral de cuello para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento Lumbar Con RotacióN",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento lumbar con rotación.jpeg",
            descripcion: "Ejercicio de estiramiento lumbar con rotación para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento Lumbar",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Estiramiento lumbar.jpeg",
            descripcion: "Ejercicio de estiramiento lumbar para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexo ExtensióN De Cuello",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Flexo extensión de cuello.jpeg",
            descripcion: "Ejercicio de flexo extensión de cuello para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Postura De Descanso",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Postura de descanso.jpeg",
            descripcion: "Ejercicio de postura de descanso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "RotacióN De Cuello",
            imagen: "/images/ejercicios/Regulación y descarga/stretching pasivo/Rotación de cuello.jpeg",
            descripcion: "Ejercicio de rotación de cuello para mejorar tu rendimiento físico.",
          }
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
