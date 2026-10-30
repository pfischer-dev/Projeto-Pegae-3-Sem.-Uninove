import { useCart } from "../context/CartContext";
import preparation from "../assets/icons/preparation-blue.png";
import orderOk from "../assets/icons/orderOk-blue.png"


export function OrderCard(props) {
    const { totalItems, totalValue } = useCart();
    
    return (
        <div id="order_card" className="flex justify-between items-center border-1 border-[#1e3a8a]/40 rounded-[10px] p-2">
            <div id="order" className="flex gap-2 justify-center items-center">
                <div className="w-13 h-10 rounded-xl bg-blue-200 flex justify-center items-center">
                    <img src={props.status === "Preparando"
                        ? preparation
                        : orderOk
                    } alt="preparation icon" className="w-5 h-5"/>
                </div>
                <div id="order_info" className="flex flex-col justify-between">
                    <h4 className="font-bold text-[#1e3a8a] text-[10px]">{props.order_num}</h4>
                    <p className="font-light text-[9px]">{props.time_Order} - {totalItems} - R$ {totalValue}</p>
                </div>
            </div>

            <div id="order_State" className={`flex justify-center items-center text-[11px] border-1 rounded-2xl px-2 py-2 h-5 ${
                props.status === "Preparando"
                ? "bg-amber-400/20 border-amber-400"
                : "bg-emerald-400/20 border-emerald-400"
            }`}>
                <p className={`${props.status === "Preparando"
                    ? "text-amber-800 font-bold"
                    : "text-emerald-800 font-bold"
                }`}>{props.status}</p>
            </div>
        </div>
    )
}