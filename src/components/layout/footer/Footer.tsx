import { Footer, Contatos, Informaçoes, Cartao, Redes, Diretriz } from "./style";
import visa from "../../../../public/assets/visa.png"
import master from "../../../../public/assets/master.png"
import pix from "../../../../public/assets/pix.png"
import { useNavigate } from "react-router-dom";



function FooterSection(){

    const navigate = useNavigate()
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
                <p onClick={()=> navigate("/cadastro")}>Meus pedidos</p>
                <p onClick={()=> navigate("/envio")}>Politica de envio</p>
                <p onClick={()=> navigate("/troca")}> Troca e Devoluçao</p>
                
            <div>
                <br />
                <h3>PRECISA DE AJUDA?</h3>
                <br />
                <p onClick={()=> navigate("/termo")}>Termos de uso</p>
                <p onClick={()=> navigate("/privacidade")}>Polita de Privacidade</p>
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

        </>
    )
}
export default FooterSection;