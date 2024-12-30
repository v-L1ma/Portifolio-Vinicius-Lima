import foto from "../assets/fotominha.jpg"

function Home(){
    return(
        <section className="h-screen flex ">
        <div className="w-6/12 flex-col mt-auto mb-auto text-center items-start">
          <h1 className="text-red-900 text-9xl font-bold">
            <span className="text-stone-50">&lt;</span>
            Vinicius
            <br />
            Lima
            <span className="text-stone-50">/&gt;</span>
          </h1>
          <p className="text-4xl font-black mt-8">Desenvolvedor Front-End.</p>
        </div>
        <div className="flex items-center justify-center">
          <img src={foto} alt="" className="w-96 rounded-3xl ml-60 border-8 border-red-900" />
        </div>
      </section>
    )
}

export default Home