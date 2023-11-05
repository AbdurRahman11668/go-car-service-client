import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <img className="loading loading-infinity loading-lg" src="https://i.ibb.co/0X36zNZ/tv-loading.gif"></img>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;