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
    "Tamaño":"4 fotografías ovaladas tamaño credencial+1 fotografía tamaño pasaporte",
    "Damas":" Damas: Cara despéjada,aretes pequeños, blusa blanca formal,corbata",
    "Caballeros":"Caballeros: Cabello corto, sin barba ni bigote, camisa blanca, corbata negra lisa"
  },
  {
    "Titulo":"MATERIAS",
    "materias":[
      "1. Materias básicas (física,matemáticas, computación)",
      "2. Legislación aeronáutica",
      "3. Factores humanos",
      "4. Entorno aeronáutico",
      "5. Estructuras de aeronaves",
      "6. Aerodinámica",
      "7. Electricidad I y II",
      "8. Sistemas de aeronaves I y II",
      "9. Instrumentación de cabina I y II",
      "10. Inglés técnico I y II",
      "11. Electrónica I y II",
      "12. Tecnología de materiales",
      "13. Estructuras de aeronaves I y II",
      "14. Motores",
      "15. Sistemas de calidad",
      "16. Programas de mantenimiento",
      "17. Seguridad industrial",
      "18. Manejo de manuales",
      "19. Prácticas estándar"
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