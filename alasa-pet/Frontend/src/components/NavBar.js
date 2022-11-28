
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <>
    <main>
      <nav className="menu">
          <Link className="menu__link" to={routes.home}>Home</Link>
          <Link className="menu__link" to={routes.perros}>Galleria</Link>
          <Link className="menu__link" to={routes.crearProducto} >Crear producto</Link>
          <Link className="menu__link" to={routes.ventas} >Ventas</Link>
          <Link className="menu__link" to={routes.carrito} >Carritos</Link>
          <Link className="menu__link" to={routes.productos} >Productos</Link>
      </nav>

    </main>
    
    </>
  
  )
};

export default NavBar;
