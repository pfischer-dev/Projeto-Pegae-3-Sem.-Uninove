import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.png";
import notification_signal_active from "../assets/icons/notification_signal_inactive.png";

export function HeaderNav(props) {
    return (
        <header className="sticky top-0 left-0 right-0 w-full max-w-md mx-auto bg-white border-b border-gray-200 flex justify-between items-center py-3 px-4 z-50">
            <Link to="/" className="flex items-center justify-between">
                <img 
                src={arrow}
                alt="botão voltar"
                className="bg-[#1e3a8a] rounded-lg p-2 w-6" />
            </Link>
            <h2 className="font-bold">{props.name}</h2>
            <img src={notification_signal_active}
            alt="botão notificaçoes"
            className="w-6" />
            
            
        </header>
    )
    
    
}