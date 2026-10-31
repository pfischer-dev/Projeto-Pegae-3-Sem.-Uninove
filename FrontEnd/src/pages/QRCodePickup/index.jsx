import { useState } from "react";

import { HeaderNav } from "../../components/HeaderNav";
import { ReadyOrders } from "../../components/QrCodePickUp/ReadyOrders";
import { OrderHistory } from "../../components/QrCodePickUp/OrderHistory";
import { Footer } from "../../components/Footer";

export default function QRCodePickup() {
    const [activeTab, setActiveTab] = useState('prontos');

    function handleClick() {
        setActiveTab(activeTab === 'prontos' ? 'historico' : 'prontos');
    }
    
    return (
        <div className="min-h-screen w-full bg-white">

            <div className="min-h-dvh w-full max-w-2xl mx-auto flex flex-col overflow-x-hidden bg-[#F3F4F6] shadow-sm">

                <header className="flex-shrink-0">
                    <HeaderNav name="Meus Pedidos" />
                </header>

                <main className="flex-1 min-h-0 overflow-y-auto bg-[#F3F4F6] pb-4">
                    <div className="w-full flex flex-col justify-center items-center pb-8 gap-3">

                        <nav id="abas" className="bg-red-200 w-full flex flex-col justify-between gap-1 border-b-1 border-gray-200">
                            <div className="flex">

                                <h3 
                                onClick={handleClick} 
                                className={`w-50 flex justify-center items-center p-1 cursor-pointer font-semibold ${activeTab === 'prontos' ? "text-amber-600 font-semibold" : "text-black" }`}>
                                    Prontos
                                </h3>
                                
                                <h3 
                                onClick={handleClick} 
                                className={`w-50 flex justify-center items-center p-1 cursor-pointer font-semibold ${activeTab === 'prontos' ? "text-black" : "text-amber-600 font-semibold"}`}>
                                    Históricos
                                </h3>

                            </div>
                            
                            <div className={`w-full flex ${activeTab === 'prontos' ? 'justify-start' : 'justify-end' }`}>
                                 <div 
                                 id="detail_bar" 
                                 className={`h-1 w-50 bg-amber-500`}></div>
                            </div>
                        </nav>

                        {activeTab === 'prontos'
                                ? ( <ReadyOrders /> )   
                                : ( <OrderHistory /> )         
                            }


                    </div>
                </main>








                <footer className="flex-shrink-0 w-full">
                    <Footer />
                </footer>
            </div>
        </div>
    )
}