import loginIcon from "../assets/icons/login.png";

export function Button_login_register(props) {
    return (
        <button 
    type={props.type} 
    className="bg-amber-600 border-1 rounded-3xl p-1.5 w-70 font-bold flex justify-center items-center gap-1 cursor-pointer">
        {props.buttonText}
        <img src={loginIcon} alt="icon Login" className="w-4 h-4"  />
    </button>
    )
}