export function Product(props) {
    console.log("Imagem recebida:", props.image);
    return (
        <article id="product" className="w-full bg-[#F3F4F6] p-2">
            
            <div className="w-full flex items-center gap-3 border border-[#1E3A8A] bg-white p-2 rounded-2xl">
                
                <img src={props.image} alt="imagem produto" className="w-20 h-20 sm:w-25 sm:h-25 flex-shrink-0 rounded-xl object-cover"/>
                
                <div id="product_description" className="flex flex-col flex-1 min-w-0 gap-1.5">
                    <h2 className=" font-bold text-sm sm:text-base truncate w-full">{props.name}</h2>
                    <p className="text-xs sm:text-sm text-gray-600">{props.description}</p>
                    <div id="price_item" className="flex justify-between" >
                        <h3 className="text-amber-600 font-bold" >{`R$ ${props.value.toFixed(2)}`}</h3>
                        <button className="flex items-center justify-center w-6 h-6 p-0 leading-none text-white rounded-md bg-amber-600"
                        >
                            <span className="block text-base leading-none -translate-y-px">+</span>
                        </button>
                    </div>
                </div>
            </div>
            
            
        </article>
    )
}''