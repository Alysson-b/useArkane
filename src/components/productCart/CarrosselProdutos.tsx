import { useEffect, useRef, useState } from "react"
import { Product } from "../../types/product"
import { useNavigate } from "react-router-dom"
import { CardsProducts, CardProducts } from "./style"
import { api } from "../../services/api"
import Button from "../common/Button"

type Props = {
    title: string
    categoria?: string
    }

    export function CarrosselProdutos({ title, categoria }: Props) {
    const [produtos, setProdutos] = useState<Product[]>([])
    const navigate = useNavigate()
    const scrollRef = useRef<any>(null)
    const movendo =  useRef(false)
    const start = useRef(0)
    const mousePocisao = useRef(0)
    const [hoverId, setHoverId] = useState<string | null>(null)

    function handleMouse(e: any){
        
        movendo.current = true

        start.current = e.clientX 
        mousePocisao.current = scrollRef.current.scrollLeft
    }

    function moverMouse(e: any){
        if(!movendo.current) return

        e.preventDefault();
        
        const moveu = e.clientX - start.current
        scrollRef.current.scrollLeft = mousePocisao.current - moveu
    }

    function handleMouseUp(){
        movendo.current = false
    }
    function handleMouseLeave(){
        movendo.current = false
    }

    function scrollLeft() {
        scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }

    function scrollRight() {
        scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }

    useEffect(() => {
        async function carregar() {
        const response = await api.get("/api/produtos", {
            params: {
            limit: 8,
            categoria
            }
        })

        setProdutos(response.data.data)
        }

        carregar()
    }, [categoria])

    return (
        <div className="PREV">
            <div className="titles">
                <h1>{title}</h1>
                <p onClick={()=> {
                    if(categoria){
                        navigate(`/produtos/${categoria}`)
                    }else{
                        navigate("/produtos")
                    }
                }}>ver tudo</p>
            </div>

            <CardsProducts id="produtos-container" ref={scrollRef}
                        onMouseDown={handleMouse}
                        onMouseMove={moverMouse}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}>
            <Button onClick={scrollLeft} id="scrollRight" children={<i className="fa-solid fa-angle-left"></i>}></Button>
                {produtos.map(prod => {
                const preco = prod.variacoes?.[0]?.preco
                const precoNumero = preco ? parseFloat(preco) : 0

                return (
                    <CardProducts
                    key={prod.id}
                    onClick={() => navigate(`/produto/${prod.id}`)}
                    onMouseEnter={()=> setHoverId(prod.id)}
                    onMouseLeave={()=> setHoverId(null)}
                    >
                    <img draggable={false} src={hoverId === prod.id ? prod.imagen_back_url : prod.image_url} alt={prod.nome} />
                    <h3>{preco ? `R$ ${Number(preco).toFixed(2)}` : "Indisponível"}</h3>
                    <p>Em até 2x {(precoNumero / 2).toFixed(2)}</p>
                    </CardProducts>
                )
                })}
            <Button onClick={scrollRight}  id="scrollLeft" children={<i className="fa-solid fa-angle-right"></i>}></Button>
            </CardsProducts>
        </div>
    )
    }