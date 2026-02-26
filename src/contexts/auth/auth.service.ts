import { api } from "../../services/api";

interface Login {
    email: string
    senha: string
}

interface cadastro{
    nome: string
    email: string
    senha: string
}


export async function logarUsuario(logar :Login) {
    const {data} = await api.post("/api/login", logar)
    return data
    
}


export async function cadastroUsuario(logar: cadastro) {
    const {data} = await api.post("/api/users", logar)
    return data
}