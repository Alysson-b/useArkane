import { User } from "../types/user"
import { api } from "./api"


export async function getUsuarios(): Promise<User[]> {
    const {data} = await api.get("/api/users")
    return  data
}

export async function editarUsuarios(): Promise<User> {
    const {data} = await api.put("/api/users:id")
    return data
}

export async function deleteUsuarios(): Promise<User> {
    const {data} = await api.delete("/api/users:id")
    return data
}