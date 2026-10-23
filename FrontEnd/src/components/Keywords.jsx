export function Keywords() {
    const keys = ['Todas', 'Salgados', 'Doces', 'Bebidas', 'Refeições', 'Abertas'];
    return (
        <div className="container flex items-center gap-3 overflow-x-auto overflow-y-hidden no-scrollbar w-full pl-4 pr-1 p-2 bg-[#F3F4F6] border-b-1 border-[#94A3B8] ">
            {keys.map((key) => {
                return <button className="border-1 rounded-4xl px-3 py-0 h-auto border-[#1E3A8A] text-[#1E3A8A] text-sm">{key}</button>
            })}
        </div>
    )
}