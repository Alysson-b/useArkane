import { useEffect, useState } from "react"
import { buscarMeusPedidos } from "../../services/usuarios.services"
import { Pedidos_usuarios } from "../../types/user"
import {  PedidosStyled } from "./Styled.Global"

function PedidosUsuarios(){
    const [meusPedidos, setMeusPedidos] = useState<Pedidos_usuarios[]>([])

    useEffect(()=>{ 
        async function buscarPedidos() {
            try{
                const data = await buscarMeusPedidos()
                setMeusPedidos(data)
                console.log(data)
            }catch(err){
                console.log("erro ao buscar pedidos", err)
            }
        }
        buscarPedidos()
    },[])
    
    function formatarData(data: string){
        return new Date(data).toLocaleDateString("pt-BR")
        }
    return (
        <>
        <div className="title">
            <h1>Meus pedidos</h1>
        </div>
        <div className="container_pedido">

        {meusPedidos.length ? (
            meusPedidos.map((p, index)=>(
                <PedidosStyled key={index}>

                    <div className="imagem">
                        <img src={p.image_url} alt={p.produto_nome} />
                    </div>

                    <div className="conteudo">
                        <h1>{p.produto_nome}</h1>

                        <div className="TCP">
                            <p><span>Tamanho:</span> {p.tamanho}</p>
                            <p><span>Cor:</span> {p.cor}</p>
                            <p><span>Preço Total:</span> R$ {p.total}</p>
                        </div>

                        <div className="infoPedido">
                            <p>
                                <span>Status:</span>
                                <span className={`status ${p.status}`}>
                                    {p.status}
                                </span>
                            </p>

                            <p>
                                <span>Pedido feito em:</span> {formatarData(p.created_at)}
                            </p>
                        </div>
                    </div>
                </PedidosStyled>
            ))
        ):(
            <p>Nenhum Produto Encontrado</p>
        )}
        </div>
        </>
    )
}

export default PedidosUsuarios