import axios from 'axios';
import authService from '../auth';
import customerUtils from '../utils/customerUtils';

const customerId = parseInt(customerUtils.getCustomerId());
const URL = 'https://my-safe-establishment.herokuapp.com/';

const USER_LOGIN_URL = `${URL}public/login`;
const USER_REGISTER_URL = `${URL}public/register`;
const TABLE = `${URL}private/tables`;
const PRODUCTS = `${URL}private/products`;
const ORDER = `${URL}private/order/register`;
const CREATE_ORDER_PAD = `${URL}private/orderpad/create`;
const LIST_ORDER = `${URL}private/order/${customerId}`;
const CLOSE_ORDER = `${URL}private/orderpad/close`;
const PAYMENT_ORDER_PAD = `${URL}private/orderpad/payment`;

const userService = {
    requestLogin(document, phone) {
        const cpf = customerUtils.unFormatCpf(document);
        const phoneNumber = customerUtils.unFormatPhoneNumber(phone);
        axios.post(USER_LOGIN_URL, { cpf, phoneNumber })
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    authService.setLoggedUser(res.data);
                    window.location = "/amount-of-people-user";
                }
            })
            .catch((res) => {
                customerUtils.removeHidden('alert-login');
            });
    },

    requestRegister(name, phone, document) {
        const cpf = customerUtils.unFormatCpf(document);
        const phoneNumber = customerUtils.unFormatPhoneNumber(phone);
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
        console.log(customerId, quantityCustomer, tableId);
        console.log(CREATE_ORDER_PAD);
        axios.post(CREATE_ORDER_PAD, { customerId, quantityCustomer, tableId },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` }})
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    customerUtils.removeItem(['quantityCustomer']);
                }
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
        axios.post(ORDER, { customerId, orders }, 
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` }})
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    customerUtils.removeItem(['index', 'src', 'quantityProduct', 'valueProduct', 'name'])
                    window.location = "/product-list";
                }
            });
    },

    postCloserOrder(paymentMethod, tips) {
        const tip = parseFloat(customerUtils.unFormatNumber(tips));
        console.log(customerId, paymentMethod, tip);
        axios.post(CLOSE_ORDER, { customerId, paymentMethod, tip },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` }})
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('totalProduct', res.data.orderPad.value);
                    window.location = "/payment-method";
                }
            })
    },

    postPaymentOrdenPad() {
        const valuePayment = parseFloat(customerUtils.getTotalValueProduct());
        console.log(customerId, valuePayment);
        axios.post(PAYMENT_ORDER_PAD, { customerId, valuePayment }, 
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` }})
            .then((res) => {
                console.log(res);
                localStorage.setItem("orderPad", JSON.stringify(res));
            })
            .catch((res) => {
                console.log("erro", res);
            });
    },

    async getTables() {
        console.log(`Bearer ${customerUtils.getCustomerToken()}`);
        return axios.get(TABLE, { 
            headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` }})
            .then((res) =>
                res.data
            );
    },

    async getProducts() {
        return axios.get(PRODUCTS, 
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` }})
            .then((res) =>
                res.data
            );
    },

    async getListOrder() {
        return axios.get(LIST_ORDER, 
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` }})
            .then((res) =>
                res.data
            );
    },
}

export default userService;

