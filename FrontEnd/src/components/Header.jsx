import logoPegae from "../assets/logoPegae.png";

export function Header() {
    return (
        
        <header className="w-full bg-white border-b border-gray-200 flex justify-center items-center py-1 px-4  rounded-b-sm">
            
            <img 
            src={logoPegae} 
            alt="logo Pegae" 
            className="w-20 h-auto"
            />
        </header>
    )
}