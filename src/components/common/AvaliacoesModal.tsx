import { useEffect, useState } from "react";
import { ErroAvaliacaoStyled, ModalAvaliaçoes, Overlay } from "./Styled.Global";
import { useAuth } from "../../contexts/auth/useAuth";
import { toast } from "react-toastify";
import { EnviarAvaliacao } from "../../services/product.service";
import Button from "./Button";
import { useParams } from "react-router-dom";

type Props = {
    onClose: ()=> void
}

function AvaliacoesModal({onClose}: Props){

    const [stars, setStars] = useState(0)
    const [hover, setHover] = useState(0)
    const [comentario, setComentario] = useState("")
    const {user, token} = useAuth()
    const logado = Boolean(token)
    const {id} = useParams()
    const produto_id = Number(id)
    
    

    
        async function enviarAvaliacao() {
            try{
                if(!comentario || !stars){
                    toast.error("Insira um comentario e estrelas")
                    return;
                }
                await EnviarAvaliacao({
                    comentario,
                    estrelas: stars,
                    produto_id
                })
                toast.success("Avaliação enviada!");
                setComentario("")
                setStars(0)
                setHover(0)
                onClose()

            }catch(err){
                console.log(err)
                toast.error("Erro ao enviar avaliação");
            }
        }

    useEffect(()=>{
            const fecharModal = (event: KeyboardEvent) =>{
                if(event.key === "Escape"){
                    onClose();
                    console.log(onClose)
                }
            }
            window.addEventListener("keydown", fecharModal)
            return ()=> window.removeEventListener("keydown", fecharModal)
        },[onClose])

    return (
        <>
        <Overlay onClick={onClose}>
            {logado ? (

                <ModalAvaliaçoes onClick={(e)=> e.stopPropagation()}>
                <div>
                    <h2>AVALIE SUA ULTIMA COMPRA! ​</h2>
                    
                </div>
                <div className="miniContainer">
                    <div className="user">
                        <div className="userIcon">    
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="nameStar">
                        <p>{user?.nome}</p>
                            <div className="stars">
                            {[1, 2, 3, 4, 5].map((star)=>(
                                <span key={star} onClick={()=> setStars(star)}
                                onMouseEnter={()=> setHover(star)}
                                onMouseLeave={()=> setHover(0)}> 
                                <i className={star <= (hover || stars) ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                </span>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <textarea placeholder="Escreva seu comentário" value={comentario} onChange={(e)=> setComentario(e.target.value)} maxLength={100} name="text" className="text" ></textarea>
                    </div>
                    <div>
                        <Button onClick={enviarAvaliacao} disabled={!comentario || !stars}>
                            Enviar
                        </Button>
                    </div>

                    <div className="CLOSE">
                        <button onClick={onClose}>X</button>
                    </div>
                </div>
                    
                        
                
                
            </ModalAvaliaçoes>
        ): 
        (
            <ErroAvaliacaoStyled onClick={(e)=> e.stopPropagation()}>
                <p>Voçê precisa estar logado para avaliar! </p>
                <div className="CLOSE">
                    <button onClick={onClose}>X</button>
                </div>
            </ErroAvaliacaoStyled>
        )}
        </Overlay>
        </>
    )
}


export default AvaliacoesModal