export function Product(props) {
    console.log("Imagem recebida:", props.image);
    return (
        <article id="product" className="flex gap-7 w-full bg-[#F3F4F6] rounded-2x p-2">
            
            <div className="border-1 border-[#1E3A8A] bg-white flex justify-center items-center gap-2 p-2 w-90 rounded-2xl bg-[#ffffff]">
                
                <img src={props.image} alt="imagem produto" className="w-25 h-25 rounded-2xl "/>
                
                <div id="product_description" className="flex flex-col w-full gap-1.5">
                    <h2 className=" font-bold text-sm sm:text-base truncate w-full">{props.name}</h2>
                    <p className="text-xs sm:text-sm text-gray-600">{props.description}</p>
                    <div id="price_item" className="flex justify-between" >
                        <h3 className="text-amber-600 font-bold" >{`R$ ${props.value.toFixed(2)}`}</h3>
                        <button className="px-1.5 py-0.5 text-[#ffffff] rounded-2xl bg-amber-600">Ver Item</button>
                    </div>
                </div>
            </div>
            
            
        </article>
    )
}''