
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebaseconnection"
import {  useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container } from "../../components/container";
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()

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

        if(!snapshot.data()){
          navigate("/")
        }

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
      <main className="flex w-full  max-w-7xl">  

        {carro && (
          <section className="w-full flex flex-col bg-white p-2 shadow mr-4 relative mt-5 rounded py-3" >
            
            <div className="flex">
              <h1 className="font-bold text-2xl sm:text-4xl">{carro?.name}</h1>
              <strong className="font-bold text-2xl  sm:text-4xl ml-auto">R$ {carro?.preco}</strong>
            </div>

            <h2 className="py-2 text-zinc-600">{carro?.modelo}</h2>

            <div className="flex">
              <h3 className="text-zinc-600">Cidade</h3>
              <h3 className="ml-15 text-zinc-600">Km</h3>
              
            </div>
            <div className="flex">
              <p className="mb-2 font-semibold">{carro?.cidade}</p>
              <p className="ml-4 font-semibold">{carro?.km}</p>
            </div>
            
            <h3 className=" text-zinc-600">Ano</h3>
            <p className="font-semibold">{carro?.ano}</p>

            <h3 className="text-zinc-600 mt-2">Descrição</h3>
            <p className="font-semibold">{carro?.description}</p>
            

            <h3 className="text-zinc-600 mt-2">Telefone/WhatsApp</h3>
            <p className="font-semibold">{carro?.wpp}</p>

            <h3 className="text-zinc-600 mt-2">Vendedor</h3>
            <p className="font-semibold">{carro?.criador}</p>
          
            <div className="w-full h-[1px] bg-gray-200 my-1"></div>

            <a href={`https://wa.me/55${carro?.wpp}?text=Vi o seu ${carro.name} no site CarrosPorto e fiquei interessado`}
            target="_blank" 
            className="w-full bg-green-500 flex items-center justify-center py-1 rounded my-4 cursor-pointer">
              <FaWhatsapp size={28} className="text-white mr-2"></FaWhatsapp>
              <p className="text-white sm:text-lg font-semibold">Conversar com vendedor</p>
            </a>

            

          </section>
        )}

          
       
      </main>


    </Container>
  )
}