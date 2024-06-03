import PdfIcon from "../icons/Pdf";
import ProfileIcon from "../icons/Profile";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="flex flox-row text-2xl font-semibold mb-6 gap-x-3 ml-0 text-dark-mode mt-0">
        <ProfileIcon className=" text-black dark:text-white mr-0 size-4 md:size-6" />
      <span>Sobre mí</span>
      </div>
      <section className="ml-2 flex gap-x-4 justify-center">
        <div className="[&>p]:mb-4  text-pretty">
          <p >La primera vez que programé fue en la universidad y lo hice sobre un framework IBM/360.</p>
          <p >Al salir de la Universidad continué en un Apple II construyendo sistemas que servían a diferentes empresas.</p>
          <p >He hecho esto hasta el día de hoy, aunque mi rol ha ido cambiando, además de
            <strong className="text-amarillo italic" > programador </strong>
          he sido: 
          <strong className="text-amarillo italic"> analista de sistemas</strong>,
          <strong className="text-amarillo italic"> levantador de requerimiento</strong>,
          <strong className="text-amarillo italic"> jefe de proyecto con metodología ágil</strong>,
          <strong className="text-amarillo italic"> product owner</strong>,
          <strong className="text-amarillo italic"> desarrollador full stack</strong>.
          </p>
          <p >Entre mis logros más destacados, dirigí el reemplazo del sistema legado de pago de subvenciones escolares en el Ministerio de Educación.
          Fui jefe de proyecto y desarrollador SQL a cargo de unas 50 personas. El pago mensual de estas subvenciones es 
          alrededor de 700 millones de dólares.</p>
          <a
            href="/cvErichRamos.pdf" 
            download
            className="inline-flex items-center mt-4 px-5 py-2  italic        
              bg-black dark:bg-white text-white dark:text-black 
              rounded-full border border-transparent
              hover:bg-gray-800 dark:hover:bg-gray-300
              transform hover:scale-90 transition-transform duration-300"
          >
            <PdfIcon className="w-5 h-5 mr-2 fill-current text-white dark:text-black" />
            Descargar mí CV
          </a>
        </div>
      </section>
    </>
  );
};
export default AboutMe;