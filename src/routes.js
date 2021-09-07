import React from 'react';

import LoginUser from './components/user/Login';
import RegisterUser from './components/user/RegisterUser';
import AmountOfPeopleUser from './components/user/AmountOfPeopleUser';

import LoginEstablishment from './components/establishment/LoginEstablishment';
import RegisterEstablishment from './components/establishment/RegisterEstablishment';

import Auth from './auth';

import { Route, Routes } from 'react-router-dom';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <LoginUser /> } />
            <Route path="/register" element={ <RegisterUser /> } />
            {/* <Route path="/amount-of-people-user" element= { <AmountOfPeopleUser /> } /> */}

            {Auth.privateRoutes("/amount-of-people-user", <AmountOfPeopleUser />)}

            <Route path="/login-establishment" element= { <LoginEstablishment /> } />
            <Route path="/register-establishment" element={ <RegisterEstablishment />} />
        </Routes>
    );
}