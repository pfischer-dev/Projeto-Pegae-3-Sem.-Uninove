export function Keywords() {
    const keys = ['Todas', 'Salgados', 'Doces', 'Bebidas', 'Refeições', 'Abertas Agora'];
    return (
        <div className="container flex justify-center items-center gap-3 overflow-x-auto overflow-y-hidden no-scrollbar w-full pl-4 pr-1 h-8 p-8 bg-[#EFF6FF] border-b-1 border-[#94A3B8] ">
            {keys.map((key) => {
                return <button className="border-1 rounded-4xl px-3 py-0 h-auto border-[#1E3A8A] text-[#1E3A8A]">{key}</button>
            })}
        </div>
    )
}