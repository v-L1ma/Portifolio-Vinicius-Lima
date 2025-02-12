import { IoCodeSlash } from "react-icons/io5";
import todo from '../assets/todo.jpg'
import adotaai from '../assets/adotaai.jpg'

function Projetos() {
  return (
    <>
      <h1 className="font-bold text-5xl mt-9 text-red-900">Meus projetos</h1>

      <div className="flex flex-wrap justify-center">

            <div className="pb-5 w-80 lg:h-96 bg-white bg-opacity-5 rounded-lg flex-col m-16 border">
            <div className="lg:h-4/6">
              <img src={adotaai} alt="" />
            </div>

            <h2 className="pt-4 lg:pt-0 text-3xl text-red-900 font-bold">AdotaAi.pet</h2>
            <div className="flex justify-center lg:ml-10 mt-5 gap-3">
              <a
                href="https://github.com/v-L1ma/AdotaAi.pet"
                target="_blank"
              >
                <p className="w-28 border rounded-xl p-2 bg-red-900 font-black">VEJA</p>
              </a>
              <a
                href="https://adotaai-pet.netlify.app/"
                target="_blank"
              >
                <p className="flex border text-red-900 w-28 p-2 bg-white font-black text-2xl justify-center rounded-xl">
                    <IoCodeSlash />
                </p>
              </a>
            </div>
          </div>

          <div className="pb-5 w-80 lg:h-96 bg-white bg-opacity-5 rounded-lg flex-col m-16 border">
            <div className="lg:h-4/6">
              <img src={todo} alt="" />
            </div>

            <h2 className="pt-4 lg:pt-0 text-3xl text-red-900 font-bold">Lista de tarefas</h2>
            <div className="flex justify-center lg:ml-10 mt-5 gap-3">
              <a
                href="https://v-l1ma.github.io/To-do-list/"
                target="_blank"
              >
                <p className="w-28 border rounded-xl p-2 bg-red-900 font-black">VEJA</p>
              </a>
              <a
                href="https://github.com/v-L1ma/To-do-list"
                target="_blank"
              >
                <p className="flex border text-red-900 w-28 p-2 bg-white font-black text-2xl justify-center rounded-xl">
                    <IoCodeSlash />
                </p>
              </a>
            </div>
          </div>

      </div>
    </>
  );
}

export default Projetos;
