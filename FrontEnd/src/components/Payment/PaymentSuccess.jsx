/* COMPONENT QUE SIMULA O SUCESSO DA COMPRA */
import { Link } from "react-router-dom";
import { useOrders } from "../../context/OrdersContext";
import { useCart } from "../../context/CartContext";

export function PaymentSuccess({ orderId, timeStamp, totalValue }) {
    const dataPedido = new Date(timeStamp);
    const dataFormatada = dataPedido.toLocaleDateString("pt-BR");
    const horarioFormatado = dataPedido.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute:"2-digit"
    });

    const { addOrders } = useOrders();
    const { items } = useCart(); 
    
    function RegistrarPedido() {
        const novoPedido = {
            orderId,
            timeStamp,
            totalValue,
            items,
            status: "Em preparo"
        }
        addOrders(novoPedido);
    }
    

    return (
        <div className="w-90 flex flex-col items-center gap-4 rounded-xl bg-white p-6 text-[#1e3a8a]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                <span className="text-4xl text-green-600">✓</span>
            </div>

            <h2 className="font-bold text-lg">
                Pagamento aprovado!
            </h2>

            <p className="text-sm text-center">
                Seu pagamento foi confirmado com sucesso.
                Agora é só acompanhar seu pedido!
            </p>


            {/* item 3 da lista */}
            <div className="w-full border-t border-gray-200 pt-3 flex flex-col gap-2 text-sm">
                <div className="flex justify-between border-b border-gray-200">
                    <span>Pedido:</span>
                    <strong>#{orderId}</strong>
                </div>

                <div className="flex justify-between border-b border-gray-200">
                    <span>Data:</span>
                    <strong>{dataFormatada}</strong>
                </div>

                <div className="flex justify-between border-b border-gray-200">
                    <span>Horário:</span>
                    <strong>{horarioFormatado}</strong>
                </div>

                <div className="flex justify-between border-b border-gray-200">
                    <span>Total:</span>
                    <strong>R$ {totalValue.toFixed(2)}</strong>
                </div>
            </div>
                <Link
                to={"/orders"}
                className="flex justify-center w-full rounded-xl bg-[#1e3a8a] text-white py-3 font-bold cursor-pointer hover:opacity-90">
                    <button>
                        Ver meus pedidos
                    </button>
                </Link>
        </div>
    )
}   