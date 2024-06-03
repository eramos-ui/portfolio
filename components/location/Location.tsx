import Image from 'next/image';

const Location: React.FC = () => {
  return (
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-red-500 dark:text-red-200 ">Vivo en Santiago, Chile</span>
        <Image
          src="/images/chile.png"
          alt="Bandera de Chile"
          width={24}
          height={16}
        />
      </div>
  );
};
export default Location;