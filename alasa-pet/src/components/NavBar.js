
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <>
    <main>
      <nav className="menu">
          <Link className="menu__link" to="/">Home</Link>
          <Link className="menu__link" to="/perros">Perros</Link>
          <Link className="menu__link" to="/gatos" >Gatos</Link>
          <Link className="menu__link" to="/roedores" >Roedores</Link>
          <Link className="menu__link" to="/pajaros" >Pajaros</Link>
      </nav>

    </main>
    
    </>
  
  )
};

export default NavBar;
