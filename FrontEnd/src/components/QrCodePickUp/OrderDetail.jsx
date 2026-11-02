import { useState } from "react";
import { ModalQRCode } from "./ModalQRCode";

export function OrderDetail({ order, showQRCode = true, showStatus = "Em Preparo" }) {
    console.log("Pedido recebido no OrderDetail:", order);
    
    //const pedidoPronto = order.status === 'pronto';
    //const textoStatus = pedidoPronto ? "Pronto" : "Em Preparo";

    const dataPedido = new Date(order.timeStamp);
    const horaPagamento = new Date(order.timeStamp);
    const valorTotal = order.totalValue;

    const [modalOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(!modalOpen);
    }

    return (
        <div
            id="order_detail"
            className="w-full flex flex-col items-center gap-2 p-5 border-1 rounded-2xl border-gray-200 shadow-md">
            
            <div className="w-80 flex justify-between text-[#1e3a8a] border-b-1 border-gray-200">
                <span>Pedido:</span>
                <p>#{order.orderId}</p>
            </div>
            <div className="w-80 flex justify-between text-[#1e3a8a] border-b-1 border-gray-200">
                <p>Data:</p>
                <p>{dataPedido.toLocaleDateString("pt-BR")}</p>
            </div>
            <div className="w-80 flex justify-between text-[#1e3a8a] border-b-1 border-gray-200">
                <p>Horário:</p>
                <p>{horaPagamento.toLocaleTimeString("pt-BR")}</p>
            </div>
            <div className="w-80 flex justify-between text-[#1e3a8a] border-b-1 border-gray-200">
                <p>Total:</p>
                <p className="font-bold">{valorTotal.toLocaleString("pt-BR", {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
            </div>
            <div className="w-80 flex justify-between text-[#1e3a8a] border-b-1 border-gray-200">
                <p>Status</p>
                
                {showStatus && (
                    <p className={`text-white rounded-2xl px-2.5 py-0.5 ${
                        showStatus === "Retirado" ? "bg-emerald-500" : "bg-amber-600"}`}>
                        {showStatus}
                    </p>
                )}
            </div>

            {showQRCode && (
                <button
                    className="w-80 mt-5 bg-amber-600 text-white font-bold p-2 rounded-lg hover:bg-amber-600/90"
                    onClick={openModal}
                >
                    Mostrar QR Code
                </button>
            )}
            {modalOpen && (
                <ModalQRCode onClose={() => setModalOpen(false)} />
            )}
            
            <p className="text-[.8rem] font-light text-gray-600">Válido por 2hs após o pagamento</p>
        </div>
    )
}