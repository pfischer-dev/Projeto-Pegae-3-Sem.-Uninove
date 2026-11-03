import { useState } from "react";
import { Input } from "../Input";
import { FiUser, FiLock } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
import logoPegae from "../../assets/logoPegae.png";

export function ModalProfile({ type, onClose, usuario }) {
    const isProfile = type === "perfil";
    const [ formData, setFormData ] = useState({
        name: usuario.name,
        email: usuario.email,
        cpf_ra: usuario.cpf_ra,
        telephone: usuario.telephone
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md max-h-[90dvh] overflow-y-auto bg-white p-6 rounded-2xl shadow-xl">

                {/* Cabeçalho */}
                <div className="flex justify-between items-center">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-100 text-amber-700">
                        {isProfile ? <FiUser /> : <FiLock />}
                    </div>

                    <button 
                    type="button" 
                    onClick={() => {
                        console.log("Fechando modal:", type);
                        onClose();
                    }}>
                        <RiCloseLargeLine className="text-2xl text-gray-500" />
                    </button>
                </div>

                <h2 className="text-xl font-bold text-[#1E3A8A] mt-4">
                    {isProfile ? "Editar perfil" : "Alterar senha"}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                    {isProfile
                        ? "Mantenha seus dados atualizados."
                        : "Escolha uma nova senha para sua conta."}
                </p>

                {/* Aqui entra o formulário de cada modalidade */}

            </div>
        </div>
    )

}