export type UserTipo = "user" | "admin"

export interface User{
    id: string
    nome: string
    email: string
    tipo: UserTipo
    pedido: Pedido_usuario[]
    usuarios_enderecos: usuarios_enderecos[]
    usuarios_perfils: usuarios_perfils[]
}

export interface usuarios_enderecos {
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    cep: string
}
export interface usuarios_perfils {
    cpf: string
    sexo: string
    telefone: string
    data_nascimento: number
}

export interface Pedido_usuario{
    status: string
    total: number
    itens_do_pedido: string

}