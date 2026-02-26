export type UserTipo = "user" | "admin"

export interface User{
    id: string
    nome: string
    email: string
    tipo: UserTipo
    pedido: Pedido_usuario[]
    usuarios_enderecos: usuarios_enderecos
    usuarios_perfils: usuarios_perfil
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
export interface usuarios_perfil {
    cpf: string
    sexo: string
    telefone: string
    data_nascimento: string
}


export interface completar_cadastroDTO {
    cpf: string
    sexo: string
    telefone: string
    data_nascimento: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    cep: string
}

export interface Pedido_usuario{
    status: string
    total: number
    itens_do_pedido: string

}