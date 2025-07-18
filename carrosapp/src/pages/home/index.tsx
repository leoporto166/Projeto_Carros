import { Container } from "../../components/container";
import carro from "../../assets/bmw.jpg"
import { useEffect, useState } from "react";

import { query, orderBy, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseconnection";
import { Link } from "react-router-dom";

interface CarsProps{
  id: string;
  uid: string;
  name: string;
  modelo: string; 
  ano: string; 
  km: string;
  preco: string | number;
  cidade: string;
  wpp: string;
  description: string;
}


export function Home() {
  const [cars, setCars] = useState<CarsProps[]>([])

  useEffect(() => {

    

    const carsRef = collection(db, "Posts")
    const queryRef = query(carsRef, orderBy("created", "desc"))

    getDocs(queryRef)
    .then((snapshot) => {
      let listcars = [] as CarsProps[]

      snapshot.forEach((doc) => {
        listcars.push({
          id: doc.id,
          name: doc.data().name,
          modelo: doc.data().modelo,
          ano: doc.data().ano,
          km: doc.data().km,
          preco: doc.data().preco,
          cidade: doc.data().cidade,
          wpp: doc.data().wpp,
          description: doc.data().description,
          uid: doc.data().uid,
        })
      })

      setCars(listcars)
    })

    console.log(setCars)

  }, [])


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

        {cars.map((car) => (
        <Link to={`/details/${car.id}`} key={car.id}>
          <section className="w-full flex flex-col bg-white p-2 shadow mr-4" >
            <img src={carro} alt="BMW" className="hover:scale-102 transition duration-1000 rounded"></img>
            <h1 className="py-2">{car.name}</h1>
            <span className="mb-6 text-zinc-600">{car.ano} | {car.km} km</span>
            <strong className="py-2">R$ {car.preco}</strong>
          
            <div className="w-full h-[1px] bg-gray-200"></div>
            <h2 className="py-2">{car.cidade}</h2>
          </section>
        </Link>
      ))}  
      </main>
        
    </Container>
  )
}

