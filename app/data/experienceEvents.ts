 
  interface Experience {
    id: string,   
    date: string;
    title: string;
    role: string;
    description: string;
    link: string;
  }
export const experienceEvents: Experience[] =[
    {
        id:'1',
        date: 'Año 2021 - Actual',
        title: 'Gestión de planificación de la Producción',
        role: 'Diseñador y constructor',
        description: 'Aplicación (privada) Diseñé e implementé un sistema de ventas y de gestión de la producción en empresa productora de insumos para la industria minera.',
        link: ''
      },
      {
        id:'2',
        date: 'Año 2022',
        title: 'Aplicación para hacer encuestas',
        role: 'Diseñador y constructor',
        description: 'Aplicación (privada) para evaluar la satisfacción de los clientes en empresa del área social.',
        link: ''
      },
      {
        id:'3',
        date: 'Año 2021',
        title: 'Aplicación para la administración los gastos de un condominio ',
        role: 'Diseñador y constructor',
        description: 'Aplicación (privada) para controlar los gastos de las casas que conforman un condominio separándolos en dos grupos, los gastos habituales y las emergencias.',
        link: ''
      },
      {
        id:'4',
        date: 'Año 2018 - 2020',
        title: 'Aplicación para la selección de proyectos sociales',
        role: 'Diseñador y constructor',
        description: `Aplicación (privada) en que se cubrió el proceso de postulación de proyectos. 
        El proceso contiene varias etapas, en las cuales los postulantes presentan sus proyectos y una comisión evaluadora selecciona los que pasaban a la siguiente etapa.
        `,
        link: ''
      },
      {
        id:'5',
        date: 'Año 2015 - 2017',
        title: 'Rediseño del sistema del Ministerio de Educación para pagar las subvenciones escolares',
        role: 'Jefe de proyecto y desarrollador SQL',
        description: `Este proyecto abordó la substitución del sistema existente para el pago de las subvenciones a sostenedores de la educación.
        Involucra el pago mensual de alrededor de US$ 700 millones, para 10.000 establecimientos educacionales. Dirigí un equipo de 50 profesionales.   
        `,
        link: ''
      }
]