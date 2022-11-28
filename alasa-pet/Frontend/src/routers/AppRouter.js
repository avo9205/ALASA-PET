
import { Routes, Route, Link,Switch } from "react-router-dom";
import Home from "../pages/Home";
import Perros from "../pages/Perros";
import Galleria from "../pages/Galleria";
import Error404 from "../pages/Error404";
import NavBar from "../components/NavBar"
import Gatos from "../pages/Gatos";
import Login from "../components/Login"
import AgregarProductos from "../components/AgregarProductos";
import ListaVentas from "../components/ListaVentas";
import ListarProductos from '../components/ListarProductos'
import PrivateRoute from "../routers/PrivateRoute";
import PublicRoute from "../routers/PublicRoute";
import roles from "../helpers/roles";
import routes from "../helpers/routes";
import CarritoCompras from "../components/CarritoCompras";


const AppRouter = () =>{
    return (
        <>  
        
        <NavBar/>
            <Switch>
                <Route exact path={routes.home} component={Home}/>
                <Route exact path={routes.perros} component={Perros}/>
                <Route exact path={routes.galleria} component={Galleria}/>
                <Route exact path={routes.carrito} component={CarritoCompras}/>
                <PublicRoute exact path={routes.login} component={Login}/>
                <PrivateRoute exact path={routes.crearProducto} component={AgregarProductos}/>
                <PrivateRoute exact path={routes.ventas} component={ListaVentas}/>
                <PrivateRoute exact path={routes.productos} component={ListarProductos}/>
                <PrivateRoute exact path={routes.carrito} component={CarritoCompras}/>
                <PrivateRoute exact path={routes.productos} component={CarritoCompras}/>
                <Route path="*" component={Error404}/>
            </Switch>
        
        </>
    )
}
export default AppRouter