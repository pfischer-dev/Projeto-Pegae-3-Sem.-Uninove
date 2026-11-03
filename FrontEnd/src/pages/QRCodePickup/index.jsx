import { useState } from "react";
import { AppLayout } from "../../components/AppLayout";
import { HeaderNav } from "../../components/HeaderNav";
import { ReadyOrders } from "../../components/QrCodePickUp/ReadyOrders";
import { OrderHistory } from "../../components/QrCodePickUp/OrderHistory";
import { Footer } from "../../components/Footer";
import { useOrders } from "../../context/OrdersContext";

export default function QRCodePickup() {
    const [activeTab, setActiveTab] = useState('prontos');
    const { orders, addOrders } = useOrders();
    console.log(orders);

    /* funçao para mudar aba (prontos / historico) */
    function handleClick(tab) {
        setActiveTab(tab);
    }

    return (
        <AppLayout>
            <header className="shrink-0">
                <HeaderNav name="Meus Pedidos" />
            </header>

            <main className="flex-1 min-h-0 overflow-y-auto bg-[#F3F4F6]">
                <div className="w-full flex flex-col items-center pb-24 gap-3">

                    <nav id="abas" className="w-full flex flex-col justify-between gap-1 border-b border-gray-200">
                        <div className="flex w-full">

                            <h3
                                onClick={() => handleClick('prontos')}
                                className={`flex-1 flex justify-center items-center p-2 cursor-pointer font-semibold ${activeTab === 'prontos' ? "text-amber-600 font-semibold" : "text-black"}`}>
                                Prontos
                            </h3>

                            <h3
                                onClick={() => handleClick('historico')}
                                className={`flex-1 flex justify-center items-center p-2 cursor-pointer font-semibold ${activeTab === 'prontos' ? "text-black" : "text-amber-600 font-semibold"}`}>
                                Histórico
                            </h3>

                        </div>

                        <div className={`w-full flex ${activeTab === 'prontos' ? 'justify-start' : 'justify-end'}`}>
                            <div
                                id="detail_bar"
                                className={`h-1 w-1/2 bg-amber-600`}></div>
                        </div>
                    </nav>

                    {activeTab === 'prontos'
                        ? (<ReadyOrders order={orders[0]} />)
                        : (<OrderHistory />)
                    }

                </div>
            </main>

            <footer className="shrink-0 w-full">
                <Footer />
            </footer>
        </AppLayout>



    )
}