export function Keywords({ category, setCategory}) {
    const keys = [
        {label: 'Todas', value: "all"}, 
        {label: 'Comidas', value: "foods"}, 
        {label: 'Doces', value: "candys"}, 
        {label: 'Bebidas', value: "drinks"}
        
    ];
    return (
        <div className="container flex items-center gap-3 overflow-x-auto overflow-y-hidden no-scrollbar w-full pl-4 pr-1 p-2 bg-[#F3F4F6] border-b-1 border-[#94A3B8] ">
            {keys.map((key) => (
                <button
                key={key.label}
                type="button" 
                onClick={() => setCategory(key.value) } 
                className={`flex-shrink-0 border rounded-4xl px-3 py-1 text-sm ${
                        category === key.value
                            ? "bg-amber-600 text-white"
                            : "border-[#1E3A8A] text-[#1E3A8A]"
                    }`}
                >
                    {key.label}
                </button>
            ))}
        </div>
    )
}