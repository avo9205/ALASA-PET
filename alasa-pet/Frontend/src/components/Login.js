import "../styles/Login.css";
import Base from "../components/Base";
import { useState } from "react";

const Login = () => {
  
  const [email, setEmail] = useState("")
  return (
    <>
      <Base />
      <div className="container-login">
        <h2 className="title-login">Inicio de sesión</h2>
        <form className="form-login">
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              autoComplete="off"
              required
              value ={email}
              onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" autoComplete="off" required/>
          </div>
          <div className="input-group">
            <button type="submit">Iniciar sesion</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
