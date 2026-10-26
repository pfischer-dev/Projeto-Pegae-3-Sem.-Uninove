import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.png";
import notification_signal_active from "../assets/icons/notification_signal_inactive.png";

export function HeaderNav(props) {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="w-full flex items-center gap-3 py-3 px-4">
                <Link 
                to="/" 
                aria-label="Voltar para a página inicial"
                className="flex-shrink-0">
                    <img 
                        src={arrow}
                        alt="botão voltar"
                        className="w-6 h-6 object-contain bg-[#1e3a8a] rounded-lg p-1" />
                </Link>
                <h2 className="flex-1 min-w-0 text-center font-bold truncate">
                    {props.name}
                </h2>

                <button type="button" aria-label="Notificações" className="flex-shrink-0">
                    <img src={notification_signal_active}
                        alt="botão notificaçoes"
                        className="w-6" 
                    />
                </button>
            </div> 
        </header>
    )
}