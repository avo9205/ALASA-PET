import "../styles/Login.css";
import Base from "../components/Base";
import { useState } from "react";
import useAuth from "../auth/useAuth";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [body, setBody] = useState({ email:'', password:'' })

  // const location = useLocation()
  // console.log(location)
  
  // const [email, setEmail] = useState("")
  // const {login} = useAuth()

  const inputChange = ({target}) =>{
    const {name, value} = target
    setBody({
      ...body,
      [name]:value
    })
  }

  const onsubmit = (e) =>{
    e.preventDefault()
    console.log(body)
  }

  return (
    <>
      <Base />
      <div className="container-login">
        <h2 className="title-login">Inicio de sesión</h2>
        <form className="form-login" >
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              autoComplete="off"
              required
              value ={body.user}
              onChange={inputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              autoComplete="off" 
              required
              value={body.password}
              onChange={inputChange}
            />
          </div>
          <div className="input-group">
            <button  
              onClick={onsubmit}
            >
            Iniciar sesion
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
