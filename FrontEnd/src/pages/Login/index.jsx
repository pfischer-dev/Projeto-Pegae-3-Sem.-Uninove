import logoPegae from "../../assets/logoPegae.png";
import user from "../../assets/icons/user.png";
import padlock from "../../assets/icons/padlock.png";
import gmail from "../../assets/icons/gmail.png";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button_login_register } from "../../components/Button_login_register";

export default function Login() {
    return (
      <main className="min-h-screen w-full bg-[#F3F4F6] text-blue-950 flex justify-center items-center px-4 py-8 sm:px-6">

        <div className="w-full max-w-md flex flex-col items-center gap-8 bg-[#F3F4F6]">
          
          {/*VERSAO ORIGINAL CRIADO POR MIM container flex flex-col h-screen w-screen justify-center items-center gap-9 text-blue-950 bg-[#F3F4F6] */}
          <div className="logoLogin flex flex-col justify-center">
            <img src={logoPegae} alt="logo marca da Pegaê" className="w-48 sm:w-52 h-auto"/>
            <h3>Peça seu lanche e retire sem filas</h3>
          </div>
      
          <form action="#" method="post" className="w-full flex flex-col items-center gap-4">
            {/* flex flex-col gap-3 items-center justify-center*/}

            <div className="w-full flex flex-col items-center gap-3"> {/* essa div nao existia */}
              <Input iconSrc={user}
            iconAlt="Icone Usuario"
            type="text" 
            placeholder="E-mail Universitário"
            name="email"
            />
          
            <Input iconSrc={padlock}
            iconAlt="icone de cadeado"
            type="password" 
            placeholder="Senha"
            name="password"
            />
            </div>
            
            <div className="w-full flex justify-center">
              <Button_login_register type="submit" buttonText="Entrar"/> 
            </div>
          </form>
          
          <Link>
            <div className="esqueceu_senha w-full text-center">
              <p>Esqueceu a senha?</p>
            </div>
          </Link>
          
          <div className="w-full flex flex-col items-center gap-4">
            
            <div className="register w-70 flex flex-wrap items-center justify-center gap-1 border-2 border-blue-950 p-3 rounded-md">
              
              <p>Não tem conta?</p>
              
              <Link to={'/register'}>
                <button id="register" className="font-bold">
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