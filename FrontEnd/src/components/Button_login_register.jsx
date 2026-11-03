import { FaSignOutAlt } from "react-icons/fa";

export function Button_login_register(props) {
    return (
        <button 
    type={props.type} 
    className="bg-amber-600 text-white border rounded-3xl p-1.5 w-70 font-bold flex justify-center items-center gap-3 cursor-pointer">
        {props.buttonText}
        <FaSignOutAlt />
    </button>
    )
}