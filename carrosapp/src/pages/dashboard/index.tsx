
import { Container } from "../../components/container";
import { DashboardHeader } from "../../components/headerDashboard";
import { useForm } from "react-hook-form"
import { z }  from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().nonempty("Preencha o campo"),
  modelo: z.string().nonempty("Preencha o campo"),
  ano: z.string().nonempty("Preencha o campo"),
  km: z.string().nonempty("Preencha o campo"),
  preco: z.number().min(1, "Preencha o campo"),
  cidade: z.string().nonempty("Preencha o campo"),
  wpp: z.number().min(11, "Preencha o campo"),
  desciption: z.string().nonempty("Preencha o campo").min(15, "O campo deve ter no minimo 15 caracteres").max(80, "O campo deve ter no maximo 80 caracteres"),
  
})

type FormData = z.infer<typeof schema>


export function Dashboard() {

  const {register, handleSubmit, formState: { errors}} = useForm<FormData>({
    resolver: zodResolver(schema),
    mode:"onChange",
  })



  return (
    <Container>
      <DashboardHeader />


      <div className="w-full bg-white flex flex-col gap-2">
        <form>
          <input
          {...register("name")}
        
          placeholder="Nome do veiculo"
          className="border-1 border-gray-300 rounded px-2 h-9 w-12/12 mt-5"
          />
          {errors.name && (
            <p className="text-red-600 text-[12px]">{errors.name.message}</p>
          )}
          <button className="w-12/12 bg-blue-950 text-white h-9 rounded cursor-pointer my-4">Cadastrar Veiculo</button>
        </form>
      </div>

    </Container>
  )
}