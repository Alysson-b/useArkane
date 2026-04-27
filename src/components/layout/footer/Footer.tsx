import { Footer, Contatos, Informaçoes, Cartao, Redes, Diretriz, CardModal, Overlay, AvaliaçoesStyled } from "./style";
import visa from "../../../../public/assets/visa.png"
import master from "../../../../public/assets/master.png"
import pix from "../../../../public/assets/pix.png"
import selo1 from "../../../../public/assets/selo google.png"
import selo2 from "../../../../public/assets/selo segurança.png"
import selo3 from "../../../../public/assets/selo ssl.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PoliticaTrocas } from "../../../pages/Devolucao/Devolucao";
import { PoliticaEnvio } from "../../../pages/frete/freteEntrega";
import { PoliticaPrivacidade } from "../../../pages/privacidade/Privacidade";
import { TermosUso } from "../../../pages/termoUso/TermoUso";
import Button from "../../common/Button";



function FooterSection(){

    const navigate = useNavigate()
    const [modalAtivo, setModalAtivo] = useState<string | null>(null)

    const fecharModal= ()=>{
        setModalAtivo(null)
    }
    useEffect(()=>{
        const Fecharmodal = (event: KeyboardEvent)=>{
            if(event.key === "Escape")
                fecharModal()
        }

        if(modalAtivo){
            window.addEventListener("keydown", Fecharmodal)

        }

        return ()=>{
            window.removeEventListener("keydown", Fecharmodal)
        }
    },[modalAtivo])

    return(
        <>
            <AvaliaçoesStyled>
                <div className="Title">
                    <h2>O QUE ESTAO FALANDO SOBRE NÓS</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="title">
                            <i className="fa-solid fa-user"></i>
                            <div className="stars">
                                <h2>Alisson barbosa</h2>
                                <i>⭐️⭐️⭐️⭐️⭐️</i>
                            </div>
                        </div>

                        <div className="comentario">
                            <p>“Qualidade absurda, tecido muito confortável,<br />
                                muito confrtavel e resistente e ainda por cima encaixa muito bem no corpo”
                            </p>
                        </div>
                    </div>
                </div>
            </AvaliaçoesStyled>
        <Footer>

            <div>
                <h3>GANHE 10% DE DESCONTO!</h3>
                <p>na sua primeira compra</p>
            </div>
                
        <Contatos>
            <input type="text" placeholder="Seu nome"/>
            <input type="email" placeholder="Digite seu e-mail"/>
            <button>INSCREVER-ME</button>
        </Contatos>

        
        </Footer>
        
        <Informaçoes>
                
            <div id="footer">
                <h3>INFORMAÇOES</h3>
                <br />
                <p onClick={()=> navigate("/cadastro")}>Meu perfil</p>
                <p onClick={()=> setModalAtivo("frete")}>Politica de envio</p>
                <p onClick={()=> setModalAtivo("devolucao")}> Troca e Devoluçao</p>
                
            <div>
                <br />
                <h3>PRECISA DE AJUDA?</h3>
                <br />
                <p onClick={()=> setModalAtivo("termo")}>Termos de uso</p>
                <p onClick={()=> setModalAtivo("privacidade")}>Polita de Privacidade</p>
            </div>
            </div>
                
            <div>
                <h3>ATENDIMENTO</h3>
                <br />
                <p>Segunda a Sábado das 8h ás 18h</p>
                <p>WhatsApp: (85) 00000.0000</p>
                <p>atendimento@ficticio.com.br</p>
        <Redes>
            <h2>REDES SOCIAIS</h2>
            <div className="redeSocial">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/usearkane/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram">
                            </i>
                        </a>
        
                    </li>
                    <li>
                        <i className="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                        <a href="https://wa.me/5585996939576?text=Olá%20quero%20fazer%20meu%20Pedido" target="_blank"rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>

            </div>
    
        </Redes>
            </div>
                
            <div className="info-imgs">
                <h3>FORMAS DE PAGAMENTO</h3>
                <Cartao>
                    
                        <img src={visa} alt="logo nubank" />
                        <img className="master" src={master} alt=" logo mastercard" />
                        <img src={pix} className="imagemPix" alt="logo visa" />
                    
                </Cartao>
                <br />
                <div className="selos">
                    <h3>SEGURANÇA</h3>
                    <br />
                    <Cartao>
                        <img className="seloGoogle" src={selo1} alt="selo de segurança do google" />
                        <img className="seloSSL" src={selo3} alt="selo de segurança" />
                        <img className="seloSite" src={selo2} alt="selo de segurança" />
                    </Cartao>

                </div>
            </div>
        
        </Informaçoes>

            <Diretriz>
                <p>© 2026 useArkane®. Todos os direitos reservados. • Desenvolvido por <a target="_blanck" href="https://portifolio-2025-silk.vercel.app/">Alysson Barbosa</a></p>
                
            </Diretriz>

        
        {modalAtivo && (
            <Overlay onClick={fecharModal}>
                <CardModal onClick={(e)=> e.stopPropagation()}>
                    <Button id="close" onClick={fecharModal}>X</Button>

                    {modalAtivo === "frete" && <PoliticaEnvio/>}
                    {modalAtivo === "devolucao" && <PoliticaTrocas/>}
                    {modalAtivo === "termo" && <TermosUso/>}
                    {modalAtivo === "privacidade" && <PoliticaPrivacidade/>}
                </CardModal>
            </Overlay>
        )}
    


        



        </>
    )
}
export default FooterSection;