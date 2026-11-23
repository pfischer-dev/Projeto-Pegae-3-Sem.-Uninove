import qrCode from "../../assets/icons/qrCode_blue.png";
import { RiCloseLargeLine } from "react-icons/ri";
import logoPegae from "../../assets/logoPegae.png";

export function ModalQRCode({ onClose}) {
    
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex flex-col justify-center items-center">
            <div 
            className="bg-white p-6 rounded-2xl shadow-xl  flex flex-col 
            justify-center items-center gap-3">
                
                <header className="flex justify-center items-center gap-8 text-2xl w-full font-semibold">
                    <img src={logoPegae} 
                    alt="logoPegae" 
                    className="w-40"/>
                    <div className="flex justify-center items-center">
                        <button
                        onClick={onClose} 
                        className="text-3xl text-blue-600 cursor-pointer">
                            <RiCloseLargeLine size={30} color="#ff7a00" />
                        </button>
                    </div>
                </header>

                <div className="w-60">
                    <p className="flex justify-center items-center text-center">
                        Apresente este QR Code para retirar seu pedido
                    </p>
                </div>

                <img 
                src={qrCode} 
                alt="img qr code"
                className="w-70 h-70"/>
            </div>
        </div>
    )
}