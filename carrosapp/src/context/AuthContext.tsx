
import { type ReactNode, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseconnection";

type AuthContextData = {
    signed: boolean;
    handleInfoUser: ({email, name, uid}: UserProps) => void;
    user: UserProps | null
}

interface ProviderProps{
    children: ReactNode
}

interface UserProps{
    uid: string;
    name: string | null;
    email: string | null;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({children}: ProviderProps){

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser({
                    uid: user.uid,
                    name: user?.displayName,
                    email: user?.email
                })
            }
            else{
                setUser(null)
            }
        })

        return () => {
            unsub
        } 
        
    }, [])

    function handleInfoUser({email, name, uid}: UserProps){
        setUser({
            email,
            name,
            uid
        })
    }

    const [user, setUser] = useState<UserProps | null>(null)

    return(
        <AuthContext.Provider 
        value={{
            signed: !!user,
            handleInfoUser,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider