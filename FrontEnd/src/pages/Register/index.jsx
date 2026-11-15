import { useState } from "react";
import { Input } from "../../components/Input";
import { Button_login_register } from "../../components/Button_login_register";
import { useNavigate } from "react-router-dom";
/* ICONS */
import { FiUser, FiMail, FiFileText, FiPhone, FiLock, FiArrowLeft } from "react-icons/fi";
import logoPegae from "../../assets/logoPegae.png";

export default function Register() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

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

      //alert("Cadastro realizado com sucesso!");
      navigate("/login");
      

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
    <div id="container" className="min-h-dvh w-full flex flex-col justify-center items-center gap-6 px-4 py-8 text-[#1E3A8A] bg-[#F3F4F6]">
      <img className="w-48 sm:w-52 h-auto" src={logoPegae} alt="logo pegae" />

      <div className="w-full max-w-sm flex flex-col justify-center">
        <button
          type="button"
          onClick={handleBack}
          className="bg-[#1E3A8A] rounded-lg p-1.5 w-8 h-8 flex items-center justify-center cursor-pointer opacity-100 hover:opacity-80"
          aria-label="Voltar"
        >
          <FiArrowLeft className="text-white text-xl" />
        </button>
      </div>

      <h1 className="font-bold text-2xl w-full max-w-sm">Criar Conta</h1>

      {errorMessage && (
        <p className="text-red-500 text-sm font-semibold">{errorMessage}</p>
      )}

      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-sm flex flex-col gap-4 items-center justify-center"
      >
        <Input
          icon={<FiUser />}
          type="text"
          placeholder="Nome Completo"
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleChange}
        />
        <Input
          icon={<FiMail />}
          type="email"
          placeholder="emailUniversitario@uni9.edu.br"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          icon={<FiFileText />}
          type="text"
          placeholder="Digite seu CPF"
          name="cpf_ra"  /* ajustei */
          value={formData.cpf_ra}
          onChange={handleChange}
        />

        <Input
          icon={<FiPhone />}
          type="tel"
          placeholder="Telefone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />

        <Input
          icon={<FiLock />}
          type="password"
          placeholder="Senha"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Input
          icon={<FiLock />}
          type="password"
          placeholder="Confirmar Senha"
          name="confirmPassword" /* ajustei */
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