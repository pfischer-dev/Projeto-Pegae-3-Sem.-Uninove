import { Input } from "./Input";
import { Keywords } from "./Keywords";
import user from "../assets/icons/user.png";
import location from "../assets/icons/location.png";
import search from "../assets/icons/search.png";
import userPhoto from "../assets/userPhoto.png";

export function Nav() {
    return (
        <div>
            <div className="container bg-[#EFF6FF] text-[#1E3A8A] flex flex-col w-screen justify-center items-center gap-2">
                <div id="userThumb" className="flex items-center py-2 px-5 gap-5 w-90">
                    <img className="w-18 h-18 rounded-full" src={userPhoto} alt="User Thumbnail" />
                    <h1 className="text-2xl font-bold">Olá, Gabriel</h1>
                </div>
                <Input 
                iconSrc={location} 
                iconAlt="icone localizaçao" 
                type="text" 
                placeholder="Escolha o Campus"
                name="campus"
                />

                <Input 
                iconSrc={search} 
                iconAlt="icone buscar" 
                type="text" 
                placeholder="Buscar pratos ou Cantinas"
                name="buscar_restaurant"
                />
            </div>
            
            <Keywords />
        </div>
    )
}