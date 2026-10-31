import qrCode from "../../assets/icons/qrCode_blue.png"
import { OrderDetail } from "./OrderDetail"

export function ReadyOrders() {
    return (
        <article className="w-90 border-1 border-gray-200 rounded-2xl border-[#1e3a8a] p-3 flex flex-col gap-8 shadow-lg">
            
            <div id="successMsg_QR" className="flex flex-col justify-center items-center gap-3">
                
                <div id="success_msg" className="flex items-center gap-2 p-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500">
                        <span className="text-2xl text-white">✓</span>
                    </div>
                    <h3 className="w-40 text-[12px] font-bold text-[#1e3a8a]">Mostre este QR Code na cantina para Retirar</h3>
                </div>
                <div>
                    <img className="w-30 h-30" id="order_qrCode" src={qrCode} alt="" />
                </div>
            </div>

            <OrderDetail />
            
        </article>
    )
}