import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import { Card, Cards, HeaderMenu, Loading } from "./style";
import { getProducts } from "../../services/product.service";
import { useSearch } from "../../contexts/provider_search/useSeach";


export function ProductList(){
    const [product, setProduct] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { search } = useSearch()

    

    useEffect(()=>{
        async function carregarProdutos() {
            try{
                const data = await getProducts()
                setProduct(data)
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
        carregarProdutos()
    }, [])

    const termo = (search ?? "").toLowerCase()

    const filtrados = product.filter(p => {
    const nome = (p.nome ?? "").toLowerCase()
    const categoria = (p.descricao ?? "").toLowerCase()
    
        
    return nome.includes(termo) || categoria.includes(termo)
    })

    if (loading) {
            return (
            <Loading>
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Carregando produto...</p>
                </div>
            </Loading>
            )
        }
    return(
        <HeaderMenu>
            <h1>
                Coleçao Nova <div className="line"></div>
            </h1>

        <Cards id="produtos-container">
            {filtrados.length ? (
                filtrados.map(Product => (
                    <Card key={Product.id}>
                        <img src={Product.image_url} alt={Product.nome} />
                        <h3>R$ {Product.variacoes[0].preco}</h3>
                        <p>Em até 2 x {(parseFloat(Product.variacoes[0].preco) / 2).toFixed(2)}</p>
                        <button onClick={() => navigate(`/produto/${Product.id}`)}>Comprar</button>
                    </Card>
                ))
            ) : (
                <p className="produto-nao-encontrado">Produto não encontrado!</p>
            )}

        </Cards>
        </HeaderMenu>

    )


}