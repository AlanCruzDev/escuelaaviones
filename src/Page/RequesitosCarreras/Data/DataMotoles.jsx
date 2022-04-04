import { FcAlarmClock,FcCalendar,FcCamera,FcGraduationCap } from "react-icons/fc";

export const datamotores=[
  {
    "Titulo":"DURACION",
    "Descripcion":"8 Meses (6 de teoria mas 2 de Practicas)",
    "Icono": <FcAlarmClock size={45}/>
  },{
    "Titulo":"HORARIOS",
    "Descripcion":"Lunes a Viernes 8:00 - 16:00 \n Fines de semana (Sabado mas Domingo) 8:00-16:00 hrs (10 meses total) \n Segun Existencia demanda",
    "Icono": <FcCalendar size={45}/>
  },{
    "Titulo":"FOTOGRAFIAS A COLOR DE FRENTE",
    "Icono": <FcCamera size={45}/>,
    "Damas":" Damas: Cara despéjada,aretes pequeños, blusa blanca formal,corbata",
    "Caballeros":"Caballeros: Cabello corto, sin barba ni bigote, camisa blanca, corbata negra lisa"
  },
  {
    "Titulo":"MATERIAS",
    "materias":[
      "1. Materias basicas (Fisica, Matematicas 1 y 2, Computacion 1 y 2)",
      "2. Legislación aeronáutica",
      "3. Factores humanos",
      "4. Entorno aeronáutico",
      "5. Estructuras de aeronaves",
      "6. Aerodinámica",
      "7. Electricidad I y II",
      "8. Electrónica",
      "9. Electrónica Digital y microprocesadores",
      "10. Sistemas electrónicos de la aeronave",
      "11. Sistemas de aeronaves I y II",
      "12. Instrumentación de cabina I y II",
      "13. Motores para Aeronaves",
      "14. Sistemas de calidad",
      "15. Programas de mantenimiento",
      "16. Seguridad industrial",
      "17. Manejo de manuales I y I",
      "18. Prácticas estándar I y II",
      "19. Inglés Técnico I y II"
    ],
    "Icono": <FcGraduationCap size={45}/>
  }
]
export const datacostosmotorores=[
  {
      
    "CostoTotal":"36,480.00",
    "ochopagos":"8 pagos de $ 4,560.00",
    "diezpagos":"10 pagos (fin de semana) de $ 3,648.00"

  }
]