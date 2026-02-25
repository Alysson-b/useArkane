import React, { useEffect, useState } from "react";
import Input from "./Input";
import { ContainerAdmin } from "./Styled.Global";
import Button from "./Button";
import { toast } from "react-toastify";
import { getProductsId, postProducts, updateProducts } from "../../services/product.service";
import { VariacaoProduto } from "../../types/product";
import { useParams } from "react-router-dom";

function ModalAdmin() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estoque, setEstoque] = useState<string>("");
    const [carregar, setCarregar] = useState(false);
    const [tamanho, setTamanho] = useState<string>("");
    const [cor, setCor] = useState<string>("");
    const [variacoes, setVariacoes] = useState<VariacaoProduto[]>([]);
    const { id } = useParams<{ id: string }>();
    const [variacaoSelect, setVariacaoSelect] = useState<VariacaoProduto | null>(null);
    const [minimodal, setMinimodal] = useState(false);

    async function cadastrarProduto(e: React.FormEvent) {
        e.preventDefault();

        try {
        if (variacoes.length === 0) {
            toast.error("Adicione pelo menos uma variação");
            return;
        }

        setCarregar(true);

        await postProducts({
            nome,
            descricao,
            image_url: imageUrl,
            categoria,
            variacoes,
        });

        if (!nome || !descricao || !categoria || !imageUrl) {
            toast.error("Preencha todos os campos do produto");
            return;
        }
        toast("Produto Cadastrado com sucesso");

        setNome("");
        setDescricao("");
        setImageUrl("");
        setCategoria("");
        setVariacoes([]);
        setPreco("");
        setEstoque("");
        setCor("");
        setTamanho("");

        } catch (err: any) {
            toast.error(err?.response?.data?.message || "Erro ao cadastrar Produto");
        } finally {
            setCarregar(false);
        }
    }


    function adicionarVariacoes() {
        if (!tamanho || !cor || !preco || !estoque) {
        toast.error("Preencha todos os campos da variação");
        return;
        }

        const existe = variacoes.some(
        (v) => v.tamanho === tamanho && v.cor === cor,
        );

        if (existe) {
        toast.error("Essa variação já foi adicionada");
        return;
        }
        const novaVariante = {
        tempId: Date.now(),
        tamanho,
        cor,
        preco: preco,
        estoque: Number(estoque),
        };
        setVariacoes((prev) => [...prev, novaVariante]);
    }

    useEffect(() => {
        async function carregarDadosDoProduto() {
        try {
            if (!id) return;

            const data = await getProductsId(id);
            setNome(data.nome);
            setDescricao(data.descricao);
            setCategoria(data.categoria);
            setImageUrl(data.image_url);
            setVariacoes(data.variacao || []);
            console.log("STATE variacoes:", data.variacao);
        } catch (err) {
            toast.error("Error ao carregar produto");
        }
        }

        carregarDadosDoProduto();
    }, [id]);

    function salvarAlteracoes(){
        if(!variacaoSelect) return

        const novaVariacoes = variacoes.map((v)=> {
            if(v.id && variacaoSelect.id){
                return v.id === variacaoSelect.id ? variacaoSelect : v
            }

            if(v.tempId && variacaoSelect.tempId){
                return v.tempId === variacaoSelect.tempId ? variacaoSelect : v
            }
            return v
    })

        setVariacoes(novaVariacoes)
        setMinimodal(false)
    }

    async function salvarProdutoEditado(e: React.FormEvent) {
        e.preventDefault()
        try{
            if(!id) return

            if (!nome || !descricao || !categoria || !imageUrl) {
            toast.error("Preencha todos os campos")
            return
        }

        if (variacoes.length === 0) {
            toast.error("Adicione pelo menos uma variação")
            return
        }
        
        setCarregar(true)
        const variacoesParaEnviar = variacoes.map(({ tempId, ...rest }) => rest)

        const produtoAtualizado = {
            nome,
            descricao,
            image_url: imageUrl,
            categoria,
            variacao: variacoesParaEnviar
        }
            await updateProducts(id, produtoAtualizado)

            toast("Produto atualizado com sucesso")
            
        }catch (err) {
            console.error(err)
            toast.error("Erro ao salvar os novos dados")
        } finally {
            setCarregar(false)
            setNome("");
            setDescricao("");
            setImageUrl("");
            setCategoria("");
            setVariacoes([]);
            

        }


    }

    return (
        <>
        <ContainerAdmin>
            <form onSubmit={id ? salvarProdutoEditado :  cadastrarProduto} >
            <div className="addProdutos">
                <Input
                value={nome}
                id="nome"
                name="nome"
                placeholder="Digite o nome do produto"
                onChange={(e) => setNome(e.target.value)}
                />
                <textarea
                name="descricao"
                id="descricao"
                value={descricao}
                placeholder="Digite a descricao do produto"
                onChange={(e) => setDescricao(e.target.value)}
                ></textarea>
                <Input
                value={imageUrl}
                id="img"
                name="img"
                placeholder="Insira a url da imagem"
                onChange={(e) => setImageUrl(e.target.value)}
                />
                <select
                name="categoria"
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                >
                <option value="">Selecione uma categoria</option>
                <option value="masculina">Masculina</option>
                <option value="feminina">Feminina</option>
                </select>

                <select
                name="tamanho"
                id="tamanho"
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
                >
                <option value="">Selecione um Tamanho:</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
                </select>

                <select
                name="cor"
                id="cor"
                value={cor}
                onChange={(e) => setCor(e.target.value)}
                >
                <option value="">Selecione um cor:</option>
                <option value="preto">preto</option>
                <option value="branco">branco</option>
                <option value="azul">azul</option>
                <option value="vermelho">vermelho</option>
                <option value="vinho">vinho</option>
                <option value="cinza">cinza</option>
                </select>

                <Input
                value={preco}
                id="preco"
                name="preco"
                placeholder="Digite o preco do produto"
                onChange={(e) => setPreco(e.target.value)}
                />
                <Input
                value={estoque}
                className="estoque"
                id="estoque"
                name="estoque"
                placeholder="Digite a estoque do produto"
                type="number"
                onChange={(e) => setEstoque(e.target.value)}
                />
                <Button
                disabled={!tamanho || !cor || !preco || !estoque}
                type="button"
                id="btnVariaçao"
                children={"adicione Especificações"}
                onClick={adicionarVariacoes}
                />
            </div>
            <Button disabled={carregar} type="submit">
                {carregar
                ? "Salvando..."
                : id
                    ? "Atualizar produto"
                    : "Cadastrar Produto"}
            </Button>
            </form>


            <div className="preview">
                    {imageUrl && <img src={imageUrl} alt="Preview" />}
                
                
            {variacoes?.map((v) => (
        
                <div key={v.id ?? v.tempId} className="variacao-card">
                    <span>
                        <strong>Tamanho:</strong> {v.tamanho}
                    </span>
                    <span>
                        <strong>Cor:</strong> {v.cor}
                    </span>
                    <span>
                        <strong>Preço:</strong> R$ {v.preco}
                    </span>
                    <span>
                        <strong>Estoque:</strong> {v.estoque}
                    </span>

                    <Button
                        children={"Editar"}
                        onClick={() => {
                            setVariacaoSelect(v);
                            setMinimodal(true);
                        }}
                    />
                </div>
            ))}
            </div>

            {minimodal && variacaoSelect && (
            <div className="miniModal">
                <h2>Editar variaçoes</h2>

                <select
                    name="tamanho"
                    id="tamanho"
                    value={variacaoSelect.tamanho}
                    onChange={(e) =>
                    setVariacaoSelect({
                    ...variacaoSelect,
                    tamanho: e.target.value.toUpperCase(),
                    })
                }
                    >
                    <option value="">Selecione um Tamanho:</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                </select>

                <select
                name="cor"
                id="cor"
                value={variacaoSelect.cor}
                onChange={(e) =>
                    setVariacaoSelect
                    ({ ...variacaoSelect, cor: e.target.value })
                }
                >
                <option value="">Selecione um cor:</option>
                <option value="preto">preto</option>
                <option value="branco">branco</option>
                <option value="azul">azul</option>
                <option value="vermelho">vermelho</option>
                <option value="vinho">vinho</option>
                <option value="cinza">cinza</option>
                </select>

                <Input
                id={"preco"}
                value={variacaoSelect.preco}
                onChange={(e) =>
                    setVariacaoSelect({ ...variacaoSelect, preco: e.target.value })
                }
                />

                <Input
                id={"estoque"}
                value={variacaoSelect.estoque}
                onChange={(e) =>
                    setVariacaoSelect({
                    ...variacaoSelect,
                    estoque: Number(e.target.value),
                    })
                }
                />

                <Button onClick={salvarAlteracoes} children={"Salvar"}/>
                <Button onClick={()=> setMinimodal(false)} children={"Cancelar"}/>
            </div>
            )}
        </ContainerAdmin>
        </>
    );
}

export default ModalAdmin;
