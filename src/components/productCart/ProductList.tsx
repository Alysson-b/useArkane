import { useEffect, useState } from "react";
import { Product } from "../../types/product";

import { HeaderMenu, Loading } from "./style";
import { useSearch } from "../../contexts/provider_search/useSeach";
import { getProducts } from "../../services/product.service";
import { CarrosselProdutos } from "./CarrosselProdutos";
import { Section } from "../common/Styled.Global";

export function ProductList(){
    const [product, setProduct] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const { search } = useSearch()
    const [page, setPage] = useState(1)
    
    const limite = 8
    
    



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

    if(!product){
        <div>
            <h2>Produto nao encontrado</h2>
        </div>
    }
    return(
        <HeaderMenu>
            <CarrosselProdutos title="Nova coleçao"/>

            <Section>
                <div className="beneficio">
                    <i className="fa-brands fa-pix"></i>
                    <span>3<i className="fa-solid fa-percent"></i> Off</span>
                    <p>Desconto para compras no PIX</p>
                </div>
                <div className="beneficio">
                    <i className="fa-solid fa-truck-fast"></i>
                    <span>Frete Grátis</span>
                    <p>para compras acima de R$149</p>
                </div>
                <div className="beneficio">
                    <i className="fa-solid fa-arrows-spin"></i>
                    <span>Troca Fácil</span>
                    <p>rapida e confiavél</p>
                </div>
                <div className="beneficio">
                    <i className="fa-solid fa-bolt"></i>
                    <span>Tecido respirável</span>
                    <p>Alta performance garantida</p>
                </div>
                <div className="beneficio">
                    <i className="fa-solid fa-credit-card"></i>
                    <span>ate 6x</span>
                    <p>parcelas no cartão de credito</p>
                </div>
            </Section>
            <CarrosselProdutos title="Masculino"  categoria="masculina" />

                <div className="banner">
                <img src="https://res.cloudinary.com/dgefmot0t/image/upload/v1778292515/bannerPremiun_hjfpwh.png" alt="" />

                </div>

            <CarrosselProdutos title="Feminino" categoria="feminina" />
            
        </HeaderMenu>

    )


}