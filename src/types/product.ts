export interface ProductColor {
    cor: string,
    frontImage: string,
    frontBack: string
}

export interface Product{
    id: string,
    nome: string,
    descricao: string,
    image_url: string
    categoria: string,
    variacoes: VariacaoProduto[]
}


export interface CriarProduto {
    nome: string,
    descricao: string,
    image_url: string,
    categoria: string,
    variacoes: VariacaoProduto[]
}

export interface VariacaoProduto {
    id?: number              
    tempId?: number 
    tamanho: string
    cor: string
    preco: string
    estoque: number
}

export type ProductUpdateDTO = Omit<Product, "id">


export interface DadosCep {
    cep: string
    logradouro: string
    complemento: string
    unidade: string
    bairro: string
    localidade: string
    uf: string
    estado: string
    regiao: string

}