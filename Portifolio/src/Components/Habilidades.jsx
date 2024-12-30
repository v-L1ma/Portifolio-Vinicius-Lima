import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

function Habilidades() {
  return (
    <>
      <h1 className="text-5xl mt-9 text-red-900 font-bold">Minhas habilidades</h1>

      <div className="flex gap-10 justify-center h-full items-center flex-wrap">
        
        <div className="flex-col w-56 pb-9 border-4 border-red-900 rounded-lg hover:scale-105">
            <p className="text-9xl text-center flex justify-center mt-12">
                <FaReact />
            </p>
          <div>
            <h1 className="text-red-900 mt-10 text-3xl font-black">React</h1>
          </div>
        </div>

        <div className="flex-col w-56 pb-9 border-4 border-red-900 rounded-lg hover:scale-105">
          <p className="text-9xl text-center flex justify-center mt-12"><IoLogoJavascript /></p>
          <div>
            <h1 className="text-red-900 mt-10 text-3xl font-black">JavaScript</h1>
          </div>
        </div>

        <div className="flex-col w-56 pb-9 border-4 border-red-900 rounded-lg hover:scale-105">
          <p className="text-9xl text-center flex justify-center mt-12"><RiTailwindCssFill /></p>
          <div>
            <h1 className="text-red-900 mt-10 text-3xl font-black">TailWind</h1>
          </div>
        </div>   

        <div className="flex-col w-56 pb-9 border-4 border-red-900 rounded-lg hover:scale-105">
          <p className="text-9xl text-center flex justify-center mt-12"><FaHtml5/></p>
          <div>
            <h1 className="mt-10 text-3xl font-black text-red-900">HTML</h1>
          </div>
        </div>   

        <div className="flex-col w-56 pb-9 border-4 border-red-900 rounded-lg
        hover:scale-105">
          <p className="text-9xl text-center flex justify-center mt-12"><FaCss3Alt /></p>
          <div>
            <h1 className="text-red-900 mt-10 text-3xl font-black">CSS</h1>
          </div>
        </div>   
      </div>
    </>
  );
}

export default Habilidades;
