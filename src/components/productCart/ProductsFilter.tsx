import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Card, Cards, HeaderMenu, Loading, NextButton, PageNumber, Pagination, SectionFilter } from "./style";
import { useSearch } from "../../contexts/provider_search/useSeach";

import { api } from "../../services/api";
import Button from "../common/Button";
import { filtrarProdutoss } from "../../services/product.service";

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
    const [searchParams, setSearchParams] = useSearchParams()

    const [corFiltrada, setCorFltrada] = useState(
        searchParams.get("cor") || "")

    const [precoMin, setPrecoMin] = useState(
        searchParams.get("precoMin") || "0")

    const [precoMax, setPrecoMax] = useState(
        searchParams.get("precoMax") || "299" )

    const [tamanhoFiltrada, setTamanhoFltrado] = useState(
        searchParams.get("tamanho") || "")

    const [produtosFiltrados, setProdutosFiltrados] = useState<Product[]>([])
    
    
    async function buscarProdutoPorFiltros() {
        
        try {
            console.log("entrou no try")
            const  data  = await filtrarProdutoss({
                tamanho: tamanhoFiltrada,
                cor: corFiltrada,
                precoMin,
                precoMax
            })
            console.log("chegou aqui", data)
            setProdutosFiltrados(data)
            
            
        }catch(err){
            console.error(err)
            console.log("erro ao buscar os produtos")
        }
    }

    function limparFiltros(){
        if(corFiltrada || tamanhoFiltrada || precoMax || precoMin){
            setCorFltrada("")
            setTamanhoFltrado("")
            setPrecoMax("")
            setPrecoMin("")
        }
    }

    useEffect(() => {
        buscarProdutoPorFiltros()
            const params: Record<string, string> = {}
            if (corFiltrada) {
                params.cor = corFiltrada
            }
            if (tamanhoFiltrada) {
                params.tamanho = tamanhoFiltrada
            }
            if (precoMin) {
                params.precoMin = precoMin
            }
            if (precoMax) {
                params.precoMax = precoMax
            }
            setSearchParams(params)
            
    }, [corFiltrada, tamanhoFiltrada, precoMin, precoMax])
    

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
                
    const possuiFiltro = corFiltrada || tamanhoFiltrada || precoMin !== "0" || precoMax !== "299"
    const produtosRenderizaos = possuiFiltro ? produtosFiltrados : filtrados

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
                            <input value={precoMin} onChange={(e)=> setPrecoMin(e.target.value)} type="number" placeholder="00.00"/>
                        </fieldset>
                        <p>:</p>
                        <fieldset>
                            <legend> Máx </legend>
                            <input value={precoMax}  onChange={(e)=> setPrecoMax(e.target.value)} type="number" placeholder="00.00"/>
                        </fieldset>
                    </div>
                </div>

                <div className="containerTamanho">
                    <p className="titleTamanho">Tamanho:</p>
                        <div className="TamanhosCores">
                            <div>
                                <ul>
                                    <li>
                                        <button type="button" onClick={()=> setTamanhoFltrado("P")}>P</button>
                                    </li>
                                    <li>
                                        <button type="button" onClick={()=> setTamanhoFltrado("M")}>M</button>
                                    </li>
                                    <li>
                                        <button type="button" onClick={()=> setTamanhoFltrado("G")}>G</button>
                                    </li>
                                    <li>
                                        <button type="button" onClick={()=> setTamanhoFltrado("GG")}>GG</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    <p className="titleTamanho">Cores:</p>
                    
                    <div className="TamanhosCores">
                        <button  style={{background: "#000"}} type="button" onClick={()=> setCorFltrada("preto")} className="cor"></button>
                        <button  style={{background: "#fff"}} type="button" onClick={()=> setCorFltrada("branco")} className="cor"></button>
                        <button  style={{background: "#0f38f3"}} type="button" onClick={()=> setCorFltrada("azul")} className="cor"></button>
                        <button  style={{background: "#e40808"}} type="button" onClick={()=> setCorFltrada("vermelho")} className="cor"></button>
                        <button  style={{background: "#979797"}} type="button" onClick={()=> setCorFltrada("cinza")} className="cor"></button>
            
                    </div>
                </div>

                    <div className="btns">
                            <button >Aplicar filtros</button>
                            <button onClick={()=> limparFiltros()}>limpar filtros</button>
                    </div>
                </div>
            )}
            </div>

                <Cards id="produtos-container">
                    {produtosRenderizaos.length ? (
                        produtosRenderizaos.map(Product => {
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