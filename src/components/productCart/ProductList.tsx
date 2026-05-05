import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import { Card, Cards, HeaderMenu, Loading, NextButton, PageNumber, Pagination } from "./style";
import { useSearch } from "../../contexts/provider_search/useSeach";
import { getProducts } from "../../services/product.service";
import { CarrosselProdutos } from "./CarrosselProdutos";

export function ProductList(){
    const [product, setProduct] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { search } = useSearch()
    const [page, setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(1)
    const limite = 8
    const [hoverId, setHoverId] = useState<string | null>(null)
    



    useEffect(()=> {
        async function limitePorPagina() {
            try{
                setLoading(true)
                    const response = await getProducts({
                        page: page,
                        limit: limite
                    })
                    const produto = response.data || []
                    setProduct(produto)
                    console.log(produto)
                    setTotalPages(response.totalPages)
            }catch(err){
                console.log(err)
            }finally {
                setLoading(false)
            }
        }
        limitePorPagina()
    },[page])


    useEffect(() => {
        setPage(1)
    }, [search])

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
            
                <Cards id="produtos-container">
                    {filtrados.length ? (
                        filtrados.map(Product => {
                            const preco = Product.variacoes?.[0]?.preco
                            const precoNumero = preco ? parseFloat(preco) : 0
                            return(
                                <Card onClick={() => navigate(`/produto/${Product.id}`)} key={Product.id}
                                    onMouseEnter={()=> setHoverId(Product.id)}
                                    onMouseLeave={()=> setHoverId(null)}>    
                                    <img draggable={false} src={hoverId === Product.id ? Product.imagen_back_url : Product.image_url} alt={Product.nome} />
                                    <h3> {preco ? `R$ ${Number(preco).toFixed(2)}` : "Indisponível"}</h3>
                                    <p>Em até 2 x {(precoNumero / 2).toFixed(2)}</p>
                                    <button onClick={() => navigate(`/produto/${Product.id}`)}>Comprar</button>
                                </Card>
                        )})
                    ) : (
                        <p className="produto-nao-encontrado">Produto não encontrado!</p>
                    )}
                </Cards>  
        <Pagination>
            <div className="pages">

                {Array.from({length: totalPages}, (_, index)=> {
                    const pageNumber = index + 1
                    return(
                        <PageNumber key={pageNumber} onClick={()=> setPage(pageNumber)}
                        >{pageNumber}</PageNumber>
                    )
                })}
                
            {page < totalPages && (
                <NextButton onClick={()=> setPage(page + 1)}> Seguinte <i className="fa-solid fa-angle-right"></i></NextButton>
            )}
            </div>
        </Pagination>
        
        <CarrosselProdutos title="Nova coleçao"/>
        <CarrosselProdutos title="Masculino"  categoria="masculina" />
        <CarrosselProdutos title="Feminino" categoria="feminina" />
        
        
        
        </HeaderMenu>

    )


}