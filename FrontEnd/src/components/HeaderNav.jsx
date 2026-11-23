import { Link, useNavigate } from "react-router-dom";
import arrow from "../assets/icons/arrow.png";
import notification_signal_active from "../assets/icons/notification_signal_inactive.png";
import { MdOutlineDarkMode } from "react-icons/md";

export function HeaderNav(props) {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200  rounded-b-sm">
            <div className="w-full flex items-center gap-3 py-3 px-4">

                <button
                    className="w-7 h-7 bg-[#1e3a8a] rounded-lg p-1 flex justify-center items-center cursor-pointer hover:opacity-90"
                    onClick={() => navigate(-1)}>
                    <img
                        src={arrow}
                        alt="botão voltar"
                        className="w-4 h-4 object-contain " />
                </button>



                <h2 className="flex-1 min-w-0 text-center font-bold truncate">
                    {props.name}
                </h2>
                <button
                    type="button"
                    aria-label="Notificações"
                    className="shrink-0"
                >
                    <MdOutlineDarkMode 
                        size={22}
                        className="text-amber-600"
                        />
                </button>
                
            </div>
        </header>
    )
}