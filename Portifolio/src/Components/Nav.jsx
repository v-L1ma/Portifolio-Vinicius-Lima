import { useState } from "react"
import { IoMenu } from "react-icons/io5";

function Navbar(){

    const [abrirMenu, setAbrirMenu] = useState(false)

    return(
        <nav className="lg:px-20">

        <ul className="hidden lg:flex h-16 items-center justify-end gap-10 text-2xl text-stone-50 font-bold">
            <li className="hover:text-red-900"><a href="#sobre">Sobre</a></li>
            <li className="hover:text-red-900"><a href="#habilidades">Habilidades</a></li>
            <li className="hover:text-red-900"><a href="#projetos">Projetos</a></li>
            <li className="hover:text-red-900"><a href="#contato">Contato</a></li>
        </ul>

        
        <ul className="flex-col lg:hidden lg:h-16 items-center justify-end gap-10 text-2xl text-stone-50 font-bold ">
            <li className="flex justify-end text-5xl p-5 pr-3" onClick={()=> setAbrirMenu(!abrirMenu)}><IoMenu /></li>

            {
                abrirMenu && 
                <ul className="text-center bg-white bg-opacity-15 z-10 ab">
                <li className="hover:text-red-900 p-5"><a href="#sobre">Sobre</a></li>
                <li className="hover:text-red-900 p-5 "><a href="#habilidades">Habilidades</a></li>
                <li className="hover:text-red-900  p-5 "><a href="#projetos">Projetos</a></li>
                <li className="hover:text-red-900  p-5 "><a href="#contato">Contato</a></li>
                 </ul>
            }
            
            
        </ul>

        </nav>
        
    )
}
export default Navbar