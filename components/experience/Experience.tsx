import ExperienceEvent from "./ExperienceEvent";
import { BriefcaseIcon } from "@primer/octicons-react";
import { experienceEvents } from "@/app/data/experienceEvents";

interface ExperienceEvent {
    id:string,
    date: string;
    title: string;
    role: string;
    description: string;
    link: string;
  } 

  const Experience: React.FC = ( ) => {
    return (
    <>
        <div className="text-2xl font-semibold mb-6 gap-x-3 ml-0 text-dark-mode">
            <BriefcaseIcon size={24} className="text-black dark:text-white mr-1 size-4 md:size-6" />
            <span>Experiencia laboral</span>
        </div>
        <ul className="relative mt-8 space-y-3 list-none" >
            {experienceEvents.map((event) => (
                <>
                {Number(event.id) < experienceEvents.length - 1 && (
                    <div className="absolute left-2.5 top-4 w-px h-[99%] bg-black dark:bg-gray-200 -translate-x-1/2"></div>
                )}
                <ExperienceEvent key={event.id} event={event} />
                </>
            ))}
        </ul>
    </>
    );
}
export default Experience;