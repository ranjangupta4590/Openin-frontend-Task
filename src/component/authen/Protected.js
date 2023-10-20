import React from 'react';
import { Navigate } from 'react-router-dom';
import {Outlet} from 'react-router-dom';
// import Home from '../Home';

const Protected = () => {

    const token=localStorage.getItem('token');
    
    return(
        token ? <Outlet/> :<Navigate to='/signin'/>
    )
};

export default Protected;
