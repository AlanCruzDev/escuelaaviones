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
      "5. Aerodinámica",
      "6. Electricidad I",
      "7. Sistemas de aeronaves I",
      "8. Instrumentación de cabina I",
      "9. Inglés técnico I y I",
      "10. Motores para aeronaves",
      "11. Dibujo Técnico",
      "12. Materiales aeronáuticos",
      "13. Estructuras de aeronaves I y II",
      "14. Máquinas y herramientas",
      "15. Programas de mantenimiento",
      "16. Sistemas de calidad",
      "17. Seguridad industrial",
      "18. Control y prevención de la corrosión",
      "19. Manejo de manuales I y II",
      "20. Reparaciones estructurales",
      "21. Materiales compuestos",
      "22. Prácticas estándar I y II"
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