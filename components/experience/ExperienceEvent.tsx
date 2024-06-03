
interface ExperienceEventProps {
  event: {
    id:string;
    date: string;
    title: string;
    role: string;
    description: string;
    link: string; 
  };
}

const ExperienceEvent: React.FC<ExperienceEventProps> = ({ event }) => {

  return (
    <>
    <li className="flex flex-col md:flex-row items-start md:items-center p-4 rounded-lg">
      <div 
        className="absolute left-2.5 flex items-center justify-center w-6 h-5
        bg-white dark:bg-black rounded-full -translate-x-1/2"
      >
        <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
      </div>
      <div>
        <span className="mb-2 text-sm font-normal leading-none text-date">{event.date}</span>
        <div className="ml-2">
          <div className="font-bold text-lg text-amarillo mt-2">{event.title}</div>
          <div className="font-semibold text-lg text-title mt-2">Mi rol: {event.role}</div>
          <div className="mb-4 text-description">{event.description}</div>            
        </div>
      </div>
    </li>
    </>
  );
};
export default ExperienceEvent;