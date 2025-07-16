import { Container } from "../../components/container";
import carro from "../../assets/bmw.jpg"

export function Home() {


  return (
    <Container>
      <div className="flex flex-col">
        <div className="bg-white shadow h-20 flex items-center p-5 rounded mt-6">
              <input className="border-1 border-gray-200 rounded h-10 p-1 w-full"
              placeholder="Procure..."
              />
              <button className="h-10 ml-2 cursor-pointer bg-blue-400 p-2 text-white rounded">Procurar</button>    
        </div>
      </div>

      <div className="w-full max-w-7xl flex items-center justify-center py-4 font-bold text-xl">
          <h1>Melhores carros novos e usados do Brasil!</h1>
      </div>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        <section className="w-full flex flex-col bg-white p-2 shadow mr-4">
          <img src={carro} alt="BMW" className="hover:scale-102 transition duration-1000 rounded"></img>
          <h1 className="py-2">ADADADAFASFWASDWASDWA</h1>
          <span className="mb-6 text-zinc-600">2008/2009 | 200.000 km</span>

          <strong className="py-2">R$ 2.000.000</strong>
          
          <div className="w-full h-[1px] bg-gray-200"></div>

          <h2 className="py-2">Goiânia - GO</h2>
        </section>

        <section className="w-full flex flex-col bg-white p-2 shadow mr-4">
          <img src={carro} alt="BMW" className="hover:scale-102 transition duration-1000 rounded"></img>
          <h1 className="py-2">ADADADAFASFWASDWASDWA</h1>
          <span className="mb-6 text-zinc-600">2008/2009 | 200.000 km</span>

          <strong className="py-2">R$ 2.000.000</strong>
          
          <div className="w-full h-[1px] bg-gray-200"></div>

          <h2 className="py-2">Goiânia - GO</h2>
        </section>

        <section className="w-full flex flex-col bg-white p-2 shadow mr-4">
          <img src={carro} alt="BMW" className="hover:scale-102 transition duration-1000 rounded"></img>
          <h1 className="py-2">ADADADAFASFWASDWASDWA</h1>
          <span className="mb-6 text-zinc-600">2008/2009 | 200.000 km</span>

          <strong className="py-2">R$ 2.000.000</strong>
          
          <div className="w-full h-[1px] bg-gray-200"></div>

          <h2 className="py-2">Goiânia - GO</h2>
        </section>

        <section className="w-full flex flex-col bg-white p-2 shadow mr-4">
          <img src={carro} alt="BMW" className="hover:scale-102 transition duration-1000 rounded"></img>
          <h1 className="py-2">ADADADAFASFWASDWASDWA</h1>
          <span className="mb-6 text-zinc-600">2008/2009 | 200.000 km</span>

          <strong className="py-2">R$ 2.000.000</strong>
          
          <div className="w-full h-[1px] bg-gray-200"></div>

          <h2 className="py-2">Goiânia - GO</h2>
        </section>

        <section className="w-full flex flex-col bg-white p-2 shadow mr-4">
          <img src={carro} alt="BMW" className="hover:scale-102 transition duration-1000 rounded"></img>
          <h1 className="py-2">ADADADAFASFWASDWASDWA</h1>
          <span className="mb-6 text-zinc-600">2008/2009 | 200.000 km</span>

          <strong className="py-2">R$ 2.000.000</strong>
          
          <div className="w-full h-[1px] bg-gray-200"></div>

          <h2 className="py-2">Goiânia - GO</h2>
        </section>

        <section className="w-full flex flex-col bg-white p-2 shadow mr-4">
          <img src={carro} alt="BMW" className="hover:scale-102 transition duration-1000 rounded"></img>
          <h1 className="py-2">ADADADAFASFWASDWASDWA</h1>
          <span className="mb-6 text-zinc-600">2008/2009 | 200.000 km</span>

          <strong className="py-2">R$ 2.000.000</strong>
          
          <div className="w-full h-[1px] bg-gray-200"></div>

          <h2 className="py-2">Goiânia - GO</h2>
        </section>

        
      </main>
        
    </Container>
  )
}

