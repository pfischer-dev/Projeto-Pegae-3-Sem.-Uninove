import { useOrders } from "../../context/OrdersContext"
import { OrderDetail } from "./OrderDetail";

export function OrderHistory() {
    const { orders } = useOrders();

    return (
        <div>
            <div>
                <h3>Histórico de Pedidos</h3>
            </div>
            <main>
                <div>
                    {orders.map(order => (
                        <OrderDetail 
                        key={order.orderId}
                        order={ order }
                        showQRCode={false}
                        showStatus="Retirado"
                        />
                    ))}
                </div>
            </main>
        </div>
        

        
    )
}