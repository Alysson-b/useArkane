import { useState } from "react";
import { DadosCompra } from "./style";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/provider_car/useCart";
import { toast } from "react-toastify";
import front_card from "../../../public/assets/frontCard.png"
import back_card from "../../../public/assets/back_card.png"
import Button from "../common/Button";
import { DadosCep } from "../../types/product";
import { getPerfilCompleto, pedidoUsuario } from "../../services/usuarios.services";
import LoginModal from "../common/Modal";
import { gerarQrCode } from "../../services/pagamento.service";




function Pagamentos() {
    const navigate = useNavigate();
    const [view, setView] = useState("resumo");
    const [metodo, setMetodo] = useState("pix")
    const [numeroCard, setNumeroCard] =useState("")
    const [nomeCard, setNomeCard] =useState("")
    const [validCard, setValidCard] =useState("")
    const [cvcCard, setCvvCard] =useState("")
    const [flipCard, setFlipCard] = useState(false)
    const [dadosCep, setDadosCep] = useState<DadosCep>()
    const [pesquisarCep, setPesquisarCep] =useState("")
    const [msgFrte, setMsgFrete] = useState("")
    const [qrCode, setQrCode] = useState("")
    const [qrCodeBase64, setQrCodeBase64] = useState("")
    
    
    
    const { items } = useCart();
    
    const formatarNumero = (value: string) => {
        const digits = value.replace(/\D/g, "").slice(0, 16);
        return digits.replace(/(.{4})/g, "$1 ").trim();
    };

    const formatarValidade = (value: string) => {
        const digits = value.replace(/\D/g, "").slice(0, 4);
        if (digits.length >= 3) return digits.slice(0, 2) + " / " + digits.slice(2);
        return digits;
    };

    const calcularTotal = () => {
        return items.reduce((total, item) => {
            const variacao = item.product.variacoes.find(
                (v) => v.tamanho === item.tamanho && v.cor === item.cor,
            );
            
            const preco = variacao?.preco ?? 0;
            
            return total + Number(preco) * item.quantidade;
        }, 0);
    };

    const total = calcularTotal()
    const pix = calcularTotal() * 0.95

    async function verificarUsuario(){
        const usuarioLogado = localStorage.getItem("token");
        
        if(!usuarioLogado){
            LoginModal
            toast.error("Voçe precisa loga-se para Finalizar o Pedido !!", {position: "top-right", className: "toast-message"})
            return;
        }
        const perfilVerificado = await getPerfilCompleto()
        if(perfilVerificado?.perfilCompleto){
            setView("pagamento")
            return
        }else{
            toast("complete seu cadastro")
            navigate("/cadastro")

        }
    }

    async function calcularFrete() {
        try{
            const response = await fetch(`http://viacep.com.br/ws/${pesquisarCep}/json/`)
            if(!response.ok){
                throw new Error('Error na requisiçao: ' + response.status)
            }
            const data = await response.json()

            if(data.erro){
                throw new Error("CEP não encontrado")
            }

            console.log(data)
            setDadosCep(data)
            setMsgFrete("Sistema de Entrega Temporariamente Fora do ar")
            
        }catch(err){
            console.log(err)
            toast("Endereço nao encontrado")
        }
    }
    

    async function finalizarCompra() {
        try {
            const itens = items.map(item => {
            const variacao = item.product.variacoes?.[0]

            if (!variacao) {
                throw new Error("Produto sem variação")
            }

            return {
                variacao_id: variacao.id,
                quantidade: item.quantidade
                }
        })

        await pedidoUsuario({ itens })

        } catch (err) {
            console.log(err)
        }
}


    async function gerarPix() {
        try{
            const data = await gerarQrCode({
                valor: pix,
                descricao: "Compra Arkane",
                email: "test@test.com"
            })

            setQrCode(data.qr_code)
            setQrCodeBase64(data.qr_code_base64)
            console.log(data)
        }catch(error: any){
            console.log(error)
            toast.error("Error ao gerar PIX")
        }
    }

    return (
        <>
        
                {view === "resumo" && (
                    <div className="precoTotal">
            <div className="title">
                <h3>
                <i className="fa-solid fa-list-check"></i> Resumo
                </h3>
            </div>

            <div className="valores">
                <div className="valorTotal">
                <h4>Valor dos produtos: </h4>
                <p className="price">R$ {calcularTotal().toFixed(2)}</p>
                </div>

                <div className="valorParcela">
                <h4>Total a prazo: </h4>
                <div>
                    <p>R$ {total.toFixed(2)}</p>
                    <p>(em até 10x de R$ sem juros)</p>
                </div>
                </div>

                <div className="valorPix">
                <div>
                    <h4>Valor a vista: </h4>
                    <h4 className="pix">Pix:</h4>
                </div>
                <div className="divPix">
                    <p>R$ {(total * 0.98).toFixed(2)}</p>
                    <p className="desconto">R$ {pix.toFixed(2)}</p>
                </div>
                </div>
            </div>

            <div className="frete">
                <label htmlFor="cep">
                <i className="fa-solid fa-truck-fast"></i> Calcular frete e prazo
                </label>
                <div className="cep">
                <input
                    onChange={(e)=> setPesquisarCep(e.target.value)}
                    type="tel"
                    id="cep"
                    placeholder="Digite seu CEP"
                    maxLength={9}
                    />
                <Button onClick={()=> calcularFrete()}>OK</Button>
                </div>

                {dadosCep && (
                    <div className="dados">
                        <p className="cliente">
                            <strong>{dadosCep.logradouro} - {dadosCep.localidade} / {dadosCep.uf}</strong>
                        </p>
                        <br />
                        <p>
                            <strong>{msgFrte}</strong>
                        </p>
                    </div>
                )

                }
            </div>

            <div className="btns">
                <button onClick={() => navigate("/")}>Continuar Comprando</button>
                <button id="finalizar" onClick={()=> {
                    verificarUsuario()
                    finalizarCompra()
                }
                    }>Finalizar pedido</button>
            </div>
            </div>
        )}

        {view === "pagamento" && (
            <DadosCompra className="cardPagamento">
            <i
                onClick={() => setView("resumo")}
                className="fa-solid fa-backward-fast"
                ></i>
            <h2> Forma de Pagamento </h2>

            <div className="pagamentoPix" onClick={() => {
                setMetodo("pix") 
                gerarPix()
            }}>

                <p>PIX</p>
                <i className="fa-brands fa-pix"></i>
            </div>

            <div className="pagamentoBoleto"  onClick={() => setMetodo("boleto")}>
                <p>Boleto</p>
                <i className="fa-solid fa-ticket"></i>
            </div>

            <div className="pagamentoCredito"  onClick={() => setMetodo("credito")}>
                <p>Cartão de credito</p>
                <i className="fa-solid fa-credit-card"></i>
            </div>

            {metodo === "pix" && (
                <div className="containerPix">
                    <h3>Escaneie o Qr Code!</h3>
                    <p>Valor: {pix.toFixed(2)}</p>

                    {qrCodeBase64 && (
                        <img src={`data:image/png;base64,${qrCodeBase64}`} alt="QR Code PIX" />
                    )}

                    {qrCode && (
                        <>
                            <textarea value={qrCode} readOnly />

                            <button onClick={()=>{navigator.clipboard.writeText(qrCode)
                                toast.success("Código PIX copiado!")
                            }}>Copiar código PIX</button>
                        </>
                    )}
                </div>
            )}

            {metodo === "boleto" && (
                
                <div className="containerBoleto">
                    <h3>Boleto Emitido!</h3>
                </div>

            )}
        
            {metodo === "credito" && (
                
                <div className="containerCredito">
                        <div className="inputs">
                    <input
                        type="text"
                        maxLength={19}
                        value={numeroCard}
                        placeholder="Número do cartão"
                        onChange={(e)=> setNumeroCard(formatarNumero(e.target.value))}
                        />
                    <input type="text" placeholder="Nome impresso no cartão" 
                    onChange={(e)=> setNomeCard(e.target.value)} />

                    <div className="validade">
                        <input value={validCard} type="text" placeholder="Validade" 
                        onChange={(e)=> {
                            const formatacao = formatarValidade(e.target.value)
                            setValidCard(formatacao)
                            if(formatacao.length === 7) setFlipCard(true)
                            }}/>

                        <input maxLength={3} className="cvv" type="number" placeholder="CVV" 
                        onChange={(e)=> {
                            const val = e.target.value.replace(/\D/g, "").slice(0, 3);
                            setCvvCard(val)
                            if(val.length >= 3) setTimeout(()=> setFlipCard(false))
                            }}/>
                    </div>
                    
                    <button type="submit">PAGAR</button>


                    <div className="containerImg">
                        <div className="imagemCartao" style={{transform: flipCard ? "rotateY(180deg)" : "rotateY(0deg)"}}>

                            <div className="frontCard">
                                <img src={front_card} alt="Frente do cartao" />
                                
                                <div className="dadosFront">
                                    <p className="numeroCartao">{numeroCard}</p>
                                    <div className="dados">
                                        <h2 className="nomeCartao">{nomeCard}</h2>
                                        <p className="validade">{validCard}</p>

                                    </div>

                                </div>
                            </div>

                            <div className="backCard">
                                <img src={back_card} alt="Verso do cartao" />
                                <div className="dadosBack">
                                    <p className="cvv">{cvcCard}</p>

                                </div>
                            </div>

                        </div>
                    </div>

                    </div>
                </div>
            )}
            </DadosCompra>
        )}
        </>
    );
}

export default Pagamentos;
