export function App() {
  return(
    <div className="container">
      <div className="logoLogin">
        <img src="../assets/logoPegae.jpg" alt="logo marca da Pegaê" />
      </div>
      <form action="#">
        <div className="input-group">
          <img src="./assets/icons/user.png" alt="" className="input-icon" />
          <input type="text" placeholder="RA ou E-mail Universitário" name="RA_email"/>
          <input type="password" placeholder="Senha" name="password" />
          <button type="submit">Entrar</button>
        </div>
      </form>
      <div className="esqueceu_senha">
        <p>Esqueceu a senha?</p>
      </div>
      <div className="register">
      <p>Não tem conta?</p>
      <button id="register">Registrar - se</button>
      </div>
      <div id="sign_gmail">
        <img src="./" alt="" />
      </div>
    </div>   
  
  )
}