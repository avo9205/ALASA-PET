import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Base from "./Base";

// Hacemos referencia al END-POINT que creamos en el archivo faAppleAlt.js del backend
const URI = "http://localhost:3001/products/";

// Creamos la row function

const ListarProductos = () => {
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

  // Luego vamos a proceder con el retorno de la data
  return (
    <>
    <Base/>
    <div className="container-tabla">
    <Link className="add-product" to="/crear-producto">Nuevo producto</Link>
        <table className="table">
          <thead>
            <tr className="main-row">
              <th className="main-row__item">Nombre</th>
              <th className="main-row__item">Descripcion</th>
              <th className="main-row__item">Precio</th>
              <th className="main-row__item">Cantidad</th>
              <th className="main-row__item">Opciones</th>
     
            </tr>
          </thead>
          <tbody >
          {producto.map((el, index) => (
            <tr className="body-row" key={index}>
              <td className="body-row__item">{el.nombre}</td>
              <td className="body-row__item">{el.descripcion}</td>
              <td className="body-row__item">{el.precio}</td>
              <td className="body-row__item">{el.cantidad}</td>
              <Link className="btn-blue" to="#">Update</Link>
              <Link className="btn-red" to="#">Delete</Link>

            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListarProductos;
