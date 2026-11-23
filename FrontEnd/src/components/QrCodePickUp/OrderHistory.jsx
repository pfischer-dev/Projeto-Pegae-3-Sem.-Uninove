import { useOrders } from "../../context/OrdersContext"
import { OrderDetail } from "./OrderDetail";

export function OrderHistory() {
    const { orders } = useOrders();

    return (
        <div className="w-full flex flex-col items-center gap-3 px-2">
            
            <h3 className="text-xl font-bold text-[#1e3a8a]">Histórico de Pedidos</h3>
            <div className="w-full flex flex-col items-center gap-3">
                {orders.map((order, index) => (
                    <OrderDetail 
                        key={order.orderId}
                        order={ order }
                        showQRCode={false}
                        showStatus={index === orders.length - 1 ? "Em Preparo" : "Retirado"}
                    />
                ))}
            </div>
            
        </div>
        

        
    )
}