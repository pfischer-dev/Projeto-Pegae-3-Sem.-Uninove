import { useCart } from "../context/CartContext";

export function ShopItem({ item }) {
    const { changeQuantity } = useCart();
    return (
        <div className="w-90 flex gap-2 items-center justify-between p-2 bg-white border-1 border-[#1e3A8a]/70 text-gray-600/60 rounded-2xl">
            <div className="flex items-center gap-2">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover flex-shrink-0" />

                <div className="flex flex-col">
                    <h2>{item.name}</h2>
                    <h3 className="font-bold text-amber-500">{item.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                    </h3>
                </div>

            </div>

            <div className="flex gap-3 justify-center items-center">
                <button
                    className="flex items-center justify-center w-6 h-6 p-0 text-white rounded-md bg-amber-600"
                    onClick={() => changeQuantity(item.id, -1)}
                >
                    <span className="relative -top-[2px] text-base leading-none cursor-pointer">−</span>
                </button>

                <span className="text-xs     font-bold">{item.quantity}</span>

                <button
                    className="flex items-center justify-center w-6 h-6 p-0 text-white rounded-md bg-amber-600"
                    onClick={() => changeQuantity(item.id, 1)}
                >
                    <span className="relative -top-[2px] text-base leading-none cursor-pointer">+</span>
                </button>
            </div>
        </div>
    )
}