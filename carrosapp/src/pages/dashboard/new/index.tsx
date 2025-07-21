import { Container } from "../../../components/container";
import { DashboardHeader } from "../../../components/headerDashboard";

import { useForm } from "react-hook-form"
import { z }  from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import { addDoc } from "firebase/firestore";
import { db } from "../../../services/firebaseconnection";
import { collection } from "firebase/firestore";

import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import toast from "react-hot-toast";

const schema = z.object({
  name: z.string().nonempty("Preencha o campo"),
  modelo: z.string().nonempty("Preencha o campo"),
  ano: z.string().nonempty("Preencha o campo"),
  km: z.string().nonempty("Preencha o campo"),
  preco: z.string().min(1, "Preencha o campo"),
  cidade: z.string().nonempty("Preencha o campo"),
  wpp: z.string().min(10, "Preencha o campo").refine((value) => /^(\d{11,12})$/.test(value), {
    message: "Numero de telefone invalido"
   }),
  description: z.string().nonempty("Preencha o campo").min(15, "O campo deve ter no minimo 15 caracteres").max(80, "O campo deve ter no maximo 80 caracteres"),
  
})

type FormData = z.infer<typeof schema>



export function New(){

    const { user } = useContext(AuthContext)

    const {register, handleSubmit, formState: { errors}, reset} = useForm<FormData>({
        resolver: zodResolver(schema),
        mode:"onChange",
      })

      async function onSubmit(data: FormData){

        await addDoc(collection(db, "Posts"), {
            name: data.name.toUpperCase(),
            modelo: data.modelo,
            km: data.km,
            preco: data.preco,
            wpp: data.wpp,
            cidade: data.cidade,
            ano: data.ano,
            description: data.description,
            created: new Date(),
            criador: user?.name,
            uid: user?.uid
        })

        .then(() => {
            reset();
            toast.success("Cadatrado com Sucesso")
            console.log("Cadastrado com SUCESSO")
        })
        .catch((error) => {
            toast.error("Não foi possivel Cadatrar. Tente novamente")
            console.log(`ERRO: ${error}`)
        })
        

      }

    return(
        <Container>
            <DashboardHeader />

            <div className="w-full bg-white flex flex-col gap-2">
        <form onSubmit={handleSubmit(onSubmit)}>

          <p className="mt-5 font-semibold">Nome</p>
          <input
          {...register("name")}
        
          placeholder="Nome do veículo"
          className="border-1 border-gray-300 rounded px-2 h-9 w-12/12"
          />
          {errors.name && (
            <p className="text-red-600 text-[12px]">{errors.name.message}</p>
          )}

          <p className="mt-5 font-semibold">Modelo</p>
          <input
          {...register("modelo")}
        
          placeholder="Modelo do veículo"
          className="border-1 border-gray-300 rounded px-2 h-9 w-12/12"
          />
          {errors.name && (
            <p className="text-red-600 text-[12px]">{errors.modelo?.message}</p>
          )}


          <p className="mt-5 font-semibold">Ano</p>
          <input
          {...register("ano")}
        
          placeholder="Ano do veículo"
          className="border-1 border-gray-300 rounded px-2 h-9 w-12/12"
          />
          {errors.name && (
            <p className="text-red-600 text-[12px]">{errors.ano?.message}</p>
          )}

          <p className="mt-5 font-semibold">Km</p>
          <input
          {...register("km")}
        
          placeholder="Km rodado do veículo"
          className="border-1 border-gray-300 rounded px-2 h-9 w-12/12"
          />
          {errors.name && (
            <p className="text-red-600 text-[12px]">{errors.km?.message}</p>
          )}


          <p className="mt-5 font-semibold">Preço</p>
          <input
          {...register("preco")}
        
          placeholder="Preço do veículo"
          className="border-1 border-gray-300 rounded px-2 h-9 w-12/12"
          />
          {errors.name && (
            <p className="text-red-600 text-[12px]">{errors.preco?.message}</p>
          )}


          <p className="mt-5 font-semibold">Cidade</p>
          <input
          {...register("cidade")}
        
          placeholder="Cidade"
          className="border-1 border-gray-300 rounded px-2 h-9 w-12/12"
          />
          {errors.name && (
            <p className="text-red-600 text-[12px]">{errors.cidade?.message}</p>
          )}


          <p className="mt-5 font-semibold">WhatsApp</p>
          <input
          {...register("wpp")}
        
          placeholder="(xx)xxxxx-xxxx"
          className="border-1 border-gray-300 rounded px-2 h-9 w-12/12"
          />
          {errors.name && (
            <p className="text-red-600 text-[12px]">{errors.wpp?.message}</p>
          )}

          <p className="font-semibold mt-5">Descrição</p>
          <textarea 
          {...register("description")}
          className="border border-gray-300 w-full rounded h-15"
          />
          {errors.name && (
            <p className="text-red-600 text-[12px]">{errors.description?.message}</p>
          )}

          
          <button className="w-12/12 bg-blue-950 text-white h-9 rounded cursor-pointer my-4">Cadastrar Veículo</button>
        </form>
      </div>
        </Container>
    )

}