import axios from 'axios';
import authService from '../auth';

const TABLE = 'https://my-safe-establishment-company.herokuapp.com/private/owner/tables';
const PRODUCTS = 'https://my-safe-establishment-company.herokuapp.com/private/owner/products'
const ORDER = 'https://my-safe-establishment-company.herokuapp.com/private/order/register';
const CREATE_ORDER_PAD = 'https://my-safe-establishment-company.herokuapp.com/private/orderpad/create';

const customerId = parseInt(localStorage.getItem("customerId"));

const userService = {
    requestLogin(url, document, phone) {
        debugger;
        const cpf = document?.replace(/[^0-9]/g, '');
        const phoneNumber = phone?.replace(/[^0-9]/g, '');
        console.log(cpf, phoneNumber);

        axios.post(url, { cpf, phoneNumber }).then((res) => {
            console.log(res)
            if (res.status === 200) {
                authService.setLoggedUser(res.data, res.data.name,
                    res.data.token, res.data.customerId);
                localStorage.setItem("customerId", res.data.customerId);
                window.location = "/amount-of-people-user";
                console.log(res);
            } else {
                window.location = "/";
            }
        });
    },

    requestRegister(url, name, phone, document) {
        const cpf = document?.replace(/[^0-9]/g, '');
        const phoneNumber = phone?.replace(/[^0-9]/g, '');
        console.log(cpf, phoneNumber);
        axios.post(url, { name, phoneNumber, cpf })
            .then((res) => {
                if (res.status === 200) {
                    authService.setLoggedUser(res.data, cpf);
                    window.location = "/amount-of-people-user";
                } else {
                    window.location = "/register";
                }
            });
    },

    postCreateOrderPad() {
        const tableId = parseInt(localStorage.getItem("table"));
        const quantityCustomer = parseInt(localStorage.getItem("quantityCustomer"));
        axios.post(CREATE_ORDER_PAD, { customerId, quantityCustomer, tableId })
            .then((res) => {
                console.log(res)
                localStorage.setItem("postCreateOrderPad", JSON.stringify(res))
            });
    },

    postOrder() {
        const productIds = localStorage.getItem("index");
        const product = parseInt(productIds)
        const quantityProduct = localStorage.getItem("quantityProduct");
        const quantitys = parseInt(quantityProduct);
        let orders = [
            {
                productId: product,
                quantity: quantitys,
            }
        ];
        console.log(orders);
        debugger;
        axios.post(ORDER, { customerId, orders })
            .then((res) => {
                console.log(res);
            });
    },

    async getTables() {
        return axios.get(TABLE)
            .then((res) =>
                res.data
            );
    },

    async getProducts() {
        return axios.get(PRODUCTS)
            .then((res) =>
                res.data
            )
    },
}

export default userService;

