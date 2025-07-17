import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseconnection";


export function DashboardHeader(){

    async function handleLogOut(){
        await signOut(auth)
    }

    return (
        <div className="bg-blue-500 mt-4 flex h-10 items-center rounded-lg px-2 gap-4">
            <Link to={"/dashboard"} className=" text-white">Dashboard</Link>

            <Link to={"/dashboard/new"} className="text-white">Novo Carro</Link>

            <button onClick={handleLogOut} className="text-white ml-auto cursor-pointer">Sair da conta</button>
        </div>
    )
}