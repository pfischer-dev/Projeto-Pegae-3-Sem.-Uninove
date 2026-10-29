import { HeaderNav } from "../../components/HeaderNav";
import { ShopItem } from "../../components/ShopItem";
import { Button_login_register } from "../../components/Button_login_register";
import { Footer } from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function ShopBag() {
    const { items, changeQuantity, totalValue } = useCart();
    console.log("Itens recebidos pela ShopBag:", items);

    return (
        <div className="flex flex-col w-full bg-[#F3F4F6] gap-2">
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center overflow-x-hidden bg-[#F3F4F6] shadow-sm">
                <HeaderNav
                    name="Sua Sacola" />
            </div>

            <main className="flex flex-col justify-center gap-2 items-center pb-14">
                {items.map((item) => (
                    <ShopItem key={item.id} item={item} />
                ))}


                <div id="shopDetail" className="w-90 bg-white border-[#1e3A8a] text-gray-600">
                    <div className="flex justify-between p-2 border-1 border-[#1e3A8a] rounded-t-2xl">
                        <p>Retirada</p>
                        <h3 className="font-bold">Balcão - Bloco A</h3>
                    </div>
                    <div className="flex justify-between p-2 border-l-1 border-r-1">
                        <div className="flex flex-col">
                            <p>Subtotal</p>
                            <p>Taxa</p>
                        </div>
                        <div className="flex flex-col items-end font-bold">
                            <h3>{totalValue.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}</h3>
                            <h3>Grátis</h3>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-2 border-1 rounded-b-2xl gap-3">
                        <div className="flex justify-between gap-2">
                            <h3>Total</h3>
                            <h3 className="font-bold">{totalValue.toLocaleString("pt-Br", {
                                style: "currency",
                                currency: "BRL",
                            })}</h3>
                        </div>
                        <Link to={`/payment`}>
                            <div className="flex items-center justify-center text-[#1e3A8A]">
                                <Button_login_register
                                buttonText="Ir para Pagamento" />
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </main>

            <footer className="flex-shrink-0 w-full p-1">
                <Footer />
            </footer>
        
        </div>
    )
}