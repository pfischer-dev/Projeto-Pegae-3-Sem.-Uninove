import lanche from "../assets/lanchonete5.png";

export function Product() {
    return (
        <article className="flex gap-3 w-90 bg-[#ffffff] rounded-2xl">
            <img src={lanche} alt="" className="w-25 rounded-2xl p-2"/>
            <div id="product_description" className="flex flex-col w-full">
                <h2>Coxinha Frango c/ catupiry</h2>
                <p>Massa crocante com recheio cremoso</p>
                <div id="price_item" className="flex justify-between" >
                    <h3 className="text-amber-600 font-bold" >R$ 8,50</h3>
                    <button className="px-1 py-0.5 text-[#ffffff] rounded-2xl bg-amber-600">Ver Item</button>
                </div>
            </div>
        </article>
    )
}