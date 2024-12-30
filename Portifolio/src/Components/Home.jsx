import foto from "../assets/fotominha.jpg"

function Home(){
    return(
        <section className="flex h-screen">
        <div className="w-6/12 flex-col mt-auto mb-auto text-center items-start">
          <h1 className="text-red-900  font-bold text-7xl lg:text-9xl  
          ">
            <span className="text-stone-50">&lt;</span>
            Vinicius
            <br />
            Lima
            <span className="text-stone-50">/&gt;</span>
          </h1>
          <p className="text-4xl font-black mt-8">Desenvolvedor Front-End.</p>
        </div>
        
      </section>
    )
}

export default Home