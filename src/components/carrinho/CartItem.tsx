
import { CartContainer, CartItem } from "./style"
import { useCart } from "../../contexts/provider_car/useCart"
import Pagamentos from "./Pagamentos"


function CartPage() {
    const { items, addItem, removeItem, diminuirQuantidade } = useCart()
    const aumentarQuantidade = (productId: string, tamanho?: string, cor?: string) => {
        const item = items.find(i => 
            i.product.id === productId &&
            i.tamanho === tamanho &&
            i.cor === cor)
        if (item) {
            addItem(item.product, item.tamanho , item.cor)
        }
        console.log("retorno do item ", item)
    }

    return (
        <>
            <CartContainer>
                

                <div className="containerCart">
                    {items.length === 0 ? (
                        <div className="carrinhoVazio">
                            <p>Seu carrinho está vazio!</p>
                            <i className="fa-solid fa-cart-plus"></i>
                        </div>
                    ) : (
                        <>
                            {items.map((item) => (
                                <CartItem key={item.product.id}>
                                <div className="inforCart">

                                    <img 
                                        src={item.product.image_url} 
                                        alt={item.product.nome} 
                                        />

                                    <div className="descDiv">
                                        <h3>{item.product.nome}</h3>
                                        <p>Tamanho: {item.tamanho}</p>
                                        <br />
                                        <p>cor: {item.cor}</p>
                                        <br />
                                        <br />

                                        <div className="quantidade">
                                            {item.quantidade > 1 ? (
                                                <button onClick={() => diminuirQuantidade(item.product.id, item.tamanho, item.cor)}>-</button>
                                            ) : (
                                                <button onClick={() => removeItem(item.product.id, item.tamanho, item.cor)}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            )}
                                            <input type="text" value={item.quantidade} readOnly />
                                            <button onClick={() => aumentarQuantidade(item.product.id, item.tamanho, item.cor)}>+</button>
                                        </div>
                                    </div>
                                </div>

                                    <div className="valorPag">
                                        <h3 className="precoTotal">R$ {(Number(item.product.variacoes[0].preco) * item.quantidade).toFixed(2)}</h3>
                                        <br />
                                        <p>R$ {(Number(item.product.variacoes[0].preco) * item.quantidade * 0.95).toFixed(2)} No PIX ( -5% )</p>
                                    </div>
                                </CartItem>
                            ))}
                        </>
                    )}
                </div>
                <Pagamentos/>
            </CartContainer>

        </>
    )
}

export default CartPage



