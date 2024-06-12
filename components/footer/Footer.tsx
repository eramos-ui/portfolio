import GitHubIcon from "../icons/GitHub";

export const Footer = () => {
  return (
    <> 
      <footer className="opacity-90 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
         <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"
         >
           <div className="flex items-center text-sm text-black dark:text-white">
            <span>® 2024</span>
            <a href="https://github.com/eramos-ui/portfolio.git" className="ml-2 flex items-center hover:underline">
              <GitHubIcon className="w-5 h-5 mr-1" />
              Este portafolio
            </a>
           </div>
           <ul 
            className="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0"
           >
              <li>
                <a href='/#' 
                  className="text-black dark:text-white 
                  hover:underline
                  mr-6"
                >Inicio
                </a>
              </li>
              <li>
                <a href='/#experience' 
                  className="text-black dark:text-white 
                  hover:underline
                  mr-6"
                >Experiencia
                </a>
              </li>
              <li>
                <a href='/#projects' 
                  className="text-black dark:text-white 
                  hover:underline
                  mr-6"
                >Proyectos
                </a>
              </li>

              <li>
                <a id="/#contacto" href="mailto:eramosarellano@gmail.com" 
                  className="text-black dark:text-white 
                  hover:underline"
                  >Contacto
                </a>
              </li>   
           </ul>
         </div>
      </footer>
    </>
  )
}