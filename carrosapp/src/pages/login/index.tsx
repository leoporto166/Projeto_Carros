import { Link } from "react-router-dom";
import { Container } from "../../components/container";

import {z} from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import logo from "../../assets/Logo2.png"

import { auth } from "../../services/firebaseconnection";
import { signInWithEmailAndPassword , signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast"

const schema  = z.object({
  email: z.string().email("Email inválido").nonempty("Preencha o campo"),
  password: z.string().nonempty("Preencha o campo"),
})

type FormData = z.infer<typeof schema>


export function Login() {

  const navigate = useNavigate()

  const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })


    useEffect(() => {
      async function handleLogOut(){
        await signOut(auth)
      }

      handleLogOut()
    }, [])

    
  async function onSubmit(data: FormData){


    

     await signInWithEmailAndPassword(auth, data.email, data.password)

    .then(() => {
      toast.success("Logado com sucesso")
      console.log("Logado com sucesso")
      console.log(data)
      navigate("/dashboard", {replace: true})
    })
    .catch((error) => {
      toast.error("Não foi possivel Logar. Tente novamente")
      console.log(`Error: ${error}`)
    })

   
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
          placeholder="Digite seu email..."
          className="border-1 border-gray-300 rounded px-2 h-10 w-11/12 mt-5"
          {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm w-11/12 ">{errors.email.message}</p>
          )}

          <input
          type="password"
          placeholder="Digite sua senha..."
          className="border-1 border-gray-300 rounded px-2 h-10 w-11/12 mt-5"
          {...register("password")}
          />
           {errors.password && (
            <p className="text-red-500 text-sm w-11/12 ">{errors.password.message}</p>
          )}

          <button className="bg-blue-950 text-white w-11/12 h-10 rounded my-3 cursor-pointer">Acessar</button>
        </form>

        <span className="mt-2">Não tem uma conta? <Link to={"/register"}className="underline">Criar</Link></span>
      
      </div>
    </Container>
  )
}