
import { doc, getDoc, snapshotEqual } from "firebase/firestore"
import { db } from "../../services/firebaseconnection"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container } from "../../components/container";
import carroimg from "../../assets/bmw.jpg";

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
  criador: string;
}


export function Datails() {

  const [carro, setCarro] = useState<CarsProps>()

  const {id} = useParams()

  useEffect(() => {
    async function loadCar(){
      if(!id){
        return
      }

      const docRef = doc(db, "Posts", id)
      getDoc(docRef)

      .then((snapshot) => {
        setCarro({
          id: snapshot.id,
          name: snapshot.data()?.name,
          modelo: snapshot.data()?.modelo,
          ano: snapshot.data()?.ano,
          km: snapshot.data()?.km,
          preco: snapshot.data()?.preco,
          cidade: snapshot.data()?.cidade,
          wpp: snapshot.data()?.wpp,
          description: snapshot.data()?.description,
          uid: snapshot.data()?.uid,
          criador: snapshot.data()?.criador
        })
      })
    }

    loadCar()
  }, [])

  return (
    <Container>
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        
        <Link to={""}>

          <section className="w-full flex flex-col bg-white p-2 shadow mr-4 relative " >
            
            <img src={carroimg} alt={carro?.name} className=" rounded"></img>

            <h1 className="py-2">{carro?.name}</h1>

            <span className="mb-6 text-zinc-600">{carro?.ano} | {carro?.km} km</span>

            <strong className="py-2">R$ {carro?.preco}</strong>
          
            <div className="w-full h-[1px] bg-gray-200"></div>

            <h2 className="py-2">{carro?.cidade}</h2>

          </section>

        </Link>
        
      </main>


    </Container>
  )
}