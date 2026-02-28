import { Footer, Contatos, Informaçoes, Cartao, Redes, Diretriz, CardModal, Overlay } from "./style";
import visa from "../../../../public/assets/visa.png"
import master from "../../../../public/assets/master.png"
import pix from "../../../../public/assets/pix.png"
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
        <Footer>
            <div>
                <h3>FIQUE POR DENTRO DAS NOVIDADES!</h3>
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
                
            <div>
                <h3>FORMAS DE PAGAMENTO</h3>
                <br />
        <Cartao>
            
                <img src={visa} alt="logo nubank" />
                <img src={master} alt=" logo mastercard" />
                <img src={pix} className="imagemPix" alt="logo visa" />
            
        </Cartao>
            </div>
        
        </Informaçoes>

            <Diretriz>
            <p>© 2026 useArkane®. Todos os direitos reservados.</p> 
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