import { useState } from "react";
import { Input } from "../Input";
import { FiUser, FiLock, FiMail, FiFileText, FiPhone } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
import logoPegae from "../../assets/logoPegae.png";

export function ModalProfile({ type, onClose, usuario, onSave }) {
    const isProfile = type === "perfil";
    const [formData, setFormData] = useState({
        name: usuario.name,
        email: usuario.email,
        cpf_ra: usuario.cpf_ra,
        telephone: usuario.telephone
    });
    const [ senhaData, setSenhaData ] = useState({
        senhaAtual: "",
        novaSenha: "",
        confirmarSenha: ""
    });

    const [msgErro, setMsgErro ] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    // funcao para salvar os dados atualizados
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Dados Atualizados", formData);

        onSave({
            ...usuario,
            ...formData
        });
        onClose();
    }

    function handlePasswordChange(e) {
        const { name, value} = e.target;

        setSenhaData(prev => ({
            ...prev,
            [name]: value
        }));
        setMsgErro("");
    }

    function handlePasswordSubmit(e) {
        e.preventDefault();

        if(senhaData.senhaAtual !== usuario.password.senhaAtual) {
            setMsgErro("Senha atual incorreta!");
            return;
        }

        if(senhaData.novaSenha.length < 6) {
            setMsgErro("A nova senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if(senhaData.novaSenha !== senhaData.confirmarSenha) {
            setMsgErro("As senhas não coincidem!");
            return;
        }

        if(senhaData.novaSenha === senhaData.senhaAtual) {
            setMsgErro("A nova senha deve ser diferente da senha atual")
        }

        onSave({
            ...usuario,
            password: {
                ...usuario.password,
                senhaAtual: senhaData.novaSenha
            }
        });
        onClose();
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md max-h-[90dvh] overflow-y-auto bg-white p-6 rounded-2xl shadow-xl">

                {/* Cabeçalho */}
                <div className="flex justify-between items-center">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-100 text-amber-700">
                        
                        {isProfile ? <FiUser /> : <FiLock />}
                        
                    </div>
                    <img src={logoPegae} alt="logoPegae" className="w-22 flex justify-center" />
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
                {isProfile && (
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col gap-3 mt-4"
                    >
                        <Input
                            icon={<FiUser />}
                            type="text"
                            placeholder="Nome Completo"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <Input
                            icon={<FiMail />}
                            type="email"
                            placeholder="E-mail Universitário"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <Input
                            icon={<FiFileText />}
                            type="text"
                            placeholder="Digite o CPF"
                            name="cpf_ra"
                            value={formData.cpf_ra}
                            onChange={handleChange}
                        />

                        <Input
                            icon={<FiPhone />}
                            type="text"
                            placeholder="Telefone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition mt-2"
                        >
                            Salvar alterações
                        </button>
                    </form>
                    
                )}
                {!isProfile && (
                    <form
                        onSubmit={handlePasswordSubmit}
                        className="w-full flex flex-col gap-3 mt-4"
                    >

                        <Input
                            icon={<FiLock />}
                            type="password"
                            placeholder="Digite a senha atual"
                            name="senhaAtual"
                            value={senhaData.senhaAtual}
                            onChange={handlePasswordChange}
                        />

                        <Input
                            icon={<FiLock />}
                            type="password"
                            placeholder="Digite a Nova Senha"
                            name="novaSenha"
                            value={senhaData.novaSenha}
                            onChange={handlePasswordChange}
                        />

                        <Input
                            icon={<FiLock />}
                            type="password"
                            placeholder="Confirmar Senha"
                            name="confirmarSenha"
                            value={senhaData.confirmarSenha}
                            onChange={handlePasswordChange}
                        />
                        
                        {msgErro && (
                            <p className="text-sm text-red-600 text-center">
                                {msgErro}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition mt-2"
                        >
                            Atualizar Senha
                        </button>
                    </form>
                )}

                

            </div>
        </div>
    )

}