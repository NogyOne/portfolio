export const languages = {
    es: "Español",
    en: 'English',
  };
  
  export const defaultLang = 'es';
  
  export const ui = {
    es: {
        'home.welcome': 'Bienvenido, mi nombre es',
        'home.name': 'Germán Gómez',
        'home.major': 'Ingeniero de Software',
        'home.badge':'Disponible para trabajar',

        'footer.contact':'Contacto',
        //EXPERIENCE
        'experience.emcor' : {
            'position': 'Software Engineering Intern',
            'desc':'Implementé nuevas funciones en sistemas existentes utilizando C# (.Net y Blazor), HTML, CSS y Telerik, participé en revisiones de diseño, y colaboré eficazmente con el equipo manteniendo un fuerte sentido de responsabilidad individual.'
        },
        'experience.gob': {
            'position': 'Front end Developer',
            'desc':'Desarrollé y di mantenimiento a páginas web orientadas al usuario utilizando vanilla JavaScript, TailwindCSS y componentes web, creando diseños responsivos personalizados, colaborando con desarrolladores back-end para integrar elementos de la interfaz de usuario, y participando en reuniones diarias de scrum con el equipo de desarrollo.'
        },

        //PROJECTS
        'proyect.payops': {
            'name': 'PayOps',
            'desc': 'Sistema pequeño para la administración de subscripciones de tu negocio. Cuenta con envío de emails de confirmaciones de pago, cancelaciones y funciones para realizar avisos que le sean de interes a tus clientes.'
        },
        'proyect.ignea': {
            'name': 'Ignea Creativos',
            'desc': 'Landing Page para agencia de Marketing llamada Ignea Creativos. Cumple como propósito anunciar sobre sus servicios y planes.'
        },
        'proyect.howler': {
            'name': 'Howler',
            'desc': 'Clon de la red social X (antes twitter) con funcionalidades básicas de la misma. Proyecto escolar desarrollado con el fin de aprender nuevas tecnologías.'
        },

        //ABOUT ME
        'aboutme': {
            'introduction': 'Soy Germán Gómez, vivo en México y me encanta todo lo relacionado con el desarrollo web.',
            'iam': 'Soy ',
            'title': 'Ingeniero de Software ',
            'complement':'recién egresado, por lo cual actualmente me encuentro en busca de trabajo en alguna empresa tech.',
            'current_act': 'Actualmente me encuentro trabajando como ',
            'in':' en coolaboración con una agencia de Marketing de mi ciudad.' 
        },

        //TITLES
        'experience':'Experiencia',
        'projects':'Proyectos',
        'about_me':'Sobre mí',
    },
    en: {
        'home.welcome': 'Welcome, my name is',
        'home.major': 'Software Engineering',
        'home.badge':'Available to work',
        
        'footer.contact':'Contact',

        //EXPERIENCE
        'experience.emcor' : {
            'desc':'Implemented new features into existing systems using C# (.Net and Blazor), HTML, CSS, and Telerik, participated in design reviews, and collaborated effectively with the team while maintaining a strong sense of individual responsibility.'
        },
        'experience.gob': {
            'desc':'Developed and maintained user-facing websites using vanilla JavaScript, TailwindCSS, and web components, creating custom responsive layouts, collaborating with back-end developers to integrate UI elements, and participating in daily scrum meetings with the development team. development.'
        },

        //PROJECTS
        'proyect.payops': {
            'desc': 'Small system for managing subscriptions for your business. It has sending emails for payment confirmations, cancellations and functions to make notices that are of interest to your clients.'
        },
        'proyect.ignea': {
            'desc': 'Landing Page for Marketing agency called Ignea Creativos. Its purpose is to announce about its services and plans.'
        },
        'proyect.howler': {
            'desc': 'Clone of the social network X (formerly Twitter) with its basic functionalities. School project developed in order to learn new technologies.'
        },

         //ABOUT ME
         'aboutme': {
            'introduction': 'I am Germán Gómez, I live in México and I love everything related to web development',
            'iam': 'I am recently graduated',
            'title': 'Software Engineer',
            'complement':', so I am currently looking for a job in a tech company.',
            'current_act': 'I am currently working as a ',
            'in': 'in collaboration with a Marketing agency in my city.' 
        },

        //TITLES
        'experience':'Experience',
        'projects':'Projects',
        'about_me':'About me',
    },    
  } as const;