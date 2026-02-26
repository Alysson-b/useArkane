import Button from "../common/Button"
import { useCart } from "../../contexts/provider_car/useCart"
import { Product } from "../../types/product"

type Props = {
    product: Product
}

export default function ProductCard({ product }: Props) {
    const { addItem } = useCart()

    return (
        <div>
            <img src={product.image_url} alt={product.nome} />
            <h3>{product.nome}</h3>
            <p>R$ {product.variacoes[0].preco}</p>
            <Button 
                onClick={() => addItem(product)}
            >
                Adicionar ao Carrinho
            </Button>
        </div>
    )
}