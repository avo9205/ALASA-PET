import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import roles from "../helpers/roles";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const history = useHistory()
  const [user, setUser] = useState(null);

  const login = (userCredentials, fromLocation) => {
    setUser({ role: roles.admin });
    if(fromLocation) history.push(fromLocation)
  };
  const logout = () => setUser(null);

  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
