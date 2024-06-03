import EmailIcon from "../icons/Email";
import GitHubIcon from "../icons/GitHub";
import LinkedInIcon from "../icons/Linkedin";
import SocialPellet from "../icons/SocialPellet";

const SocialNet: React.FC = ( ) => {
    return (
    <>
        <SocialPellet
        href="https://linkedin.com/in/erich-ramos-arellano-baa3bb177" 
        icon={<LinkedInIcon className="size-4 md:size-6 mr-1" />} 
        name="LinkedIn" 
        className="mr-2"
        />
        <SocialPellet 
        href="https://github.com/tu-usuario-github" 
        icon={<GitHubIcon className="size-4 md:size-6 mr-1" />} 
        name="GitHub" 
        className="mr-2"
        />
         <SocialPellet 
         href="mailto:eramos@cibeles.cl" 
         icon={<EmailIcon className="size-4 md:size-6 mr-1" />} 
         name="eramosarellano@gmail.com"
         className="mr-2"
         />
    </>
    );
}
export default SocialNet;