import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../../types/user";
import { cadastroUsuario, logarUsuario } from "./auth.service";
import { toast } from "react-toastify";

interface AuthContextProps{
    user: User | null
    token:  string | null
    login: (email: string, senha: string)=> Promise<void>
    cadastrar: (nome: string, email:string, senha: string)=>Promise<void>
    logout: ()=> void
}

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
)


export function AuthProvider({children}: {children: ReactNode}){
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
    const guarda_token = localStorage.getItem("token")
    const guarda_user = localStorage.getItem("tipo")

    if (
        guarda_token &&
        guarda_user &&
        guarda_user !== "undefined"
    ) {
        try {
            setToken(guarda_token)
            setUser(JSON.parse(guarda_user))
        } catch (error) {
            console.error("Erro ao recuperar usuário do localStorage", error)
            localStorage.removeItem("token")
            localStorage.removeItem("tipo")
        }
    }
}, [])

    async function cadastrar(nome: string, email:string, senha: string) {
        const data = await cadastroUsuario({nome, email, senha})
        setToken(data.token)
        setUser(data.user)

        localStorage.setItem("token", data.token)
        localStorage.setItem("tipo", JSON.stringify(data.user))
        
    }

    async function login(email:string, senha:string) {
        const data = await logarUsuario({email, senha})
        console.log("RETORNO DA API:", data)
        
        setToken(data.token)
        setUser(data.user)

        localStorage.setItem("token", data.token)
        localStorage.setItem("tipo", JSON.stringify(data.user))
    }

    function logout(){
        setToken(null)
        setUser(null)
        localStorage.clear()
        toast("Até breve")
    }

    return(
        <AuthContext.Provider value={{user, token, login, logout, cadastrar}}>
            {children}
        </AuthContext.Provider>
    )
}