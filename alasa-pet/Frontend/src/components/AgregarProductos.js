import axios from "axios";
import { useState} from "react";
import {Redirect} from "react-router-dom"
import "../styles/AgregarProductos.css";
import Base from "../components/Base";
import routes from "../helpers/routes";

const URI = 'http://localhost:3001/products/'

const AgregarProductos = () => {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [cantidad, setCantidad] = useState('')

  // configuramos el navegador
  // const navigate = useNavigate()

  // Vamos a crear un procedimiento para crear un producto
  const nuevo = async(e) =>{
    await axios.post(URI, {nombre:nombre, descripcion:descripcion, precio:precio,cantidad:cantidad})
    return <Redirect to={routes.productos}/>
    
  }


  return (
    <>
    <Base />
      <div className="container-form">
        <h2 className="title-form">Ingresar productos</h2>
        <form className="form-ingresar-productos" onSubmit={nuevo}>
          <div className="form-input">
            <input 
              value={nombre} 
              onChange={(e)=>setNombre(e.target.value)}
              type="text" 
              placeholder="Producto" 
              required
            />
          </div>
          <div className="form-input">
            <input 
              value={descripcion}
              onChange={(e)=>setDescripcion(e.target.value)}
              type="text" 
              placeholder="Descripción" 
              required
            />
          </div>
          <div className="form-input">
            <input 
              value={precio}
              onChange={(e)=>setPrecio(e.target.value)}
              type="text" 
              placeholder="Precio" 
              required
            />
          </div>
          <div className="form-input">
            <input 
              value={cantidad}
              onChange={(e)=>setCantidad(e.target.value)}
              type="text" 
              placeholder="Cantidad" 
              required
            />
          </div>
          <div className="form-input">
          <button type="submit">Guardar</button>
          </div>

        </form>
      </div>
    </>
  );
};

export default AgregarProductos;
