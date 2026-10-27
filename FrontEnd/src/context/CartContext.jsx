import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) { /* componente responsável por guardar o estado e disponibilizá-lo aos outros componentes. */
    const [items, setItems] = useState([]);

    function addToCart(product, restaurant) { /* definem como esses dados mudam. No caso soma um a um */
        console.log("Adicionando ao carrinho:", product, restaurant);
        const id = `${restaurant.id}-${product.name}`;

        setItems((listaAtual) => {
            const existing = listaAtual.find(
                (item) => item.id === id
            );
            if (existing) {
                return listaAtual.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [
                ...listaAtual,
                {
                    id,
                    name: product.name,
                    description: product.description,
                    value: product.value,
                    image: product.image,
                    quantity: 1,
                    restaurantId: restaurant.id,
                    restaurantName: restaurant.name
                },
            ];
        });
    }

    function changeQuantity(id, change) {/* definem como esses dados mudam. No caso muda uma quantidade */
            setItems((listaAtual) =>
                listaAtual
                    .map((item) =>
                        item.id === id
                            ? {
                                ...item, quantity: item.quantity + change,
                            }
                            : item
                    )
                    .filter((item) => item.quantity > 0)
            )
        }

    const totalItems = items.reduce(
        (soma, item) => soma + item.quantity,
        0
    );


    const totalValue = items.reduce(
        (soma, item) => soma + item.value * item.quantity,
        0
    );

    return ( /* CartCotext.Provider disponibiliza os dados e as funções para outros componentes. */
        <CartContext.Provider value={{ items, addToCart, changeQuantity, totalItems, totalValue }}> 
            {children}
        </CartContext.Provider>
    )
}

export function useCart() { /* acessa os dados de dentro de um componente React. */
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart deve ser usado dentro de CartProvider");
    }
    return context;
}