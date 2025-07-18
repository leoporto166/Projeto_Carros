
import { Container } from "../../components/container";
import { DashboardHeader } from "../../components/headerDashboard";
import carro from "../../assets/bmw.jpg"
import { FiTrash2 } from "react-icons/fi";

import { getDocs,  query, where, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseconnection";
import { collection } from "firebase/firestore";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { id } from "zod/v4/locales";

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


export function Dashboard() {
  
  const [carros, setCarros] = useState<CarsProps[]>([])

  const { user } = useContext(AuthContext)


    function loadCars(){
    const carsRef = collection(db, "Posts")
    const queryRef = query(carsRef, where("uid", "==", user?.uid))

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
          uid: doc.data().uid

        })
      })

      setCarros(listcars)
    })

    }

  useEffect(() => {

    if(!user?.uid){
      return;
    }

    loadCars();
  }, [user, setCarros])

  function handleDelete(id: string){

    const carsRef = doc(db, "Posts", id)
    deleteDoc(carsRef)

    .then(() => {
      loadCars()
      console.log("Deletado")
    })
    



  }

  return (
    <Container>
      <DashboardHeader />

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {carros.map((car) => (
        <Link to={""} key={car.id}>

          <section className="w-full flex flex-col bg-white p-2 shadow mr-4 relative " >

            <button onClick={() => handleDelete(car.id)} className=" bg-blue-300 w-14 h-14 rounded-full absolute flex items-center justify-center right-2 top-2 drop-shadow cursor-pointer">
              <FiTrash2 size={24}></FiTrash2>
            </button>

            <img src={carro} alt={car.name} className=" rounded"></img>

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