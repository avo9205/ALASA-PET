
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <>
    <main>
      <nav className="menu">
          <Link className="menu__link" to={routes.home}>Home</Link>
          <Link className="menu__link" to={routes.perros}>Productos</Link>
          <Link className="menu__link" to={routes.crearProducto} >Crear producto</Link>
          <Link className="menu__link" to={routes.ventas} >ventas</Link>
          <Link className="menu__link" to={routes.carrito} >Carritos</Link>
      </nav>

    </main>
    
    </>
  
  )
};

export default NavBar;
