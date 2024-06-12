import Tags from './tags';

interface Tag {
    name: string;
    className: string;
    icon: React.ReactNode;
  }
  
 interface Project {
    id:string;
    title: string;
    role: string;
    description: string;
    link: string;
    github: string;
    image: string;
    details: string;
    tags: Tag[];
 }
export const projectEvents:Project[] =[
    {
        id:'1',
        title: 'Gestión de Ventas y de planificación de la Producción',
        role: 'Diseñador y constructor',
        description: `Implementé un sistema para programar las máquinas que se emplean en el proceso productivo. Abarcó cerca de 20 máquinas en un diseño tipo calendario para evitar sobreocupación de estas.
        Fue necesario incluir el proceso de ventas-cotización.`,
        link: '',
        github:'',
        image:'/images/workflow.png',
        details: `En este proyecto, desarrollé una aplicación web para la gestión de tareas. 
        Incorporé funcionalidades claves como la autenticación de usuarios, la creación y asignación de tareas mediante una herramienta de workflow, y la integración con API RESTful. 

        El Workflow empleado también fue construido por mí, incluida una interfaz gráfica de diseño, ello facilitó el poder ajustar el mapa del proceso según los requerimientos del cliente.

        La solución incluyó módulos de cotización-ventas y programación de la producción.

        Para cotizar diseñé el modelamiento de la producción que es una solución genérica que resuelve cualquier proceso productivo. Considera el conjunto de etapas
         con las que se fabrica una pieza y los costos asociados a cada una definidos como: materiales, maquinaria y mano de obra.

        Investigué y seleccioné una biblioteca que proporcionara a la hoja de programación de máquinas una apariencia similar al calendario de Gmail, permitiendo a los usuarios agendar tareas de manera intuitiva. Colaboré en el diseño con un equipo para asegurar una experiencia de usuario óptima. 
        `,

        tags:[Tags.NEXT,Tags.REACT,Tags.MSSQL,Tags.TYPESCRIPT,Tags.MATERIALUI,Tags.AZURE],
    },
    {
        id:'2',
        title: 'Aplicación para la selección de proyectos sociales',
        role: 'Diseñador y constructor',
        description: `Este sistema es para seleccionar proyectos que presentan organizaciones del ámbito social.
        Se presentan más de 100 postulantes en un proceso de varias etapas que permiten a los evaluadores asignar puntaje para ir filtrando los proyectos elegidos.`,
        link: '',
        github:'',
        image:'',
        details:`Diseñé y construí este sistema para seleccionar proyectos sociales que presentan organizaciones sin fines de lucro a una fundación especializada en financiamiento de obras sociales.
        
        Se presentan más de 100 organizaciones con sus proyectos, y se considera un proceso de varias etapas que permiten a los evaluadores asignar puntaje para ir filtrando los proyectos que finalmente son elegidos. 
        El sistema incluía calendarios para agendar entrevistas y presentaciones de los postulantes.

        Trabajamos en el levantamiento de requerimientos en múltiples sesiones con los usuarios expertos.
         `,
        tags:[Tags.CSHARP,Tags.BOOSTRAP,Tags.MSSQL],
    },
    {
      id:'3',
      title: 'Aplicación para la administración de gastos de un condominio',
      role: 'Diseñador y constructor',
      description: `Diseñé e implementé un sistema para la administración de los ingresos y gastos de un condominio de casas. 
      Consideré dos tipos de gastos e ingresos: habituales y extraordinarios. 
      El software entrega la información de la situación de cada casa.`,
      link: '',
      github:'',
      image:'',
      details:`Este fue mi primer proyecto utilizando JS con React y Node. La aplicación web permite registrar las casas de un condominio y la familia que habita en cada una de ellas. 
      
      Al inicio del año, se ingresan, vía Excel, los ingresos o cuotas mensuales que cada casa deberá pagar. Los fondos se dividen en dos categorías: extraordinarios y normales. 
      Los gastos normales se cubren con los ingresos normales, y estos están tabulados. En el caso de los gastos extraordinarios, se cubren con los ingresos extraordinarios y, dado que no están tabulados, se registra una glosa descriptiva. 
      
      La aplicación permite realizar consultas de ambos tipos de gastos e ingresos, las cuales pueden ser exportadas a Excel para su análisis.
      `,
      tags:[Tags.REACT,Tags.NODE,Tags.MSSQL],
    },
    {
        id:'4',
        title: 'Rediseño del sistema del Ministerio de Educación para pagar las subvenciones escolares del sector público de Chile',
        role: 'Jefe de proyecto y desarrollador SQL',
        description: `Este proyecto abordó la sustitución del sistema existente para el pago de las subvenciones a sostenedores de la educación pública de Chile.
        Involucra el pago mensual de alrededor de US$ 700 millones, para cerca de 10.000 establecimientos educacionales. 
        Dirigí un equipo formado por cerca de 50 profesionales.
        `,
        link: '',
        github:'',
        image:'',
        details:`Inicialmente, en este proyecto fui Jefe de Proyecto. Mi primera tarea fue evaluar las razones del fracaso de un intento previo que había costado US$ 5 millones.
        
        Para entender y resolver el problema se requirió levantar los requerimientos y luego prototipar en Excel para afinar los complejos algoritmos de cálculo. Los primeros valores se derivaban de la asistencia de cada alumno, y otros se calculaban a partir de estos.

        Al encargarme del levantamiento de los requerimientos y entender el problema en profundidad, asumí el rol de Product Owner. 
        
        Después de modelar en Excel, consideré prudente trasladar el modelo a SQL debido a su capacidad para manejar millones de celdas generadas por el cruce curso-colegio (más de 80.000) y los ítems de subvenciones (más de 500).
        
        La parametrización de las fórmulas de cálculo de las subvenciones redujo el tiempo de procesamiento de algo más de un día a menos de una hora. 
        Es importante mencionar que la asistencia de cada alumno se registra en otro sistema, alimentado diariamente por los sostenedores de colegios.
        
        La parametrización permitió al Ministerio de Educación gestionar eficazmente durante la pandemia, ya que, sin asistencia a los colegios, se tuvieron que estudiar diversos mecanismos paliativos que el nuevo modelo soportó.
        
        Para la orquestación del proceso de cálculo, se utilizó Pentaho, y para mostrar el detalle del cálculo a cada sostenedor, se desarrolló una aplicación web en Java.
        `,
        tags:[Tags.MSSQL],
    },
    {
      id:'5',
      title: 'ERP para Municipalidades',
      role: 'Diseñador y constructor',
      description: `Diseñé e implementé un conjunto de sistemas para una Municipalidad. 
      Estos sistemas incluían: Activo fijo, Bodega, Remuneraciones (Diferentes legislaciones: Educación, Salud y Municipal)
      Bienestar, Licencias médicas, Bodega, Asistencia Social, Información Laboral (OMIL), Obras Municipales,
      Contabilidad Gubernamental, Patentes comerciales, Adquisiciones, Permisos de circulación, Licencias de conducir.`,
      link: '',
      github:'',
      image:'',
      details:`Trabajé para una empresa que daba servicios informáticos a municipalidades.
      El proyecto consistía en reemplazar sistemas hechos en plataforma cliente-servidor 
      que también yo había diseñado y construido, llevándolos a plataforma web consumiendo web-services.

      Utilicé una herramienta de workflow que permitía diseñar y luego ejecutar
      flujos de trabajo cuyas actividades tenían asociado un formulario para su ejecución. 
      Esto fue especialmente útil en la ejecución de procesos en que los participantes eran 
      de diversas unidades como es el caso de Adquisiciones, OMIL y Atención social.      
      `,
      tags:[Tags.CSHARP,Tags.MSSQL],
    },
    {
      id:'6',
      title: 'Sistema contable',
      role: 'Diseñador ',
      description: `Diseñé y dirigí la construcción de un sistema de contabilidad para un conjunto de más
      de 40 empresas de una holding del sector naviero. 
      `,
      link: '',
      github:'',
      image:'',
      details:`El objetivo del proyecto era reemplazar un sistema existente que no consideraba la centuria en las fechas. 
      
      Fui contratado inicialmente para evaluar el fracaso de una empresa extranjera que intentó instalar su ERP. Luego, me solicitaron acompañar a los usuarios en la selección de un ERP del mercado. 
      Cuando los usuarios declararon su inconformidad con los sistemas revisados se me pidió diseñar una solución que satisficiera a todos.

      Mi trabajo consistió entonces, en diseñar una solución en que en los parámetros de 
      configuración considerara todas las empresas del holding.

      Teníamos como plazo perentorio acotado por el cambio de milenio. Armé un equipo de 
      unas 50 personas que incluía usuarios claves de todas las empresas y una decena de técnicos TI.

      El proyecto fue exitoso al punto que la holding creó una nueva empresa para comercializar el sistema. 
      `,
      tags:[Tags.MSSQL],
    }
]