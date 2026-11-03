import { HeaderNav } from "../../components/HeaderNav";
import { CardProfile } from "../../components/Profile/CardProfile";
import { Last_Orders } from "../../components/Last_Orders";
import { Footer } from "../../components/Footer"
import { profile } from "../../data/bdProfile";
import { FiUser, FiLock } from "react-icons/fi";
import { AppLayout } from "../../components/AppLayout";
import { ModalProfile } from "../../components/Profile/ModalProfile";
import { useState } from "react";

export default function Profile() {
    const [modalType, setModalType] = useState(null)
    const usuario = profile[0];

    function openModal(type) {
        setModalType(type);
    }


    return (
        <AppLayout>
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center overflow-x-hidden bg-[#F3F4F6] shadow-sm text-[#1e3a8a]">
                <HeaderNav name="Meu Perfil" />
            </div>

            <main className="flex flex-col justify-center items-center gap-4 pb-20 pt-4">
                <div id="cardProfile" className="w-full flex justify-center">
                    <CardProfile usuario={usuario} />
                </div>
                <div className="w-full flex justify-center">
                    <Last_Orders />
                </div>

                <div className="w-full max-w-[360px] flex gap-3 px-2">
                    <button
                        onClick={() => openModal("perfil")}
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold text-sm py-3 px-2 rounded-xl shadow-sm hover:bg-amber-700 transition"
                    >
                        <FiUser className="text-lg shrink-0" />
                        Atualizar perfil
                    </button>


                    <button
                        onClick={() => openModal("senha")}
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold text-sm py-3 px-2 rounded-xl shadow-sm hover:bg-amber-700 transition"
                    >
                        <FiLock className="text-lg shrink-0" />
                        Atualizar Senha
                    </button>

                </div>
                {modalType && (
                    <ModalProfile
                        key={modalType}
                        type={modalType}
                        onClose={() => setModalType(null)}
                        usuario={usuario}
                    />
                )}

            </main>

            <footer className="flex-shrink-0 w-full">
                <Footer />
            </footer>
        </AppLayout>


    );
}