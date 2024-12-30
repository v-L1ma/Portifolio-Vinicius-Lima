function Navbar(){

    return(
        <nav className="px-20 scroll-smooth">
        <ul className="flex h-16 items-center justify-end gap-10 text-2xl text-stone-50 font-bold">
            <li className="hover:text-red-900"><a href="#sobre">Sobre</a></li>
            <li className="hover:text-red-900"><a href="#habilidades">Habilidades</a></li>
            <li className="hover:text-red-900"><a href="#projetos">Projetos</a></li>
            <li className="hover:text-red-900"><a href="#contato">Contato</a></li>
        </ul>
    </nav>
    )
}
export default Navbar