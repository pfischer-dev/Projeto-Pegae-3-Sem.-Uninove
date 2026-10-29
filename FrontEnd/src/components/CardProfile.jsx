import avatarProfile from "../assets/icons/userProfile.png";

export function CardProfile({usuario}) {
    console.log(usuario);
    
    return (
        <div id="container" className="w-full flex justify-center gap-2">
            <div id="cardProfile" className="w-90 flex flex-col items-center gap-2 p-5 bg-[#1e3a8a] rounded-xl">
                <div id="imageProfile" className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                    <img src={usuario.image} alt="foto perfil" className="w-18 h-18 rounded-full" />
                </div>
                
                
                <button className="text-xs text-amber-500 border-1 border-white/50 bg-white/10 rounded-4xl px-3">Adicionar foto</button>
                <h2 className="text-xl font-bold text-white">{usuario.name}</h2>
                <div className="font-bold text-[9px] flex flex-col">
                    <div id="emailProfile" className="w-80 flex gap-3 bg-white/20 rounded-t-xl p-2 border-b-1 border-white/25">
                        <p className="text-amber-500 text-[9px] w-15">E-MAIL</p>
                        <p className="text-white">{usuario.email}</p>
                    </div>
                    <div id="cursoProfile" className="w-80 flex gap-3 bg-white/20 p-2">
                        <p className="text-amber-500 text-[9px] w-15">CURSO</p>
                        <p className="text-white">{usuario.name}</p>
                    </div>
                    <div id="campusProfile" className="flex gap-3 bg-white/20 rounded-b-xl p-2 border-t-1 border-white/25">
                        <p className="text-amber-500 text-[9px] w-15">CAMPUS</p>
                        <p className="text-white">{usuario.campus}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}