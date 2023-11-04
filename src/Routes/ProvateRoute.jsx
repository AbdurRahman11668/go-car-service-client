import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from "prop-types";


const ProvateRoute = () => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default ProvateRoute;