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
   return (
    <div id="container" className=" flex flex-col h-screen w-screen justify-center items-center gap-8 text-blue-950 bg-[#F3F4F6]">
        <img className="w-30" src={logoPegae} alt="" />
        <div className="w-80 h-3">
            <img className="border-2 bg-[#1E3A8A] rounded-lg p-1.5 w-9" src={arrow} alt="" />
        </div>
        
        <h1 className="font-bold text-2xl w-80 h-2">Criar Conta</h1>
        <form action="#" method="post" className="flex flex-col gap-4 items-center justify-center">
            <Input iconSrc={userOutline}
                    iconAlt="Icone Usuario"
                    type="text" 
                    placeholder="Nome Completo"
                    name="nomeCompleto"
            />
            <Input 
            iconSrc={email}
                    iconAlt="Icone email"
                    type="email" 
                    placeholder="E-mail Universitário(@uni9.edu.br"
                    name="email"
            />

            <Input 
            iconSrc={file}
                    iconAlt="Icone file"
                    type="number" 
                    placeholder="CPF / RA"
                    name="cpf_ra"
            />

            <Input 
            iconSrc={telephone}
                    iconAlt="Icone phonel"
                    type="tel" 
                    placeholder="Telefone"
                    name="telephone"
            />

            <Input 
            iconSrc={padlockOutline}
                    iconAlt="Icone cadeado"
                    type="password" 
                    placeholder="Senha"
                    name="password"
            />

            <Input 
            iconSrc={padlockOutline}
                    iconAlt="Icone cadeado"
                    type="password" 
                    placeholder="Confirmnar Senha"
                    name="password"
            />

            <Button_login_register type="submit" buttonText="Registrar" />
        </form>
    </div>
    

   ) 
}