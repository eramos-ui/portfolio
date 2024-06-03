interface SocialPelletProps {
  href: string;
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const SocialPellet: React.FC<SocialPelletProps> = ({ href, icon, name, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center 
         border border-gray-300 dark:border-white/10
         text-xs lg:text-base
         text-black dark:text-white            
         rounded-full 
         bg-gray-200 dark:bg-gray-800
         gap-x-1
         py-2 px-4 lg:py-2 lg:px-4
         transition 
         hover:scale-90 hover:bg-gray-300 dark:hover:bg-gray-700
         ${className}`
      }
  >
      <span className="flex items-center justify-center w-4 h-4 mr-1">{icon}</span>
      <span className="text-black dark:text-white">{name}</span>
  </a>
);
export default SocialPellet;