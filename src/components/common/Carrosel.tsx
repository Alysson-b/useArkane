import { useEffect, useState } from "react"
import { CardCarroselStyled, Section } from "./Styled.Global"
import colection from "../../../public/assets/colection.png"
import colection3 from "../../../public/assets/colection3.png"

const Carrosel = ({}) =>{
    const carroselImgs = [colection, colection3]
    const [indexAtual, setIndexAtual]= useState(0)
    

    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setIndexAtual((prevIndex)=> (prevIndex + 1) % carroselImgs.length)
        }, 3000)
        return () => clearInterval(intervalo)

    },[carroselImgs.length])
    return (
        <>
            <CardCarroselStyled>
            <div className="carrosel">
                {carroselImgs.map((img, index)=>(
                    <img key={index} src={img} alt={`Slide ${index + 1}`} className={index === indexAtual ? "active" : ""} />

                ))}
                <div className="indicators">
                    {carroselImgs.map((_, index) => (
                        <span
                        key={index}
                        className={index === indexAtual ? "not active" : "not"}
                        onClick={() => setIndexAtual(index)}
                        ></span>
                    ))}
                </div>
            </div>
                <Section>
                    <p> <i className="fa-brands fa-pix"></i> Desconto no PIX</p>
                    <p> <i className="fa-solid fa-truck-fast"></i> Frete grátis acima de R$149</p>
                </Section>
            </CardCarroselStyled>
        </>
    )
}

export default Carrosel