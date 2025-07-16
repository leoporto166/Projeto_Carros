import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import logo from "../../assets/Logo2.png"

import { useForm } from "react-hook-form";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().nonempty("Preencha o campo"),
  email: z.string().email("Email invalido").nonempty("Preencha o campo"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres ").nonempty("Preencha o campo"),
})

type FormData  = z.infer<typeof schema>




export function Register() {

  const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
  resolver:zodResolver(schema),
  mode: "onChange"
  })

  function onSubmit(data: FormData){
    console.log(data)
  }

  return (
      <Container>
        <div className="w-full max-w-7xl min-h-screen flex flex-col justify-center items-center">
          <Link to={"/"}
          className=""
          >
              <img src={logo} alt="Logo" className="w-9/12 mb-2 mx-auto"/>
            </Link>
          <form className="flex flex-col w-11/12 sm:w-xl shadow-lg rounded items-center"
          onSubmit={handleSubmit(onSubmit)}
          >

            <input
              placeholder="Nome completo"
              className="border-1 border-gray-300 rounded px-2 h-10 w-11/12 mt-5"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm w-11/12 ml-1 ">{errors.name.message}</p>
            )}
            
            <input
            placeholder="Digite seu email..."
            className="border-1 border-gray-300 rounded px-2 h-10 w-11/12 mt-5"
            {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm ml-1 w-11/12 ">{errors.email.message}</p>
            )}
  
            <input
            type="password"
            placeholder="Digite sua senha..."
            className="border-1 border-gray-300 rounded px-2 h-10 w-11/12 mt-5"
            {...register("password")}
            />
             {errors.password && (
              <p className="text-red-500 text-sm w-11/12 ml-1 ">{errors.password.message}</p>
            )}
  
            <button className="bg-blue-950 text-white w-11/12 h-10 rounded my-3">Acessar</button>
          </form>
  
          <span className="mt-2">Já tem uma conta? <Link to={"/login"}className="underline">Entrar</Link></span>
        
        </div>
      </Container>
    )
}