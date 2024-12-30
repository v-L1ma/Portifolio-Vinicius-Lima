import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

function Contato() {
  return (
    <>
      <h1 className="text-5xl mt-9 text-red-900 font-bold">Não hesite em me contatar!</h1>

      <div className="mt-40 flex flex-wrap gap-5 justify-center">

        <a href="https://www.linkedin.com/in/viniciuslimasantos1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
          <div className="rounded-xl bg-white bg-opacity-10 p-7">
          <p className="flex text-9xl justify-center"><FaLinkedin /></p>
            <p className="mt-2 font-bold text-3xl">LinkedIn</p>
          </div>
        </a>

        <a href="https://github.com/v-L1ma" target="_blank">
          <div className="rounded-xl bg-white bg-opacity-10 p-7">
          <p className="flex text-9xl justify-center"><FaGithub /></p>
            <p className="mt-2 font-bold text-3xl">GitHub</p>
          </div>
        </a>

        <a href="https://wa.me/5513981934062" target="_blank">
          <div className="rounded-xl bg-white bg-opacity-10 p-7">
          <p className="flex text-9xl justify-center"><FaWhatsapp /></p>
            <p className="mt-2 font-bold text-3xl">WhatsApp</p>
          </div>
        </a>

      </div>
    </>
  );
}

export default Contato;
