import { Redirect, Route, useLocation } from "react-router-dom"
import useAuth from '../auth/useAuth'
import routes from "../helpers/routes";

const PrivateRoute = ({ hasRole: role, ...props }) =>{

    const location = useLocation()

    console.log(location)
    
    const {hasRole, isLogged} = useAuth();

    if(role && !hasRole(role)) return (<Redirect to={routes.home}/>)

    if(!isLogged()) return <Redirect to={{ pathname: routes.login, state: { from: location } }}/>

    return(
        <Route {...props}/>
    )
}

export default PrivateRoute