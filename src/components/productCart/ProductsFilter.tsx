import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Cards, HeaderMenu, Loading, NextButton, PageNumber, Pagination, SectionFilter } from "./style";
import { useSearch } from "../../contexts/provider_search/useSeach";

import { api } from "../../services/api";
import Button from "../common/Button";

export function ProductFilter(){
    const [product, setProduct] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { search } = useSearch()
    const [page, setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(1)
    const limit = 8
    const [hoverId, setHoverId] = useState<string | null>(null)
    const {categoria} =  useParams()

    const [abrirFiltro, setAbrirFiltro] = useState(false)

    

    useEffect(()=> {
        async function limitePorPagina() {
            try{
                setLoading(true)
                    const response = await api.get("/api/produtos", {
                        params:{
                            categoria,
                            page,
                            limit: limit}})
                    setProduct(response.data.data)
                    setTotalPages(response.data.totalPages)
            }catch(err){
                console.log(err)
            }finally {
                setLoading(false)
            }
        }
        limitePorPagina()
    },[categoria, page])


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
            <SectionFilter>
                <div className="containerSection">

                <Button onClick={()=>{setAbrirFiltro(prev=> !prev)}} className="btnFilter"><i className="fa-solid fa-filter"></i>Filtrar produtos</Button>
                {abrirFiltro && (

                    <div className="container">
                    <div className="btns">
                        <div>
                            <h2>Filtrar produtos por:</h2>
                        </div>
                    </div>

                <div className="precoContainer">
                    <p className="titlePreco">Preço:</p>
                    <div className="barra"> 
                        <div className="preco">
                            <p>R$ 89.90</p>
                            <p>R$ 299.90</p>
                        </div>
                        <div>
                            <input  min="0" max="299" className="slide"  type="range" />  
                        </div>
                    </div>
                    <div className="filters">
                        <fieldset>
                            <legend> Mín </legend>
                            <input type="number" placeholder="00.00"/>
                        </fieldset>
                        <p>:</p>
                        <fieldset>
                            <legend> Máx </legend>
                            <input type="number" placeholder="00.00"/>
                        </fieldset>
                    </div>
                </div>

                <div className="containerTamanho">
                    <p className="titleTamanho">Tamanho:</p>
                        <div className="TamanhosCores">
                            <div>
                                <ul>
                                    <li>
                                        <button>P</button>
                                    </li>
                                    <li>
                                        <button>M</button>
                                    </li>
                                    <li>
                                        <button>G</button>
                                    </li>
                                    <li>
                                        <button>GG</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    <p className="titleTamanho">Cores:</p>
                    
                    <div className="TamanhosCores">
                        <input disabled className="cor" type="color" value="#000" />
                        <input disabled  className="cor" type="color" value="#fff" />
                        <input disabled  className="cor" type="color" value="#0766f3" />
                        <input disabled  className="cor" type="color" value="#f10505" />
                        <input disabled  className="cor" type="color" value="#5c5b5b" />
                    </div>
                </div>

                    <div className="btns">
                            <button>Aplicar filtros</button>
                            <button>limpar filtros</button>
                    </div>
                </div>
            )}
            </div>

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
            </SectionFilter>

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
        
        </HeaderMenu>

    )


}