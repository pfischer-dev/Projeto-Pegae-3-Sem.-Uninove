import { useState } from "react";
import { Input } from "../../components/Input";
import { Button_login_register } from "../../components/Button_login_register";

/* ICONS */
import userOutline from "../../assets/icons/userOutline.png";
import email from "../../assets/icons/email.png";
import file from "../../assets/icons/file.png";
import telephone from "../../assets/icons/telephone.png";
import padlockOutline from "../../assets/icons/padlockOutline.png";
import arrow from "../../assets/icons/arrow.png";
import logoPegae from "../../assets/logoPegae.png";

export default function Register() {
        const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    cpf_ra: "",
    telephone: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    console.log("Dados do formulário enviados:", formData);

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("As senhas não coincidem!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nomeCompleto: formData.nomeCompleto,
          email: formData.email,
          cpf_ra: formData.cpf_ra,
          telephone: formData.telephone,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.mensagem || data.message || "Erro ao realizar o cadastro.");
      }

      alert("Cadastro realizado com sucesso!");
      
      setFormData({
        nomeCompleto: "",
        email: "",
        cpf_ra: "",
        telephone: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.error("Erro no cadastro:", err);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

   return (
    <div id="container" className=" flex flex-col h-screen w-screen justify-center items-center gap-8 text-[#1E3A8A] bg-[#F3F4F6]">
        <img className="w-30" src={logoPegae} alt="" />
        <div className="w-80 flex flex-col justify-center ">
            <img className="bg-[#1E3A8A] rounded-lg p-1.5 w-7" src={arrow} alt="" />
        </div>
        
        <h1 className="font-bold text-2xl w-80 h-2">Criar Conta</h1>
        
        {errorMessage && (
        <p className="text-red-500 text-sm font-semibold">{errorMessage}</p>
      )}

        <form action="#" method="post" className="flex flex-col gap-4 items-center justify-center">
            <Input iconSrc={userOutline}
                    iconAlt="Icone Usuario"
                    type="text" 
                    placeholder="Nome Completo"
                    name="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
            />
            <Input 
            iconSrc={email}
                    iconAlt="Icone email"
                    type="email" 
                    placeholder="emailUniversitario@uni9.edu.br"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
            />

            <Input 
            iconSrc={file}
                    iconAlt="Icone file"
                    type="text" 
                    placeholder="Digite seu CPF"
                    name="cpf"
                    value={formData.cpf_ra}
                    onChange={handleChange}
            />

            <Input 
            iconSrc={telephone}
                    iconAlt="Icone phonel"
                    type="tel" 
                    placeholder="Telefone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
            />

            <Input 
            iconSrc={padlockOutline}
                    iconAlt="Icone cadeado"
                    type="password" 
                    placeholder="Senha"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
            />

            <Input 
            iconSrc={padlockOutline}
                    iconAlt="Icone cadeado"
                    type="password" 
                    placeholder="Confirmar Senha"
                    name="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
            />

            <Button_login_register 
            type="submit" 
            buttonText={loading ? "Cadastrando..." : "Registrar"}
            disabled={loading} />
        </form>
    </div>
   ) 
}