import React from 'react';

import LoginUser from './components/user/Login';
import RegisterUser from './components/user/RegisterUser';
import AmountOfPeopleUser from './components/user/AmountOfPeopleUser';
import Tables from './components/user/Tables';
import ProductList from './components/user/ProductList';
import Product from './components/user/Product';
import Ordered from './components/user/Ordered';
import Payment from './components/user/Payment';
import PaymentMethod from './components/user/PaymentMethod'; 
import CallingAttendant from './components/user/CallingAttendant';

import LoginEstablishment from './components/establishment/LoginEstablishment';
import RegisterEstablishment from './components/establishment/RegisterEstablishment';
import ProductRegistration from './components/establishment/ProductRegistration';

import Auth from './auth';

import { Route, Routes } from 'react-router-dom';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <LoginUser /> } />
            <Route path="/register" element={ <RegisterUser /> } />
            {Auth.privateRoutes("/amount-of-people-user", <AmountOfPeopleUser />)}
            {Auth.privateRoutes("/tables", <Tables />)}
            {Auth.privateRoutes("/product-list", <ProductList />)}
            {Auth.privateRoutes("/product", <Product />)}
            {Auth.privateRoutes("/ordered", <Ordered />)}
            {Auth.privateRoutes("/payment", <Payment />)}
            {Auth.privateRoutes("/payment-method", <PaymentMethod />)}
            <Route path="/calling-attendant" element={ <CallingAttendant /> } />

            <Route path="/login-establishment" element={ <LoginEstablishment /> } />
            <Route path="/register-establishment" element={ <RegisterEstablishment />} />
            <Route path="/product-registration" element={ <ProductRegistration /> } />
        </Routes>
    );
}