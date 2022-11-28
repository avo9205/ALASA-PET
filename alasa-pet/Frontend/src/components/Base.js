import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
import routes from "../helpers/routes";

const Base = () => {
  return (
    <>
      <header className="contenedor-header">
        <div className="texto-left">Tienda de mascotas - alasa pet</div>
        <div className="texto-right">Contactar - 4446950</div>
        <div className="logo">
          <Link to={routes.home}>
            <img
              className="logo-imagen"
              src={require("../images/logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="contenedor-busqueda">
          <div className="contenedor-form">
            <form className="form-busqueda">
              <button type="submit" className="buscar-icono">
              <FontAwesomeIcon icon={faMagnifyingGlass} />                
              </button>
              <input
                className="input"
                type="text"
                placeholder="Búsqueda en catálogo"
              />
            </form>
          </div>
        </div>
        <div className="login">
          <Link to={routes.login} title="Iniciar sesión">
            <FontAwesomeIcon icon={faUser} className="prueba"/>
          </Link>
        </div>
        <div className="carrito">
          <a href="#" title="Carrito">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Base;
