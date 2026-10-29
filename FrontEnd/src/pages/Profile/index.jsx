import { HeaderNav } from "../../components/HeaderNav";
import { CardProfile } from "../../components/CardProfile";
import { profile } from "../../data/bdProfile";


export default function Profile() {
    const usuario = profile[0];
    console.log(usuario);
    
    
    return (
        <div className="flex flex-col w-full bg-[#F3F4F6] gap-2">
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center overflow-x-hidden bg-[#F3F4F6] shadow-sm text-[#1e3a8a]">
                <HeaderNav name="Meu Perfil" />
            </div>

            <main className="flex flex-col justify-center gap-2 items-center gap-4">
                <div Id="cardProfile">
                    <CardProfile usuario={ usuario } />
                </div>
            </main>
        </div>
    );
}