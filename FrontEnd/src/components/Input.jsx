export function Input(props) {
    return (
        <div className="input-group w-85 flex items-center gap-2 border-1 rounded-lg p-1.5">
            <img src={props.iconSrc} alt={props.iconAlt} className="input-icon w-5 h-5" />
            <input type={props.type} placeholder={props.placeholder} name={props.name} className="w-80"/>
        </div>
    )
}