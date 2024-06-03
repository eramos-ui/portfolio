import Image from "next/image";
import { Header } from "@/components/header/Header";
import Location from "@/components/location/Location";
import Projects from "@/components/projects/Projects";
import { Footer } from '@/components/footer/Footer';
import AboutMe from "@/components/aboutMe/AboutMe";
import SocialNet from "@/components/socialNet/SocialNet";
import Experience from "@/components/experience/Experience";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-44 pb-20 px-4">
        <Header />
        <section className="w-full m-auto lg:w-[740px]">
          <div className="flex justify-between items-center w-full mt-10">
          <Image
                  className='rounded-full size-auto'
                  priority={true}
                  src="/images/zeus.png"
                  alt="Mi foto"
                  width={70}
                  height={40}
          />
          </div>
          <div className="text-2xl md:text-2xl lg:text-3xl font-bold flex flex-row
               gap-x-4 pb-10 text-dark-mode "
          >
            Hola, me llamo Erich Ramos
            <a
              href="https://www.linkedin.com/in/erich-ramos-arellano-baa3bb177 " 
              target="_blank"            
              rel="noopener noreferrer"
              className="ml-1 center relative inline-block select-none 
                   whitespace-nowrap rounded-lg py-2.5 px-3.5 h-8
                   bg-green-800 
                   hover:bg-green-800/65  hover:scale-90                      
                   align-baseline font-sans text-xs font-bold 
                   transition leading-none text-white"
            > Disponible para trabajar
            </a>
          </div>        
          <div className="mt-4 text-xl lg:text-2xl opacity-80 text-wrap max-w-[700px]">
            <span>Con más de tres décadas de experiencia en tecnología en diversas industrias, he reorientado mi carrera hacia la programación. Durante los últimos tres años, he dedicado mi tiempo y esfuerzo a este campo, desarrollando un portafolio que integra mi vasta experiencia con una visión innovadora. Mi objetivo es diseñar y construir soluciones únicas y eficaces que satisfagan las necesidades de mis clientes.
            </span>
          </div>
          <div className="mt-2">  <Location />   </div>
          <div className="mt-4 space-y-4 space-x-2">
              <SocialNet />
              <section id='experience'> <Experience  />  </section>
              <section id='projects'> <Projects />  </section>
              <section id='sobre-mi'>   <AboutMe     />  </section>
              <section>  <Footer />  </section>              
          </div>      
        </section>
    </main>
  );
}