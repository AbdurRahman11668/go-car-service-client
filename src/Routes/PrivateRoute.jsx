import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <img className="mx-auto mt-20" src="https://i.ibb.co/b5Pj7cT/car-dealer-loader-gif.gif"></img>
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