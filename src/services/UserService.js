import axios from 'axios';
import authService from '../auth';
import customerUtils from '../utils/customerUtils';

const customerId = parseInt(customerUtils.getCustomerId());

const USER_LOGIN_URL = 'https://my-safe-establishment-company.herokuapp.com/public/customer/login';
const TABLE = 'https://my-safe-establishment-company.herokuapp.com/private/owner/tables';
const PRODUCTS = 'https://my-safe-establishment-company.herokuapp.com/private/owner/products'
const ORDER = 'https://my-safe-establishment-company.herokuapp.com/private/order/register';
const CREATE_ORDER_PAD = 'https://my-safe-establishment-company.herokuapp.com/private/orderpad/create';
const LIST_ORDER = `https://my-safe-establishment-company.herokuapp.com/private/order/${customerId}`;
const CLOSE_ORDER = 'https://my-safe-establishment-company.herokuapp.com/private/orderpad/close';

const userService = {
    requestLogin(document, phone) {
        const cpf = document?.replace(/[^0-9]/g, '');
        const phoneNumber = phone?.replace(/[^0-9]/g, '');
        console.log(cpf, phoneNumber);

        axios.post(USER_LOGIN_URL, { cpf, phoneNumber }).then((res) => {
            console.log(res)
            if (res.status === 200) {
                authService.setLoggedUser(res.data, res.data.name,
                    res.data.token, res.data.customerId);
                localStorage.setItem("customerId", res.data.customerId);
                window.location = "/amount-of-people-user";
                console.log(res);
            } else {
                window.alert("Erro", res);
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
                    window.alert("Erro", res);
                    window.location = "/register";
                }
            });
    },

    postCreateOrderPad() {
        const tableId = parseInt(localStorage.getItem("table"));
        const quantityCustomer = parseInt(localStorage.getItem("quantityCustomer"));
        console.log(customerId, quantityCustomer, tableId)
        axios.post(CREATE_ORDER_PAD, { customerId, quantityCustomer, tableId })
            .then((res) => {
                console.log(res);
            });
        customerUtils.removeItem(['quantityCustomer'])
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
        axios.post(ORDER, { customerId, orders })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    window.location = "/product-list";
                } else {
                    window.alert("Não foi possivel realizar seu pedido:", res.data.status);
                }
            });
    },

    postCloserOrder() {
        const tip = parseInt('200');
        const paymentMethod = "Cartao de Credito"
        console.log(customerId, paymentMethod, tip);
        axios.post(CLOSE_ORDER, { customerId, paymentMethod, tip })
            .then((res) => {
                console.log(res);
            })
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
            );
    },

    async getListOrder() {
        return axios.get(LIST_ORDER)
            .then((res) =>
                res.data
            );
    },
}

export default userService;

