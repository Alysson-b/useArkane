import { completar_cadastroDTO, Pedido_usuario, User, UserResponse } from "../types/user"
import { api } from "./api"


export async function getUsuarios(): Promise<UserResponse[]> {
    const {data} = await api.get("/api/users")
    return  data
}

export async function getPerfilCompleto(): Promise<{perfilCompleto: boolean}> {
    const {data} = await api.get("/api/users/status")
    return  data
}

export async function getDadosUsuario(): Promise<UserResponse> {
    const {data} = await api.get("/api/users/me")
    return  data
}

export async function completarCadastro(data: completar_cadastroDTO): Promise<{ mensagem: string }> {
    const response = await api.post("/api/users/profile", data)
    return  response.data
}

export async function editarUsuarios(): Promise<User> {
    const {data} = await api.put("/api/users:id")
    return data
}

export async function deleteUsuarios(): Promise<User> {
    const {data} = await api.delete("/api/users:id")
    return data
}


export async function pedidoUsuario(data: Pedido_usuario): Promise<{message: string}> {
    const response = await api.post("api/pedido/me", data)
    return response.data
}