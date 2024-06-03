 'use client';
 import { useState } from 'react';
 import Image from 'next/image';
 
 interface Tag {
    name: string;
    className: string;
    icon: React.ReactNode;
  }
 interface ProjectEventProps {
    project:{
        title: string;
        role: string;
        description: string;
        link: string;
        github: string;
        image: string;
        details: string;
        tags: Tag[];
    };
  }
  const ProjectEvent: React.FC<ProjectEventProps> = ({ project }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
  
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
    return (
      <>
      <li className="flex flex-col md:flex-row items-start md:items-center p-4 rounded-lg">
        <div>
          <div className="ml-2">
            <div className="font-bold text-lg text-amarillo mt-2">{project.title}</div>
            <div className="font-semibold text-lg text-title mt-2">Mi rol: {project.role}</div>
            <div className="mb-4 text-description">{project.description}</div> 
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`flex items-center px-2 py-1 text-sm font-semibold ${tag.className}`}>
                        <span className="w-4 h-4 mr-3">{tag.icon}</span>
                        <span>{tag.name}</span>
                    </span>
                ))}
            </div>
            { project.image.length>0 && (
              <div className="relative w-full mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={1903} 
                height={920} 
                className="object-contain"
              />
              </div>
            )}  
                     
              { project.details.length>0 && showDetails && <div className="mb-4 text-gray-900 text-pretty whitespace-pre-line italic">{project.details}</div>}
              { project.details.length>0  &&
                <button
                  onClick={toggleDetails}
                  className="inline-block mt-2 px-2 py-1 italic
                  bg-black dark:bg-white text-white dark:text-black 
                  rounded-full border border-transparent
                  hover:bg-gray-800 dark:hover:bg-gray-300 hover:scale-90"                
                 >
                  {showDetails ? 'Leer menos' : 'Leer más...'}
                 </button>
              }
          </div>
        </div>
      </li>
      </>
    );
  };
  export default ProjectEvent;