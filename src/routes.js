import React from 'react';

import LoginUser from './components/user/Login';
import RegisterUser from './components/user/RegisterUser';
import AmountOfPeopleUser from './components/user/AmountOfPeopleUser';
import Tables from './components/user/Tables';
import ProductList from './components/user/ProductList';
import Product from './components/user/Product';
import Ordered from './components/user/Ordered';
import OrderSummary from './components/user/OrderSummary';
import Payment from './components/user/Payment';
import PaymentMethod from './components/user/PaymentMethod'; 

import LoginEstablishment from './components/establishment/LoginEstablishment';
import RegisterEstablishment from './components/establishment/RegisterEstablishment';
import MenuEstablishment from './components/establishment/MenuEstablishment';
import ProductRegistration from './components/establishment/ProductRegistration';
import Demand from './components/establishment/Demand';
import CustomerDemand from './components/establishment/CustomerDemands';
import ProductEstablishment from './components/establishment/Products';
import EditProduct from './components/establishment/EditProduct';
import TablesEstablishment from './components/establishment/TablesEstablichment';
import RegisterTables from './components/establishment/RegisterTables';
import PaymentEstablishment from './components/establishment/PaymentEstablishment';
import PaymentEstablishmentEdit from './components/establishment/PaymentEstablishmentEdit';

import CallingAttendant from './components/user/CallingAttendant';
import AnimationPaymentSuccess from './components/animations/PaymentSuccess';

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
            {Auth.privateRoutes("/order-summary", <OrderSummary />)}
            {Auth.privateRoutes("/payment", <Payment />)}
            {Auth.privateRoutes("/payment-method", <PaymentMethod />)}

            <Route path="/login-establishment" element={ <LoginEstablishment /> } />
            <Route path="/register-establishment" element={ <RegisterEstablishment />} />
            {Auth.privateRoutes("/menu", <MenuEstablishment />)}
            {Auth.privateRoutes("/product-registration", <ProductRegistration />)}
            {Auth.privateRoutes("/demands", <Demand />)}
            {Auth.privateRoutes("/customer-demand", <CustomerDemand />)}
            {Auth.privateRoutes("/products-establishment", <ProductEstablishment />)}
            {Auth.privateRoutes("/edit-product", <EditProduct />)}
            {Auth.privateRoutes("/tables-establishment", <TablesEstablishment />)}
            {Auth.privateRoutes("/register-tables", <RegisterTables />)}
            {Auth.privateRoutes("/payment-establishment", <PaymentEstablishment />)}
            {Auth.privateRoutes("/payment-establishment-edit", <PaymentEstablishmentEdit />)}


            {/* <Route path="/menu" element={ <MenuEstablishment />} /> */}
            {/* <Route path="/product-registration" element={ <ProductRegistration /> } /> */}
            {/* <Route path="/demands" element={ <Demand /> } /> */}
            {/* <Route path="/customer-demand" element={ <CustomerDemand /> } /> */}
            {/* <Route path="/products-establishment" element={ <ProductEstablishment /> } /> */}
            {/* <Route path="/edit-product" element={ <EditProduct /> } /> */}
            {/* <Route path="/tables-establishment" element={ <TablesEstablishment /> } /> */}
            {/* <Route path="/register-tables" element={ <RegisterTables /> } /> */}
            {/* <Route path="/payment-establishment" element={ <PaymentEstablishment /> } /> */}
            {/* <Route path="/payment-establishment-edit" element={ <PaymentEstablishmentEdit /> } /> */}

            <Route path="/calling-attendant" element={ <CallingAttendant /> } />
            <Route path="/payment-success" element={ <AnimationPaymentSuccess /> } />
        </Routes>
    );
}