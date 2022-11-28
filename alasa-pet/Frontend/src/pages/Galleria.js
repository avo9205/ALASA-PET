import { Link } from "react-router-dom";
import axios from "axios";
import CarritoCompras from '../components/CarritoCompras'
import routes from "../helpers/routes";
import { useState, useEffect } from "react";
import "../styles/Galleria.css";

// Hacemos referencia al END-POINT que creamos en el archivo faAppleAlt.js del backend
const URI = "http://localhost:3001/products/";

const Galleria = () => {
  // usamos los hooks
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  // creaos la funcion que me va a traer la informacion del backend
  const getProduct = async () => {
    //Pedimos la data
    const res = await axios.get(URI);
    //Mostramos la data
    setProducto(res.data);
  };

  return (
    <>
      <div className="galeria">
        <div className="productos">
          {producto.map((el, index) => (
            <div className="producto" key={index}>
              <img
                className="producto__img"
                src={require("../images/logo.png")}
                alt="producto"
              />
              <p className="producto__name">{el.nombre}</p>
              <span className="producto__price">${el.precio}</span>
              <Link to={routes.carrito}>
                <button className="producto__btn" onClick={() => getCarById(el._id)}>
                  Añadir al carrito
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Galleria;
