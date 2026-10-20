import logoPegae from "../assets/logoPegae.png";

export function Header() {
    return (
        <div className="container w-full h-13 bg-[#F3F4F6] flex justify-center items-center">
            <img 
            src={logoPegae} 
            alt="logo Pegae" 
            className="w-20 h-10"
            />
        </div>
    )
}