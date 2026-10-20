export function Button_login_register(props) {
    return (
        <button 
    type={props.type} 
    className="bg-amber-600 border-0 rounded-3xl p-1.5 w-70 font-bold">
        {props.buttonText}
    </button>
    )
}