import Link from 'next/link';

interface NavbarProps {
    className?:string;
}
export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
    return (
      <nav className={`flex space-x-4 ${className}`}>
        <Link href="/#experience" className="flex items-center space-x-2">
          <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Experiencia</span>
        </Link>
        <Link href="/#projects" className="flex items-center space-x-2">
          <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Proyectos</span>
        </Link>
        <a href="mailto:eramos@cibeles.cl" className="flex items-center space-x-2">
         <span className="text-black dark:text-white hover:text-gray-400 ml-1">Contacto</span>
        </a>
        <Link href="/#sobre-mi" className="flex items-center space-x-2">
          <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Sobre mí</span>
        </Link> 
      </nav>
    );
  };
