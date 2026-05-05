import { CriarProduto, Product, ProductsResponse, ProductUpdateDTO } from "../types/product"
import { Avaliacoes_usuarios, EnviarAvaliçaoDTO } from "../types/user"
import { api } from "./api"

export async function getProducts(params?: {page?: number; limit?: number}): Promise<ProductsResponse> {
    const {data} = await api.get("/api/produtos", {params})
    return data
}

export async function getProductsNovidade(params?: {page?: number; limit?: number}): Promise<ProductsResponse> {
    const {data} = await api.get("/api/produtos", {params: {...params}})
    return data
}

export async function getProductsMasculino(params?: {page?: number; limit?: number}): Promise<ProductsResponse> {
    const {data} = await api.get("/api/produtos", {params: {...params, categoria: "masculina"}})
    return data
}

export async function getProductsFemino(params?: {page?: number; limit?: number}): Promise<ProductsResponse> {
    const {data} = await api.get("/api/produtos", {params: {...params, categoria: "feminina"}})
    return data
}
export async function getProductsId(id: string ): Promise<Product> {
    const {data} = await api.get(`/api/produtos/${id}`)
    return data
}

export async function avaliacoesUsuarios(): Promise<Avaliacoes_usuarios[]>{
    const {data} = await api.get(`/api/avaliacoes`)
    return data
}

export async function EnviarAvaliacao(body: EnviarAvaliçaoDTO): Promise<Avaliacoes_usuarios>{
    const {data} = await api.post(`/api/avaliacoes`, body)
    return data
    
}

export async function postProducts(produto: CriarProduto): Promise<CriarProduto> {
    const { data } = await api.post("/api/produtos", produto)
    return data
}


export async function updateProducts(id: string, produto: ProductUpdateDTO): Promise<Product> {
    const {data} = await api.put(`/api/produtos/${id}`, produto)
    return data
    
}

export async function deleteProduct(id: string): Promise<Product> {
    const {data} = await api.delete(`/api/produtos/${id}`)
    return data
}



