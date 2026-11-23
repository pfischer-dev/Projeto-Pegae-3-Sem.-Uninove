import logoPegae from "../../assets/logoPegae.png";
import user from "../../assets/icons/user.png";
import padlock from "../../assets/icons/padlock.png";
import gmail from "../../assets/icons/gmail.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button_login_register } from "../../components/Button_login_register";



export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: "",
      password: ""
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

      if (!formData.email || !formData.password) {
        setErrorMessage("Preencha o e-mail e a senha.");
        return;
      }

      setLoading(true);

      try {
        const response = await fetch("http://localhost:3001/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: formData.email,
            senha: formData.password
          })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.mensagem || data.message || "E-mail ou senha incorretos.");
        }

        localStorage.setItem("usuario", JSON.stringify(data.usuario));

        navigate("/home");

      } catch (err) {
        console.error("Erro no login:", err);
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
  
  return (
    <main className="min-h-dvh w-full bg-[#F3F4F6] text-blue-950 flex justify-center items-center px-4 py-8 sm:px-6">

      <div className="w-full max-w-md flex flex-col items-center gap-10 bg-[#F3F4F6]">

        <div className="flex flex-col justify-center items-center">
          <img src={logoPegae} alt="logo marca da Pegaê" className="w-48 sm:w-52 h-auto" />
          <h3>Peça seu lanche e retire sem filas</h3>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">

          <div className="w-full flex flex-col items-center gap-3">
            <Input iconSrc={user}
              iconAlt="Icone Usuario"
              type="text"
              placeholder="E-mail Universitário"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />

            <Input iconSrc={padlock}
              iconAlt="icone de cadeado"
              type="password"
              placeholder="Senha"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          {/* Validação Senha */}
          {errorMessage && (
            <p className="text-red-600 text-sm font-medium text-center">
              {errorMessage}
            </p>
          )}

          <div className="w-full flex justify-center">
            <Button_login_register type="submit" buttonText="Entrar" />
          </div>
        </form>

        <div className="esqueceu_senha w-full text-center">
          <p>Esqueceu a senha?</p>
        </div>
        
        <div className="w-full flex flex-col items-center gap-4">

          <div className="w-full max-w-[280px] flex flex-wrap items-center justify-center gap-1 border-2 border-blue-950 p-3 rounded-md">

            <p>Não tem conta?</p>

            <Link to={'/register'}>
              <button id="register" className="font-bold cursor-pointer opacity-80 hover:text-amber-600">
                Registrar - se
              </button>
            </Link>

          </div>
          <img src={gmail} alt="logo gmail" className=" w-8 h-8" />
        </div>
      </div>
    </main>

  )
}