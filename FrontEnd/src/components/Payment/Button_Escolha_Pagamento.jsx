

export function ButtonEscolhaPagamento(props) {
    return (

        <div id="escolha_payment" className="flex items-center rounded-xl w-90 text-[#1e3A8A] border-2 border-amber-600 bg-white px-5 py-2 gap-2">
            <img src={props.img} alt="" className="w-9 h-9" />
            <div id="description_pix" className="flex flex-col w-full">
                <h4 className="font-bold">{props.type}</h4>
                <p className="font-extralight text-sm">Aprovação Imediata</p>
            </div>

            <div id="selection_pix" className="w-full flex justify-end items-center">    
                <div className="w-5 h-5 bg-amber-500 rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 bg-white rounded-full">
                    </div>
                </div>
            </div>
        </div>
    )
}