import { useEffect, useState } from "react"
import { verificarPedidos } from "../../services/usuarios.services"
import { Pedidos_usuarios } from "../../types/user"
import { ListaPedidosStyled } from "./Styled.Global"

function ListarPedidosUsuarios(){
    const [pedidos, setPedidos] = useState<Pedidos_usuarios[]>([])

    useEffect(()=>{ 
        async function buscarPedidos() {
            try{
                const data = await verificarPedidos()
                setPedidos(data)
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
        {pedidos.length ? (
            pedidos.map((p, index)=>(
                <ListaPedidosStyled key={index}>
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
                </ListaPedidosStyled>
            ))
        ):(
            <p>Nenhum Produto Encontrado</p>
        )}
        </>
    )
}

export default ListarPedidosUsuarios