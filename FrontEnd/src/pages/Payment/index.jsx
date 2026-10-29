import { HeaderNav } from "../../components/HeaderNav";
import { Button_login_register } from "../../components/Button_login_register"
import { Footer } from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import arrow_button_payment from "../../assets/icons/arrow_payment.png";
import qrCode_blue from "../../assets/icons/qrCode_blue.png"

export default function Payment() {
    const { totalItems, totalValue } = useCart();
    console.log(totalItems);
    
    return (
        <div id="container" className="flex flex-col  items-center w-full h-screen bg-[#F3F4F6] gap-15">
            <div id="header_payment" className="w-full max-w-2xl mx-auto flex flex-col items-center overflow-x-hidden bg-[#F3F4F6] text-[#1e3a8a] shadow-sm">
                <HeaderNav name="Pagamento" />
            </div>

            <main className="flex flex-col justify-center gap-2 items-center gap-4">
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

                <div id="payment_pix" className="flex items-center rounded-xl w-90 text-[#1e3A8A] border-2 border-amber-600 bg-white px-5 py-2 gap-2">
                    <img src={qrCode_blue} alt="" className="w-9 h-9" />
                    <div id="description_pix" className="flex flex-col w-full">
                        <h4 className="font-bold">Pix</h4>
                        <p className="font-extralight text-sm">Aprovação Imediata</p>
                    </div>

                    <div id="selection_pix" className="w-full flex justify-end items-center">
                        <div className="w-5 h-5 bg-amber-500 rounded-full flex justify-center items-center">
                            <div className="w-3 h-3 bg-white rounded-full">
                            </div>
                        </div>
                    </div>
        
                </div>

                <div id="qr_code_payment" className="flex justify-center gap-2 w-90 border-1 rounded-xl p-2 pl-1 text-[#1e3a8a]">
                        <img src={qrCode_blue} alt="image qrCode" className="w-20 h-20" />
                    <div className="flex flex-col">
                        <h4 className="font-bold">Pix Simulado</h4>
                        <p className="font-extralight text-xs">O pedido será Aprovado Automaticamente</p>
                        <div id="key_pix" className="flex items-end justify-center h-full">
                            <div className="border-1 w-50 h-5 rounded-md"></div>
                        </div>
                    </div>
                </div>

                <div id="total" className="w-85 flex justify-between items-center text-[#1e3a8a]">
                    <p className="font-light text-m">Total</p>
                    <h3 className="font-bold">R$ {totalValue.toFixed(2)}</h3>
                </div>
                <button className="w-80 flex justify-center items-center rounded-xl bg-amber-600 text-[#1e3a8a] px-5 py-3 gap-2">
                    <h3 className="font-bold">Confirmar Pagamento</h3>
                    <img className="w-4 h-4" src={arrow_button_payment} alt="arrow" />
                </button>
                
            </main>

            <footer className="flex-shrink-0 w-full">
                <Footer />
            </footer>

        </div>
    )
}