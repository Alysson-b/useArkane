import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/provider_car/useCart";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import {  getProductsId } from "../../services/product.service";
import {
  ContainerError,
  InforItems,
  ItemImage,
  ItemsCarrinho,
  Loading,
} from "./style";
import { toast } from "react-toastify";
import AvaliacoesModal from "../../components/common/AvaliacoesModal";

export default function DetalhesProduto() {
    const { id } = useParams<{ id: string }>();
    const { addItem } = useCart();
    const navigate = useNavigate();

    const [produto, setProduto] = useState<Product | null>(null);
    const [quantidade, setQuantidade] = useState(1);
    const [tamanho, setTamanho] = useState("");
    const [cor, setCor] = useState("");
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false)
    
    const [imagenAtiva, setImagenAtiva] = useState<string | undefined>(undefined)

    
    useEffect(() => {
        if (!id) return;

        async function buscarProdutos() {
            try{
                setLoading(true);
                const response = await getProductsId(id!)
                setProduto(response)
            }catch(err){
                console.error("Erro ao carregar produto:", err);
                setProduto(null)

            } finally{
                setLoading(false)
            }
        }
        buscarProdutos()
    }, [id]);

    function adicionarAoCarrinho() {
        if (!produto) return;

        if (!tamanho) {
        toast("Selecione um Tamanho");
        }
        if (!cor) {
        toast("Selecione uma Cor");
        }

        addItem(produto, tamanho, cor, quantidade);
        toast(`${produto.nome} adicionado ao carrinho!`);
    }

    function aumentarQuantidade() {
        if(quantidade < estoqueAtual){
            setQuantidade((prev) => prev + 1);
        }else{
            toast("limite maxímo do produto atingido")
        }
    }

    function diminuirQuantidade() {
        if (quantidade > 1) {
        setQuantidade((prev) => prev - 1);
        }
    }

    const coresDisponiveis = tamanho
        ? produto?.variacoes.filter((v) => v.tamanho === tamanho).map((v) => v.cor)
        : produto?.variacoes.map((v) => v.cor);

    const variacaoSelecionada = produto?.variacoes.find(
        v => v.tamanho === tamanho && v.cor === cor
        )

    const estoqueAtual = Number(variacaoSelecionada?.estoque ?? 0)

    useEffect(()=>{
        if(produto?.image_url){
            setImagenAtiva(produto.image_url)
        }
    },[produto])
    const visualizarImagen = (ativa: string)=>{
        if(ativa == "frente"){
            setImagenAtiva(produto?.image_url)
        }else{
            setImagenAtiva(produto?.imagen_back_url)
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
        );
    }

    if (!produto) {
        return (
        <ContainerError>
            <div className="erro-container">
            <div className="erro-card">
                <span className="erro-icon">😕</span>
                <h1>Produto não encontrado</h1>
                <button onClick={() => navigate("/")}>Voltar para a Home</button>
            </div>
            </div>
        </ContainerError>
        );
    }
    return (
        <ItemsCarrinho>
        <div className="fotos">
            <div className="imgmin">
                <img className={`${imagenAtiva === "frente" ? "ativa" : ""}`} onClick={()=> visualizarImagen("frente")} src={produto.image_url} alt={produto.nome} />
                <img className={`${imagenAtiva === "frente" ? "ativa" : ""}`} onClick={()=> visualizarImagen("costa")} src={produto.imagen_back_url} alt={produto.nome} />
            </div>
            <ItemImage>
                <img src={imagenAtiva} alt={produto.nome} />
            </ItemImage>
        </div>

        <InforItems>
            <div className="descriçao">
            <div>
                <h1>{produto.nome}</h1>
                <p>{produto.descricao}</p>
                <br />
                <br />

                <div className="descriçaoPreco">
                    <h3 className="preco">
                        R${" "}
                        {(Number(produto.variacoes[0].preco) * quantidade).toFixed(2)}
                    </h3>

                    {quantidade > 1 && (
                        <p className="preco">R$ {produto.variacoes[0].preco} cada</p>
                    )}
                    <p className="precoPix">
                        R${(parseFloat(produto.variacoes[0].preco) * quantidade * 0.95).toFixed(2)}{" "}
                        PIX (-5%)
                    </p>

                    {estoqueAtual > 0 && estoqueAtual < 5 && (
                        <div className={estoqueAtual === 1 ? "warningLast" : "warning"} >
                            <p>{estoqueAtual === 1 ? "Última unidade" : "Últimas unidades"}</p>
                        </div>
                    )}

                    <a aria-disabled href="">
                        Detalhes de parcelamento
                    </a>
                </div>
            </div>

            <div className="tamanhos">
                <h3>Selecione um tamanho</h3>
                <ul className="tamanho">
                {[...new Set(produto.variacoes.map((v) => v.tamanho))].map(
                    (t) => (
                    <li
                        key={t}
                        className={tamanho === t ? "ativo" : ""}
                        onClick={() => setTamanho(t)}
                    >
                        {t}
                    </li>
                    ),
                )}
                </ul>
            </div>

            <div className="cor">
                <select value={cor} onChange={(e) => setCor(e.target.value)}>
                <option value="">Selecione uma cor</option>
                {[...new Set(coresDisponiveis)].map(c => (
                    <option key={c} value={c}>
                    {c}
                    </option>
                ))}
                </select>
            </div>

            <div className="quantidade">
                <button onClick={diminuirQuantidade} disabled={quantidade <= 1}>
                -{" "}
                </button>
                <input type="text" value={quantidade} readOnly />
                <button disabled={quantidade >= estoqueAtual} onClick={aumentarQuantidade}>+</button>
            </div>

            <div className="addBtn">
                <button
                className={`btn-comprar ${tamanho && cor ? "ativo" : ""}`}
                disabled={!tamanho || !cor}
                onClick={adicionarAoCarrinho}
                >
                Adicionar ao Carrinho
                </button>

                <button className="btn-voltar" onClick={() => navigate(-1)}>
                Voltar
                </button>
            </div>
            </div>

            <div>
                <button className="avaliarProduto" onClick={()=> setOpenModal(true)}>Avaliar Produto</button>
                {openModal && (
                    <AvaliacoesModal onClose={()=> setOpenModal(false)}/>
                )}
            </div>
        </InforItems>
        </ItemsCarrinho>
    );
}
