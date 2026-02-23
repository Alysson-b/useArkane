import { CriarProduto, Product, ProductUpdateDTO } from "../types/product"
import { api } from "./api"

export async function getProducts(): Promise<Product[]> {
    const {data} = await api.get("/api/produtos")
    return data
}
export async function getProductsId(id: string): Promise<Product> {
    const {data} = await api.get(`/api/produtos/${id}`)
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



