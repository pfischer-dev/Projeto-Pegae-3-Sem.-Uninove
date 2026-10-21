import logoPegae from "../assets/logoPegae.png";

export function Header() {
    return (
        <div className="container w-full h-12 bg-[#FFFFFF] flex justify-center items-center">
            <img 
            src={logoPegae} 
            alt="logo Pegae" 
            className="w-20 h-10"
            />
        </div>
    )
}