import qrCode from "../../assets/icons/qrCode_blue.png";
import { OrderDetail } from "./OrderDetail"

export function ReadyOrders({ order }) {
        console.log(order);
    
    return (
        <article className="w-full max-w-[360px] border border-gray-200 rounded-2xl p-3 flex flex-col gap-3 shadow-sm bg-white">
            
            <div id="successMsg_QR" className="flex flex-col justify-center items-center gap-1">
                
                <div id="success_msg" className="flex items-center gap-2 p-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500">
                        <span className="text-2xl text-white">✓</span>
                    </div>
                    <h3 className="max-w-[150px] text-xs font-bold text-[#1e3a8a]">Mostre este QR Code na cantina para Retirar</h3>
                </div>
                <div>
                    <img className="w-30 h-30" id="order_qrCode" src={qrCode} alt="" />
                </div>
                
                
            </div>

            <OrderDetail order={ order } />
            
        </article>
    )
}