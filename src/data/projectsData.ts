export interface Project {
  id: number;
  title: string;
  description: string;
  longDesc?: string;
  image?: string;
  tags: string[];
  features?: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión para Autolavado",
    description:
      "Solución full-stack para administración completa de autolavado con gestión de órdenes, usuarios, informes y control de inventario.",
    longDesc:
      "Este proyecto incluye módulos completos para gestión de clientes y administradores, control de inventario y generación de informes financieros. Su arquitectura híbrida sincroniza bases de datos locales (MySQL) con la nube (AWS Aurora). Actualmente el despliegue en AWS es temporal para uso académico y puede dejar de estar disponible; el panel de administrador requiere credenciales para acceder.",
    image: "/img/autolavado.png", // reemplazar con la ruta correcta si la tienes
    tags: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MySQL"],
    features: [
      "Arquitectura contenerizada con Docker.",
      "Panel interactivo para administración.",
      "Sincronización bidireccional MySQL local + AWS Aurora.",
      "Generación automatizada de informes financieros.",
      "Despliegue en EC2 con CI/CD mediante GitHub.",
      "Seguridad con certificados TLS y políticas IAM.",
      "Proxy inverso Nginx para optimización.",
    ],
    link: "https://proyecto-integrador-603-1.onrender.com/", // reemplazar con URL de despliegue o repositorio
  },

  {
    id: 2,
    title: "Consultorio Multidisciplinario",
    description:
      "Sistema full-stack para la gestión de un consultorio con múltiples especialidades médicas, con agenda de citas y panel administrativo.",
    longDesc:
      "La plataforma permite que los clientes agenden citas con profesionales de distintas especialidades. Los profesionales pueden gestionar su agenda, servicios, reseñas y atender a clientes registrados u ocasionales. También incluye un panel para administradores con control completo del sistema. El despliegue está en Render como proyecto académico; para acceder al panel administrativo o probar distintos perfiles, se deben solicitar credenciales.",
    image: "/img/consultorio.png", // reemplazar con la ruta real si la tienes
    tags: ["React", "Node.js", "Docker", "MySQL", "PostgreSQL", "Prisma"],
    features: [
      "Sistema de autenticación con roles: cliente, profesional y administrador.",
      "Reserva de citas para clientes registrados y ocasionales.",
      "Gestión de agenda para profesionales con soporte de reseñas y alertas.",
      "Notificaciones contextuales reutilizables para todos los roles.",
      "Base de datos híbrida: MySQL local (desarrollo) y PostgreSQL en la nube (producción).",
    ],
    link: "https://app-consultorios-1.onrender.com/home", // reemplazar con URL de despliegue o repositorio
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    description:
      "Análisis y seguimiento de criptomonedas con gráficos en tiempo real y modo oscuro/claro.",
    longDesc:
      "Este proyecto fue desarrollado con React y permite a los usuarios visualizar información en tiempo real de las criptomonedas más populares. La interfaz incluye animaciones con GSAP, gráficos interactivos con Recharts y una experiencia inmersiva gracias a transiciones suaves y efectos visuales.",
    image: "/img/crypto-dashboard.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "GSAP", "Recharts"],
    features: [
      "Interfaz inmersiva con animaciones GSAP.",
      "Modo oscuro y claro configurable.",
      "Datos en tiempo real de criptomonedas usando una API externa.",
      "Gráfico interactivo con Recharts para visualizar variación porcentual de Bitcoin.",
      "Transiciones suaves y efectos visuales.",
    ],
    link: "https://crypto-dashboard-puce.vercel.app/",
  },
  {
    id: 4,
    title: "Sitio Web LexiWeb",
    description:
      "LexiWeb es un sitio web diseñado para facilitar el acceso y comprensión de la legislación.",
    longDesc:
      "Desarrollado con tecnologías modernas como HTML, CSS y JavaScript, LexiWeb permite a los usuarios buscar, visualizar y analizar normativas de manera práctica y eficiente.",
    image: "/img/sitio-wb.png",
    tags: ["HTML", "CSS", "JavaScript", "IA"],
    features: [
      "Búsqueda y análisis de normativas legales.",
      "Interfaz limpia y fácil de usar.",
      "Optimizado para una navegación práctica.",
    ],
    link: "https://alanq549.github.io/mejora-de-trabajo/",
  },
];
