
import { BrowserRouter as Router, Routes, Route, Link,Switch } from "react-router-dom";
import Home from "../pages/Home";
import Perros from "../pages/Perros";
import Error404 from "../pages/Error404";
import NavBar from "./NavBar"
import Gatos from "../pages/Gatos";
import Login from "../components/Login"
import AgregarProductos from "../components/AgregarProductos";
import ListaVentas from "../components/ListaVentas";

const Rutas = () =>{
    return (
        <>     
        <Router>
        <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/perros" component={Perros}/>
                <Route exact path="/gatos" component={Gatos}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/crear-producto" component={AgregarProductos}/>
                <Route exact path="/lista-ventas" component={ListaVentas}/>
                <Route path="*" component={Error404}/>
            </Switch>
        </Router>
        
        </>
    )
}
export default Rutas