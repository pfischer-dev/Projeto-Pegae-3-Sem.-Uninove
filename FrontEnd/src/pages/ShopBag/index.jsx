import { AppLayout } from "../../components/AppLayout";
import { HeaderNav } from "../../components/HeaderNav";
import { ShopItem } from "../../components/ShopItem";
import { Button_login_register } from "../../components/Button_login_register";
import { Footer } from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";


export default function ShopBag() {
    const { items, changeQuantity, totalValue } = useCart();
    
    return (
        <AppLayout>
            <header className="shrink-0">
                <HeaderNav
                    name="Sua Sacola" />
            </header>

            <main className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-2 items-center px-2 pt-2 pb-18">
                {items.map((item) => (
                    <ShopItem key={item.id} item={item} />

                ))}

                <div id="shopDetail" className="w-90 bg-blue-50 rounded-2xl">
                    <div className="flex justify-between items-center p-2 border border-[#1e3A8a]/70 rounded-t-2xl">
                        <p className="text-gray-600/60 font-light">Retirada</p>
                        <h3
                            className="font-bold text-[14px] flex-wrap text-[#1e3a8a]">
                            {items.length > 0
                                ? items[0]?.restaurantName
                                : ""
                            }</h3>
                    </div>

                    <div className="flex justify-between p-2 border-l border-r border-[#1e3A8a]/70">
                        <div className="flex flex-col text-gray-600/60 font-light">
                            <p>Subtotal</p>
                            <p>Taxa</p>
                        </div>
                        <div className="flex flex-col items-end font-bold text-[#1e3a8a]">
                            <h3>{totalValue.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}</h3>
                            <h3>Grátis</h3>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between p-2 border border-[#1e3A8a]/70 rounded-b-2xl gap-3">
                        <div className="flex justify-between gap-2">
                            <h3 className="text-gray-600/60 font-light">Total</h3>
                            <h3 className="font-bold text-[#1e3a8a]">{totalValue.toLocaleString("pt-Br", {
                                style: "currency",
                                currency: "BRL",
                            })}</h3>
                        </div>
                        <Link to={`/payment`}>
                            <div className="flex items-center justify-center text-white">
                                <Button_login_register
                                    buttonText="Ir para Pagamento" />
                            </div>
                        </Link>

                    </div>
                </div>
            </main>

            <footer className="shrink-0 w-full">
                <Footer />
            </footer>
        </AppLayout>



    )
}