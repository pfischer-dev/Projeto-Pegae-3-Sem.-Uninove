import { useState, useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrdersContext";
import { AppLayout } from "../../components/AppLayout";
import { HeaderNav } from "../../components/HeaderNav";
import { ButtonEscolhaPagamento } from "../../components/Payment/Button_Escolha_Pagamento";
import { Footer } from "../../components/Footer";
import { PixPayment } from "../../components/Payment/PixPayment";
import { PaymentSuccess } from "../../components/Payment/PaymentSuccess";
import qrCode_blue from "../../assets/icons/qrCode_blue.png";


export default function Payment() {
    const [paymentStatus, setPaymentStatus] = useState('initial');
    const [timeLeft, setTimeLeft] = useState(10); /* retornar depois para 30 seconds */
    const { items, totalItems, totalValue, clearCart } = useCart();
    const { addOrders } = useOrders()

    const [timeStamp, setTimeStamp] = useState(null);
    const [hashRandom, setHashRandom] = useState("");
    const [pixCode, setPixCode] = useState("");
    const [pedidoConfirmado, setPedidoConfirmado] = useState(null);

    const pedidoRegistrado = useRef(false);

    useEffect(() => {
        if (paymentStatus !== 'pending') return;

        const intervalId = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev - 1, 0));
        }, 1000);
        return () => clearInterval(intervalId);
    }, [paymentStatus]);

    useEffect(() => {
        if (paymentStatus === 'pending' && timeLeft === 0) {
            setPaymentStatus('paid');
        }
    }, [paymentStatus, timeLeft]);

    //useEffect que REGISTRA o pedido
    useEffect(() => {
        if (paymentStatus !== 'paid') return;

        if (pedidoRegistrado.current) return;
        pedidoRegistrado.current = true;

        const novoPedido = {
            orderId: hashRandom,
            timeStamp: timeStamp,
            totalValue: totalValue,
            items: items,
            status: "Em preparo"
        }
        setPedidoConfirmado(novoPedido);
        addOrders(novoPedido);
        console.log("Pedido registrado:", novoPedido);
        clearCart()
    }, [paymentStatus, items, totalValue, hashRandom, timeStamp]);


    //funçao geradora do Pix
    function gerarPix() {
        const novoTimeStamp = Date.now();

        const novoHash = Math.random()
            .toString(32)
            .substring(8, 2)
            .toUpperCase();

        const novoPixCode = `00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-4266141740005204000053039865405100.005802BR5913PEGAE REST6009SAO PAULO62140510${novoHash}${novoTimeStamp}6304D1A2`;

        setTimeStamp(novoTimeStamp);
        setHashRandom(novoHash);
        setPixCode(novoPixCode);

        setTimeLeft(10); /*  voltar para 30 seconds apos terminar ajustes */
        setPaymentStatus('pending');
        console.log(novoTimeStamp);
    }

    return (
        <AppLayout>
            <header className="shrink-0">
                <HeaderNav name="Pagamento" />
            </header>

            <main className="flex-1 min-h-0 overflow-y-auto bg-[#F3F4F6] pt-2 pb-20">
                <div className="w-full max-w-[420px] mx-auto flex flex-col justify-center items-center gap-4 bg-white border border-gray-200 rounded-2xl shadow-sm p-5">

                    <div
                        id="resume_payment"
                        className="rounded-xl w-full max-w-[360px] text-white bg-[#1e3A8A] px-5 py-2"
                    >
                        <p className="text-xs">Resumo do Pedido</p>
                        <h3 className="font-bold">
                            {pedidoConfirmado
                                ? pedidoConfirmado.items.reduce((soma, item) => soma + item.quantity, 0)
                                : totalItems} produtos - R$
                            {(pedidoConfirmado?.totalValue ?? totalValue).toFixed(2)}
                        </h3>
                    </div>

                    <div className="w-90 font-bold text-sm text-[#1e3A8a]">
                        <h3 className="w-full max-w-[360px] font-bold text-sm text-[#1e3A8a]">Como você quer pagar?</h3>
                    </div>

                    <ButtonEscolhaPagamento
                        type="Pix"
                        img={qrCode_blue}
                    />
                    {paymentStatus !== 'paid' && (
                        <div className="flex justify-center">
                            <button onClick={gerarPix}
                                className="w-full max-w-[280px] flex justify-center items-center rounded-xl bg-amber-600 hover:opacity-90 text-white px-5 py-3 gap-2">
                                <h3 className="font-bold cursor-pointer">Gerar Código Pix</h3>
                            </button>
                        </div>
                    )}


                    {paymentStatus === 'pending' && (
                        <PixPayment pixCode={pixCode} />
                    )}
                    {paymentStatus === 'paid' && pedidoConfirmado && (
                        <PaymentSuccess
                            orderId={pedidoConfirmado.orderId}
                            timeStamp={pedidoConfirmado.timeStamp}
                            totalValue={pedidoConfirmado.totalValue}
                        />
                    )}

                    <div id="total" className="w-full max-w-[360px] flex flex-col justify-start text-[#1e3a8a]">
                        <p className="font-light text-m">Total</p>
                        <h3 className="font-bold">R$ {(pedidoConfirmado?.totalValue ?? totalValue).toFixed(2)}</h3>
                    </div>

                </div>
            </main>

            <footer className="shrink-0 w-full">
                <Footer />
            </footer>
        </AppLayout>



    )
}


