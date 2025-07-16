import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import {z} from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

const schema  = z.object({
  email: z.string().email("Email inválido").nonempty("Preencha o campo"),
  password: z.string().nonempty("Preencha o campo"),
})

type FormData = z.infer<typeof schema>


export function Login() {

  const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onSubmit(data: FormData){
    console.log(data)
  }

  return (
    <Container>
      <div className="w-full max-w-7xl min-h-screen flex flex-col justify-center items-center">
        <Link to={"/"}
        className="text-2xl"
        >
            CarrosPorto
          </Link>
        <form className="flex flex-col w-11/12 sm:w-xl items-center shadow-lg rounded"
        onSubmit={handleSubmit(onSubmit)}
        >
          
          <input
          type="email"
          placeholder="Digite seu email..."
          className="border-1 border-gray-300 rounded px-2 h-10 w-11/12 my-5"
          {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
          type="password"
          placeholder="Digite sua senha..."
          className="border-1 border-gray-300 rounded px-2 h-10 w-11/12 mb-5"
          {...register("password")}
          />
           {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button className="bg-blue-950 text-white w-11/12 h-10 rounded mb-5">Acessar</button>
        </form>

        <span className="mt-2">Não tem uma conta? <Link to={"/register"}className="underline">Criar</Link></span>
      
      </div>
    </Container>
  )
}