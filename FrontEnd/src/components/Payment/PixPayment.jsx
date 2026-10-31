/* Component que abre janela de COPIAR o CODIGO PIX */
import { useState } from "react";
import copyButton from "../../assets/icons/copy.png";
import information from "../../assets/icons/information.png";


export function PixPayment({ pixCode }) {
    const [copiado, setCopiado ] = useState(false);

    async function copiarPix() {
        await navigator.clipboard.writeText(pixCode);
        setCopiado(true);
    }

    return (
        <div id="pixKey_payment" className="flex flex-col justify-center gap-2 
                        w-90 border-1 rounded-xl p-3 pl-1 text-[#1e3a8a] bg-white">

            <div className="flex items-center justify-center gap-2 px-2">
                <img 
                src={information} 
                alt="information icon" 
                className="w-4 h-4"
                 />

                <p className="text-[11px]">
                    Copie a chave abaixo e pague no app do seu banco na opção Pix Copia e Cola.
                </p>
            </div>

            <p className="font-extralight text-xs px-2">
                CÓDIGO COPIA E COLA
            </p>

            <div className="flex justify-center">
                <div id="key_pix" className="w-80 border-1 rounded-lg flex items-center justify-center px-2 py-1">
                    
                    <p 
                    className="text-[11px] font-extralight break-all overflow-hidden">
                        {pixCode}
                    </p>

                </div>
            </div>

            <div className="flex justify-center">
                
                <button 
                onClick={copiarPix}
                className="border-1 w-80 rounded-lg flex justify-center items-center gap-2 p-1"
                >
                    
                    <img className="w-4 h-4" src={copyButton} alt="button copy" />
                    <p>{copiado ? "Código Copiado!" : "Copiar Código Pix"}</p>
                </button>
            
            
            </div>
        </div>
    )
}