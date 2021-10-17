import axios from 'axios';
import authService from '../auth';
import customerUtils from '../utils/customerUtils';

const customerId = parseInt(customerUtils.getCustomerId());
const URL = 'https://my-safe-establishment-company.herokuapp.com/';

const USER_LOGIN_URL = `${URL}public/customer/login`;
const USER_REGISTER_URL = `${URL}public/customer/register`;
const TABLE = `${URL}private/owner/tables`;
const PRODUCTS = `${URL}private/owner/products`;
const ORDER = `${URL}private/order/register`;
const CREATE_ORDER_PAD = `${URL}private/orderpad/create`;
const LIST_ORDER = `${URL}private/order/${customerId}`;
const CLOSE_ORDER = `${URL}private/orderpad/close`;

const userService = {
    requestLogin(document, phone) {
        const cpf = customerUtils.unFormatCpf(document);
        const phoneNumber = customerUtils.unFormatPhoneNumber(phone);
        axios.post(USER_LOGIN_URL, { cpf, phoneNumber }).then((res) => {
            console.log(res)
            if (res.status === 200) {
                authService.setLoggedUser(res.data);
                window.location = "/amount-of-people-user";
            }
        });
    },

    requestRegister(name, phone, document) {
        const cpf = document?.replace(/[^0-9]/g, '');
        const phoneNumber = phone?.replace(/[^0-9]/g, '');
        console.log(cpf, phoneNumber);
        axios.post(USER_REGISTER_URL, { name, phoneNumber, cpf })
            .then((res) => {
                if (res.status === 200) {
                    authService.setLoggedUser(res.data);
                    window.location = "/";
                }
            });
    },

    postCreateOrderPad() {
        const tableId = parseInt(localStorage.getItem("table"));
        const quantityCustomer = parseInt(localStorage.getItem("quantityCustomer"));
        console.log(customerId, quantityCustomer, tableId)
        axios.post(CREATE_ORDER_PAD, { customerId, quantityCustomer, tableId })
            .then((res) => {
                customerUtils.removeItem(['quantityCustomer']);
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
        axios.post(ORDER, { customerId, orders })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    customerUtils.removeItem(['index', 'src', 'quantityProduct', 'valueProduct', 'name'])
                    window.location = "/product-list";
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

