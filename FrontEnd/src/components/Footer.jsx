import { NavLink } from "react-router-dom";

import home_use from "../assets/icons/home_use.png";
import homeOver_blue from "../assets/icons/homeOver_blue.png";
import homeOver_gray_inact from "../assets/icons/homeOver_gray.png";
import notification_inact from "../assets/icons/notification_inactive.png";
import notification_signal_active from "../assets/icons/notification_signal_active.png";
import notification_signal_inact from "../assets/icons/notification_signal_inactive.png";
import qrCode_active from "../assets/icons/qrCode_blue.png";
import qrCode_inact from "../assets/icons/qrCode_white.png";
import userProfile_active from "../assets/icons/userProfile_active.png";
import userProfile_inact from "../assets/icons/userProfile_inactive.png";


export function Footer() {
    let navItems = [
        {id: "homeItem", label: "Home", to: "/", iconActive: home_use, iconInact: homeOver_gray_inact},
        {id: "myOrders_item", label: "Meus Pedidos", to: "/orders", iconActive: qrCode_active, iconInact: qrCode_inact},
        {id: "notification", label: "Notificações", to: "/notification", iconActive: notification_signal_active, iconInact: notification_signal_inact},
        {id: "profile", label: "Perfil", to: "/profile", iconActive: userProfile_active, iconInact: userProfile_inact}
    ];


    return (
        <footer className="container flex justify-around itens-center bg-[#ffffff] text-xs">
            {navItems.map((item) => (
                <NavLink key={item.id} to={item.to}>
                    {({ isActive}) => (
                    <div className="flex flex-col items-center text-xs p-1">
                        <img 
                        src={isActive ? item.iconActive : item.iconInact} 
                        alt={item.label} 
                        className="w-6 h-6 transition-all"/>
                        <span className={isActive ? "text-[#1E3A8A] font-bold" : "text-[#94A3B8]"}>
                            {item.label}
                        </span>
                    </div>
                )}
            
            </NavLink>
            ))}     
        </footer>
    )
}