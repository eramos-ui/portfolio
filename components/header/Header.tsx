
import { Navbar } from '@/components/navbar/Navbar';

export const  Header: React.FC = () => {
  return (
        <header className="flex flex-col items-center w-full max-w-[1128px] mx-auto ">
            <div className="flex-grow" >
                <Navbar className="mb-10" />           
            </div>
        </header>
  )
}


  