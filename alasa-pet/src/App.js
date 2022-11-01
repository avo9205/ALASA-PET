import './App.css';
import Banner from './components/Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <header className="contenedor-header">
        <div className='texto-left'>Tienda de mascotas - alasa pet</div>
        <div className='texto-right'>Contactar - 4446950</div>
        <div className='logo'>
          <a href='/'><img className="logo-imagen" 
          src={require("./images/logo.png")} alt='logo'/></a>
        </div>
        <div className='contenedor-busqueda'>
          <div className='contenedor-form'>
            <form className='form-busqueda'>
              <input className='input' itemType='text' placeholder='Búsqueda en catálogo'/>
            </form>
          </div>
        </div>
        <div className='carrito'>
          <a href='/'>
            <FontAwesomeIcon icon={faCartShopping}/>
          </a>
        </div>
      </header>


      <Banner/>
    </div>
  );
}

export default App;
