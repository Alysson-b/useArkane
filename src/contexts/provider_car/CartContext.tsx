import { createContext, ReactNode, useState } from "react";
import { Product } from "../../types/product";

interface CartItem {
  product: Product;
  quantidade: number;
  tamanho?: string;
  cor?: string;
}

interface CartContextProps {
  items: CartItem[];
  totalItems: number
  addItem: (
    product: Product,
    tamanho?: string,
    cor?: string,
    quantidade?: number,
  ) => void;
  removeItem: (produtoId: string, tamanho?: string, cor?: string) => void;
  diminuirQuantidade: (
    produtoId: string,
    tamanho?: string,
    cor?: string,
  ) => void;
  limparCart: () => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const totalItems = items.reduce(
        (total, item) => total + item.quantidade, 0
    )
  function addItem(
    product: Product,
    tamanho?: string,
    cor?: string,
    quantidade: number = 1,
  ) {
    const _tamanho = tamanho;
    const _cor = cor;
    const _quantidade = quantidade;
    const _product = product;

    setItems((prev) => {
      console.log("items atual", items);
      const exists = prev.find(
        (p) =>
          p.product.id === _product.id && 
          p.tamanho === _tamanho && 
          p.cor === _cor,
      );
      if (exists) {
        return prev.map((p) =>
          p.product.id === _product.id && 
          p.tamanho === _tamanho && 
          p.cor === _cor
            ? { ...p, quantidade: p.quantidade + _quantidade }
            : p,
        );
      }
      return [...prev, { product: _product, quantidade: _quantidade, tamanho: _tamanho, cor: _cor }];
    });
  }


  function diminuirQuantidade(
    produtoId: string,
    tamanho?: string,
    cor?: string,
  ) {
    setItems((prev) => {
      console.log("Recebido:", produtoId, tamanho, cor);
      console.log("Carrinho:", prev);

      return prev
        .map((item) => {
          console.log(
            "Comparando com:",
            item.product.id,
            item.tamanho,
            item.cor,
          );

          if (
            item.product.id === produtoId &&
            item.tamanho === tamanho &&
            item.cor === cor
          ) {
            return { ...item, quantidade: item.quantidade - 1 };
          }

          return item;
        })
        .filter((item) => item.quantidade > 0);
    });
  }

  function removeItem(produtoId: string, tamanho?: string, cor?: string) {
    setItems((prev) => prev.filter((p) => 
      !(p.product.id === produtoId && 
        p.tamanho === tamanho &&
        p.cor === cor
      )
  )
);
  }

  function limparCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        diminuirQuantidade,
        limparCart,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
