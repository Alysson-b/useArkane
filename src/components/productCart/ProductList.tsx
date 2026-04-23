import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import { Card, Cards, HeaderMenu, Loading } from "./style";
import { getProducts } from "../../services/product.service";
import { useSearch } from "../../contexts/provider_search/useSeach";
import axios from "axios";
import Button from "../common/Button";


export function ProductList(){
    const [product, setProduct] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { search } = useSearch()
    const [page, setPage] = useState(1)
    const limite = 6
    const [hasProduct, setHasProduct] = useState(true)

    useEffect(()=> {
        async function limitePorPagina() {
            try{
                setLoading(true)
                    const response = await axios(`https://arkane-backend-1.onrender.com/api/produtos?page=${page}&limit=${limite}`)
                    const produto = response.data.data || []
                    setProduct(produto)
                    setHasProduct(produto.length === limite)
            }catch(err){
                console.log(err)
            }finally {
                setLoading(false)
            }
        }
        limitePorPagina()
    },[page])

    function proximaPagina(){
        if (hasProduct){
            setPage(prev=> prev+1)
        }
    }
    function anteriorPagina(){
        setPage(prev => (prev > 1 ? prev - 1 : 1))
    }

    useEffect(() => {
        setPage(1)
    }, [search])

   
    // useEffect(()=>{
    //     async function carregarProdutos() {
    //         try{
    //             const data = await getProducts()
    //             setProduct(data)
    //         }catch(err){
    //             console.log(err)
    //         }finally{
    //             setLoading(false)
    //         }
    //     }
    //     carregarProdutos()
    // }, [])

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
                filtrados.map(Product => {
                    const preco = Product.variacoes?.[0]?.preco
                    const precoNumero = preco ? parseFloat(preco) : 0
                    console.log(Product)
                    console.log(Product.variacoes)
                    return(

                        <Card key={Product.id}>
                        <img src={Product.image_url} alt={Product.nome} />
                        <h3> {preco ? `R$ ${preco}` : "Indisponível"}</h3>
                        <p>Em até 2 x {(precoNumero / 2).toFixed(2)}</p>
                        <button onClick={() => navigate(`/produto/${Product.id}`)}>Comprar</button>
                    </Card>
                )})
            ) : (
                <p className="produto-nao-encontrado">Produto não encontrado!</p>
            )}

        </Cards>
        
            <div className="pages">
                <Button onClick={anteriorPagina} children={"Anterior"}/>
                <Button onClick={proximaPagina} children={"Proxima"} disabled={!hasProduct}/>
            </div>
        </HeaderMenu>

    )


}