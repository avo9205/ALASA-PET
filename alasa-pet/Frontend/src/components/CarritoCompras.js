import axios from "axios";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/CarritoCompras.css"
import URL from "../helpers/ApiRest";

// Hacemos referencia al END-POINT que creamos en el archivo faAppleAlt.js del backend
const URI = "http://localhost:3001/products/";

const CarritoCompras = () => {
  const [productos, setProductos] = useState([]);
  const [cars, setCars] = useState([]);

  let nombre;
  let precio;
  let cantidad;
  let idProcuto;
  // const navigate = useNavigate()
  const { id } = useParams();

  // agregar un producto al carrito de compras
  const getCarById = async (id) => {
    console.log(`Llego con el ${id}`);
    const res = await axios.get(URI + id);
    nombre = res.data.nombre;
    precio = res.data.precio;
    cantidad = res.data.cantidad;
    idProcuto = res.data.id;

    createCars();
  };
  //  Método para crear y guardar un producto al carrito de compras
  const createCars = async () => {
    await axios.post(URI, {
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
      idProcuto: idProcuto,
    });
    getCars();
  };

  // Mostrar todos los ítems del carrito de compras
  const getCars = async () => {
    const res = await axios.get(URI);
    setCars(res.data);
  };

  // borrar productos del carrito
  const deleteCars = async (id) => {
    await axios.delete(URI + id);
  };

  return (
    <>
      <Base/>
      <div className="contenedor-carrito">
        <h2 className="carrito-title">Tienes 2 articulos en tu cesta</h2>
        <table className="carrito-table">
          <thead>
            <tr className="row-header">
              <th className="row-header__item">Producto</th>
              <th className="row-header__item">Precio</th>
              <th className="row-header__item">Opciones</th>
            </tr>
          </thead>
          <tbody>          
              <tr className="tbody-row">
                <td className="tbody-row__item">Cuido</td>
                <td className="tbody-row__item">2000</td>
                <td className="tbody-row__item">
                <botton className="table-btn">
                  Delete
                </botton>
                </td>
              </tr>          
              <tr className="tbody-row">
                <td className="tbody-row__item">Cuido</td>
                <td className="tbody-row__item">2000</td>
                <td className="tbody-row__item">
                <botton className="table-btn">
                  Delete
                </botton>
                </td>
              </tr>          
          </tbody>
        </table>
        <button className="btn-pagar">Ir a pagar</button>
      </div>
    </>
  );
};

export default CarritoCompras;
