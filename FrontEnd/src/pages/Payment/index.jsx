import { useState, useEffect } from "react";
import { HeaderNav } from "../../components/HeaderNav";
import { ButtonEscolhaPagamento } from "../../components/Payment/Button_Escolha_Pagamento";
import { Footer } from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import { PixPayment } from "../../components/Payment/PixPayment";
import { PaymentSuccess } from "../../components/Payment/PaymentSuccess";
import qrCode_blue from "../../assets/icons/qrCode_blue.png";

export default function Payment() {
    const [ paymentStatus, setPaymentStatus ] = useState('initial');
    const [ timeLeft, setTimeLeft ] = useState(30);
    const { totalItems, totalValue } = useCart();

    const [timeStamp, setTimeStamp] = useState(null);
    const [hashRandom, setHashRandom] = useState("");
    const [pixCode, setPixCode] = useState("");

    useEffect(()=> {
        if(paymentStatus !== 'pending') return;

        const intervalId = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev -1, 0));
        }, 1000);
        return () => clearInterval(intervalId);
    }, [paymentStatus]);

    useEffect(() => {
        if(paymentStatus === 'pending' && timeLeft === 0) {
           setPaymentStatus('paid'); 
        }   
    }, [paymentStatus, timeLeft]);

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
        
        setTimeLeft(30);
        setPaymentStatus('pending');

    }

    return (
        <div id="container" className="min-h-screen w-full bg-white">

            <div className="min-h-dvh w-full max-w-2xl mx-auto flex flex-col overflow-x-hidden bg-[#F3F4F6] shadow-sm">

                <header className="flex-shrink-0">
                    <HeaderNav name="Pagamento" />
                </header>

                <main className="flex-1 min-h-0 overflow-y-auto bg-[#F3F4F6] py-10">
                    <div className="w-full flex flex-col gap-3 items-center pb-8">
                        <div
                            id="resume_payment"
                            className="rounded-xl w-90 text-white bg-[#1e3A8A] px-5 py-2"
                        >
                            <p className="text-xs">Resumo do Pedido</p>
                            <h3 className="font-bold">{totalItems} produto - R$ {totalValue.toFixed(2)}</h3>
                        </div>

                        <div className="w-90 font-bold text-sm text-[#1e3A8a]">
                            <h3>Como você quer pagar?</h3>
                        </div>

                        <ButtonEscolhaPagamento
                        type="Pix"
                        img={qrCode_blue}
                        
                        />

                        <button onClick={gerarPix} 
                        className="w-70 flex justify-center items-center rounded-xl bg-amber-600 text-white px-5 py-3 gap-2">
                            <h3 className="font-bold cursor-pointer">Gerar Código Pix</h3>
                        </button>
                        {paymentStatus === 'pending' && (
                            <PixPayment pixCode={pixCode}/>    
                        )}
                        {paymentStatus === 'paid' && (
                            <PaymentSuccess
                            orderId={hashRandom}
                            timeStamp={timeStamp} 
                            totalValue={totalValue}
                            />
                        )}


                        <div id="total" className="w-85 flex flex-col justify-start text-[#1e3a8a]">
                            <p className="font-light text-m">Total</p>
                            <h3 className="font-bold">R$ {totalValue.toFixed(2)}</h3>
                        </div>




                    </div>
                </main>

                <footer className="flex-shrink-0 w-full">
                    <Footer />
                </footer>
            </div>
        </div>
    )
}


