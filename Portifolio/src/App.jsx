import "./App.css";
import Contato from "./Components/Contato";
import Habilidades from "./Components/Habilidades";
import Home from "./Components/Home";
import Navbar from "./Components/Nav";
import Projetos from "./Components/Projetos";
import Sobre from "./Components/Sobre";

function App() {
  return (
    <main className="bg-gradient-to-r from-slate-900 to-slate-700 text-stone-50">
      <Navbar />
      <section className="m-auto w-11/12 h-screen text-center border-b-8 border-red-900">
        <Home />
      </section>

      <section
        id="sobre"
        className="m-auto w-11/12 h-screen text-center border-b-8 border-red-900"
      >
        <Sobre />
      </section>

      <section id="habilidades" className="m-auto w-11/12 h-screen text-center border-b-8 border-red-900">
       <Habilidades/>
      </section>

      <section id="projetos"  className="m-auto w-11/12 h-screen text-center border-b-8 border-red-900">
        <Projetos/>
      </section>

      <section className="m-auto w-11/12 h-screen text-center border-b-8 border-red-900">
        <Contato/>
      </section>
    </main>
  );
}

export default App;
