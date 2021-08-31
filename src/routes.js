import React from 'react';

import LoginUser from './components/user/Login';
import RegisterUser from './components/user/RegisterUser';
import LoginEstablishment from './components/establishment/LoginEstablishment';
import RegisterEstablishment from './components/establishment/RegisterEstablishment';

import { Route, Routes } from 'react-router-dom';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <LoginUser /> } />
            <Route path="/register" element={ <RegisterUser /> } />

            <Route path="/login-establishment" element= { <LoginEstablishment /> } />
            <Route path="/register-establishment" element={ <RegisterEstablishment />} />
        </Routes>
    );
}