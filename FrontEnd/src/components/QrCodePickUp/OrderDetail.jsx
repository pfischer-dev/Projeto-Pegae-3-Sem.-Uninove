import { useCart } from "react";

export function OrderDetail() {
    
    
    return (
        <div 
        id="order_detail"
        className="w-full flex flex-col items-center gap-2 p-5 border-1 rounded-2xl border-gray-200 shadow-md">
            <div className="w-80 flex justify-between text-[#1e3a8a] border-b-1 border-gray-200">
                <p>Data:</p>
                <p>{/* 31/10/2026 */}{}</p>
            </div>
            <div className="w-80 flex justify-between text-[#1e3a8a] border-b-1 border-gray-200">
                <p>Horário:</p>
                <p>08:01</p>
            </div>
            <div className="w-80 flex justify-between text-[#1e3a8a] border-b-1 border-gray-200">
                <p>Total:</p>
                <p className="font-bold">R$ 38,00</p>
            </div>
            <div className="w-80 flex justify-between text-[#1e3a8a] border-b-1 border-gray-200">
                <p>Status</p>
                <p className="text-white bg-emerald-500 rounded-2xl px-3 py-0.5">Pronto</p>
            </div> 
            <button
            className="w-80 mt-5 bg-amber-600 text-white font-bold p-2 rounded-lg hover:bg-amber-600/90">
                Mostrar QR Code
            </button>
            <p className="text-[.8rem] font-light text-gray-600">Válido por 2hs após o pagamento</p>  
        </div>
    )
}