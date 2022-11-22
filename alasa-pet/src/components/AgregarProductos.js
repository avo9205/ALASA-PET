import "../styles/AgregarProductos.css";
import Base from "../components/Base";

const AgregarProductos = () => {
  return (
    <>
    <Base />
      <div className="container-form">
        <h2 className="title-form">Ingresar productos</h2>
        <form className="form-ingresar-productos">
          <div className="form-input">
            <input type="text" placeholder="Nombre producto" required/>
          </div>
          <div className="form-input">
            <input type="file"/>
          </div>
          <div className="form-input">
            <input type="text" placeholder="Precio producto" required/>
          </div>
          <div className="form-input">
            <input type="text" placeholder="Descripción" required/>
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
