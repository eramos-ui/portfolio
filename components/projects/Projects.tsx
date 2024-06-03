import ProjectEvent from "./ProjectEvent";
import { CodeIcon } from "@primer/octicons-react";
import { projectEvents } from "@/app/data/projectEvents";

interface ProjectEvent {
    id:string,
    date: string;
    title: string;
    role: string;
    description: string;
    details: string;
    link: string;
  } 

  const Project: React.FC = ( ) => {
    return (
    <>
        <div className="text-2xl font-semibold mt-10 mb-6 gap-x-3 ml-0 text-dark-mode">
          <CodeIcon size={24} className="text-black dark:text-white mr-1 size-4 md:size-6" />
          <span>Proyectos destacados</span>
        </div>
        <ul className="relative mt-8 space-y-3 list-none" >
            {projectEvents.map((project) => (
                <ProjectEvent key={project.id} project={project} />
            ))}
        </ul>
    </>
    );
}
export default Project;