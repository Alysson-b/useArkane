export type UserTipo = "user" | "admin"

export type CarroselImagens =  []

export interface User{
    id: string
    nome: string
    email: string
    tipo: UserTipo
    pedido: Pedido_usuario[]
    usuarios_enderecos: usuarios_enderecos[]
    usuarios_perfils: usuarios_perfil[]  
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
    itens: {
        variacao_id: number | undefined,
        quantidade: number}[]
}

export interface UserResponse {
    id: number
    nome: string
    email: string
    created_at: string

    perfil: {
        sexo: string
        telefone: string
        data_nascimento: string 
    } | null

    enderecos: {
        rua: string
        numero: string
        complemento: string
        bairro: string
        cidade: string
        estado: string
        cep: string
    }[]
}


export interface Items_do_pedido{
    quantidade: number
    preco: number
    pedido_id: number
    produto_id: number
    variacao_id: number
    pedido: string
    produto: string
}


export interface Pedidos_usuarios{
    pedido_id: number
    status: string
    total: string
    created_at: string
    preco: string
    tamanho: string
    cor: string
    image_url: string
    produto_nome: string
}


export interface Avaliacoes_usuarios{
    produto_nome: number,
    usuario_nome: number,
    estrelas: number
    comentario: string,
    criado_em: string
}

export type EnviarAvaliçaoDTO = {
    comentario: string,
    estrelas: number,
    produto_id: number
}