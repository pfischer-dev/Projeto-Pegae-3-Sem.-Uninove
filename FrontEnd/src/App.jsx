import logoPegae from "./assets/test4.jpg";
import user from "./assets/icons/user.png";
import padlock from "./assets/icons/padlock.png";
import gmail from "./assets/icons/gmail.png";

export function App() {
  return(
    <div className="container flex flex-col h-screen w-screen justify-center items-center gap-8 text-blue-950">
      
      <div className="logoLogin">
        <img src={logoPegae} alt="logo marca da Pegaê" className="w-48 h-auto"/>
      </div>
      
      <form action="#" method="post" className="flex flex-col gap-3 ">

        <div className="input-group w-80 flex gap-2 border-2 rounded-lg p-1.5 ">
          <img src={user} alt="" className="input-icon w-5 h-5" />
          <input type="text" placeholder="RA ou E-mail Universitário" name="RA_email" className="w-80"/>
        </div>

        <div className="input-group w-80 flex gap-2 border-2 rounded-lg p-1.5">
          <img src={padlock} alt="icone de cadeado" className="input-icon  w-5 h-5"/>
          <input type="password" placeholder="Senha" name="password" />
        </div>

        <button type="submit" className="bg-amber-600 border-0 rounded-3xl p-1.5">Entrar</button>

      </form>

      <div className="esqueceu_senha">
        <p>Esqueceu a senha?</p>
      </div>

      <div className="register flex gap-1 border-2 border-b-blue-950 p-2 rounded-md w-70 justify-center-safe">
      <p>Não tem conta?</p>
      <button id="register" className="font-bold">Registrar - se</button>
      </div>
      <div id="sign_gmail">
        <img src={gmail} alt="logo gmail" />
      </div>
    </div>   

  )
}