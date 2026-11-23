export function Input(props) {
    return (
        <div className="w-full max-w-85 flex items-center gap-2 bg-white border border-[#1E3A8A] rounded-lg p-1.5">

            {props.icon && (
                <span className="text-[#1E3A8A] text-xl shrink-0">
                    {props.icon}
                </span>
            )}
            {props.iconSrc && (
                <img
                    src={props.iconSrc}
                    alt={props.iconAlt || ""}
                    className="input-icon w-5 h-5 shrink-0"
                />
            )}

            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                className="flex-1 w-full min-w-0 outline-none bg-transparent text-[#1E3A8A]"
            />
        </div>
    );
}

            
            