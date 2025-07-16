
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { type ReactNode } from "react";

interface PrivateProps{
    children: ReactNode;
}

export function Private({children}: PrivateProps):any {

    const { signed } = useContext(AuthContext)

    if(!signed){
       return <Navigate to={"/login"}></Navigate>
    }

    return children;

}