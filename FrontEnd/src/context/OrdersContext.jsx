import { createContext, useContext, useState } from "react";

const OrdersContext = createContext(null);

export function OrdersProvider({ children }) {
    const [ orders, setOrders ] = useState([]); /* orders = guarrda a lista de pedidos */
                                                /* useOrders permite acessar essas infos de outros componentes. */
    function addOrders( order ) { /* permite add um novo pedido a lista */
        setOrders(listaAtual => [
            ...listaAtual, 
            order
        ])
    } 

    return (
        <OrdersContext.Provider value={{ orders, addOrders }}>
            {children}
        </OrdersContext.Provider>
    )
    
}

export function useOrders() {
    const context = useContext(OrdersContext);

    if(!context) {
    throw new Error("useOrders deve ser usado dentro do Orders Provider")
    }
    return context;
}