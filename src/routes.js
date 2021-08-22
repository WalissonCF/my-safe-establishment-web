import React from 'react';

import LoginUser from './components/Login';
import RegisterUser from './components/RegisterUser';

import { Route, Routes } from 'react-router-dom';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <LoginUser /> } />
            <Route path="/register" element={ <RegisterUser /> } />
        </Routes>
    );
}