import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../services/product.service";
import { Product } from "../../types/product";
import { useSearch } from "../../contexts/provider_search/useSeach";
import { ListProductStyled } from "./Styled.Global";
import Button from "./Button";
import { Loading } from "../productCart/style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function ListaDeProdutos() {
    
    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const { search } = useSearch();
    const navigate = useNavigate()
    const [produtoParaExcluir, setProdutoParaExcluir] = useState<Product | null>(null)
    useEffect(() => {
        async function carregarProdutos() {
        try {
            const data = await getProducts();
            setProduct(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
        }
        carregarProdutos();
    }, []);

    const termo = (search ?? "").toLowerCase();

    const filter = product.filter((p) => {
        const image_url = (p.image_url ?? "").toLowerCase();
        const nome = (p.nome ?? "").toLowerCase();
        const variacoes = p.variacoes ?? [];

        return image_url.includes(termo) || nome.includes(termo) || variacoes;
    });

    async function excluirProduto(){

            try{
                if(!produtoParaExcluir) return
                
                await deleteProduct(String(produtoParaExcluir.id))
                setProduct(prev => prev.filter(p=> p.id !== produtoParaExcluir.id))
                toast("produto deletado com sucesso")
                setProdutoParaExcluir(null)

            }catch(err){    
                console.log(err)
                toast("Error ao excluir produto")
            }
                
        }

    if (loading) {
        return (
        <Loading>
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Carregando produto...</p>
            </div>
        </Loading>
        )}

    return (
        <>
        {filter.length ? (
            filter.map((p) => (
            <ListProductStyled key={p.id}>
                <div className="informaçoes">

                    <div className="inforDados">
                        <img src={p.image_url} alt={p.nome} />
                        <h3>{p.nome}</h3>
                        {(p.variacoes ?? []).map((v, index) => (
                        <div key={index} className="variaçoes">
                            <p>Tamanhos:  {v.tamanho}</p>
                            <p>Preço: {v.preco}</p>
                        </div>
                        ))}
                    </div>

                    <div className="btns">
                        <Button onClick={()=> navigate(`/admin/${p.id}`)} className="editar">Editar <i className="fa-solid fa-pencil"></i></Button>
                        <Button className="excluir" onClick={()=> {setProdutoParaExcluir(p)}}>Excluir <i className="fa-solid fa-trash"></i></Button>
                    </div>

                </div>

                {produtoParaExcluir?.id === p.id && (
                    <div className="overlayModal">
                        <div className="modalDeConfirmacao">
                            <h2>Você está excluindo o produto <span>{p.nome}</span></h2>

                        <div className="modalButtons">
                        <Button className="btnDanger" onClick={excluirProduto}>
                            Confirmar exclusão
                        </Button>
                        <Button 
                            className="btnCancel" 
                            onClick={() => setProdutoParaExcluir(null)}>
                            Cancelar
                        </Button>
                        </div>
                        </div>
                    </div>
                )}
            </ListProductStyled>
            ))
        ) : (
            <p>Nenhum produto cadastrado</p>
        )}

        </>

        
    );
}

export default ListaDeProdutos;
