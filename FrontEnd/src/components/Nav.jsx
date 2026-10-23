import { Input } from "./Input";
import { Keywords } from "./Keywords";
import user from "../assets/icons/user.png";
import location from "../assets/icons/location.png";
import search from "../assets/icons/search.png";
import userPhoto from "../assets/userPhoto.png";

export function Nav() {
    return (
        <div className="w-full">
            <div className="w-full bg-[#F3F4F6] text-[#1E3A8A] flex flex-col items-center gap-2 px-4 py-2">
                {/* container bg-[#EFF6FF] text-[#1E3A8A] flex flex-col w-screen justify-center items-center gap-1 */}
                <div id="userThumb" className="flex items-center gap-4 w-full max-w-lg py-1">
                    <img className="w-16 h-16 rounded-full object-cover shrink-0" 
                    src={userPhoto} 
                    alt="User Thumbnail" />
                    <h1 className="text-2xl font-bold">Olá, Gabriel</h1>
                </div>
                
                <div className="w-full max-w-lg">
                    <Input 
                    iconSrc={location} 
                    iconAlt="icone localizaçao" 
                    type="text" 
                    placeholder="Escolha o Campus"
                    name="campus"
                    />
                </div>
                
                <div className="w-full max-w-lg">
                    <Input 
                    iconSrc={search} 
                    iconAlt="icone buscar" 
                    type="text" 
                    placeholder="Buscar pratos ou Cantinas"
                    name="buscar_restaurant"
                    />
                </div>
            </div>
            
            <Keywords />
        </div>
    );
}