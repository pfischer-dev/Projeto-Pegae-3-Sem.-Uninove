import logoPegae from "../../assets/logoPegae.png";
import user from "../../assets/icons/user.png";
import padlock from "../../assets/icons/padlock.png";
import gmail from "../../assets/icons/gmail.png";
import { Input } from "../../components/Input";
import { Button_login_register } from "../../components/Button_login_register";

export default function Login() {
    return (
        <div className="container flex flex-col h-screen w-screen justify-center items-center gap-9 text-blue-950 bg-[#F3F4F6]">

      <div className="logoLogin">
        <img src={logoPegae} alt="logo marca da Pegaê" className="w-48 h-auto"/>
      </div>
      
      <form action="#" method="post" className="flex flex-col gap-3 items-center justify-center">
        <Input iconSrc={user}
        iconAlt="Icone Usuario"
        type="text" 
        placeholder="RA ou E-mail Universitário"
        name="RA_email"
        />
       
        <Input iconSrc={padlock}
        iconAlt="icone de cadeado"
        type="password" 
        placeholder="Senha"
        name="password"
        />
        <Button_login_register type="submit" buttonText="Entrar"/> 
      </form>
      
      <div className="esqueceu_senha">
        <p>Esqueceu a senha?</p>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="register flex gap-1 border-2 border-b-blue-950 p-2 rounded-md w-70 justify-center-safe">
          <p>Não tem conta?</p>
          <button id="register" className="font-bold">Registrar - se</button>
        </div>
        <img src={gmail} alt="logo gmail" className=" w-8 h-8" /> 
      </div>
    </div>
    )
}