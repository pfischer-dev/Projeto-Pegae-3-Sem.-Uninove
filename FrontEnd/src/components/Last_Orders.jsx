import { OrderCard } from "./OrderCard"; 
import shopBagOrange from "../assets/icons/shopBag-orange.png";


export function Last_Orders() {
    return (
        <div id="container" className="border-1 rounded-xl border-[#1e3a8a]/40 w-90 p-4 flex flex-col gap-2 ">
            <div id="last_orders_card" className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={shopBagOrange} alt="shopbag icon" className="w-4 h-4" />
                    <h3 className="font-bold text-[#1e3a8a]">Últimos Pedidos</h3>
                </div>
                <span id="last_orders"
                className="text-[#1e3a8a]">
                    3 Pedidos
                </span>
            </div>
            
            <OrderCard
                order_num="Pedido #184"
                time_Order="Hoje, 12:40 PM"
                status="Preparando"
                
            />

            <OrderCard
                order_num="Pedido #179"
                time_Order="Hoje, 12:40 PM"
                status="Retirado"
                
            />

            <OrderCard
                order_num="Pedido #172"
                time_Order="Hoje, 12:40 PM"
                status="Retirado"
            />
        </div>

    )
}


{/* <div id="order_card">
                <div id="order">
                    <img src="" alt="" />
                    <div id="order_info">
                        <h4>Pedido #184</h4>
                        <p>Hoje, 12:40 - 3 itens - R$ 38.70</p>
                    </div>
                </div>

                <div id="order_State">
                    <p>Preparando</p>
                </div>
            </div>

            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h4>Pedido #179</h4>
                        <p>18 jun, 18:15 - 2 itens - R$ 24.00</p>
                    </div>
                </div>

                <div id="estado">
                    <p>Retirado</p>
                </div>
            </div>

            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h4>Pedido #171</h4>
                        <p>12 jun - 10:20 - 1 itens - R$ 12.90</p>
                    </div>
                </div>

                <div id="estado">
                    <p>Retirado</p>
                </div>
            </div> */}