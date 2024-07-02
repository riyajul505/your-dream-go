import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading){
        return <div>Loading...........</div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;