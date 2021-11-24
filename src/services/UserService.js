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
const PAYMENT_ORDER_PAD_BY_CARD = `${URL}private/orderpad/card/payment`;

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
        axios.post(USER_REGISTER_URL, { name, phoneNumber, cpf })
            .then((res) => {
                if (res.status === 201 || res.status === 200) {
                    authService.setLoggedUser(res.data);
                    window.location = "/";
                }
            })
            .catch((res) => {
                console.log(res.data);
                customerUtils.removeHidden('failed-register');
            });
    },

    postCreateOrderPad() {
        const tableId = parseInt(localStorage.getItem("table"));
        const quantityCustomer = parseInt(localStorage.getItem("quantityCustomer"));
        console.log(customerId, quantityCustomer, tableId);
        console.log(CREATE_ORDER_PAD);
        axios.post(CREATE_ORDER_PAD, { customerId, quantityCustomer, tableId },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
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
        const note = localStorage.getItem('note');
        let orders = [
            {
                productId: product,
                quantity: quantitys,
            }
        ];
        axios.post(ORDER, { customerId, orders, note },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    customerUtils.removeItem(['index', 'src', 'quantityProduct', 'valueProduct', 'name', 'note'])
                    window.location = "/product-list";
                }
            });
    },

    postCloserOrder(paymentMethod, tips) {
        const tip = parseFloat(customerUtils.unFormatNumber(tips));
        console.log(customerId, paymentMethod, tip);
        axios.post(CLOSE_ORDER, { customerId, paymentMethod, tip },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('totalProduct', res.data.orderPad.paybleValue);
                    window.location = "/payment-method";
                }
            })
    },

    postPaymentOrdenPad() {
        const valuePayment = parseFloat(customerUtils.getTotalValueProduct());
        axios.post(PAYMENT_ORDER_PAD, { customerId, valuePayment },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                console.log(res);
                localStorage.setItem("orderPad", JSON.stringify(res));
                if (res.status === 200 || res.status === 201) {
                    customerUtils.removeHidden('alert-success-payment');
                }
            })
            .catch((res) => {
            });
    },

    postPaymentOrderByCard(typeCard, valuePayment, card) {
        axios.post(PAYMENT_ORDER_PAD_BY_CARD, { customerId, typeCard, valuePayment, card },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                console.log("postPaymentOrderByCard", res);
                if (res.status === 200 || res.status === 201) {
                    localStorage.setItem('status', res.data.status);
                    var status = localStorage.getItem('status');
                    if (status === "1") {
                        localStorage.setItem('totalProduct', res.data.paybleValue);
                        window.location = "/payment-method"
                    } else if (status !== "1") {
                        localStorage.setItem('totalProduct', res.data.paybleValue);
                        window.location = "/payment-success";
                        customerUtils.removeHidden('alert-success-payment');
                    }
                }
            })
            .catch((res) => { });
    },

    async getTables() {
        return axios.get(TABLE, {
            headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` }
        })
            .then((res) =>
                res.data
            );
    },

    async getProducts() {
        return axios.get(PRODUCTS,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) =>
                res.data
            );
    },

    async getListOrder() {
        return axios.get(LIST_ORDER,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                console.log(res.data)
                return res.data
            }
            );
    },

    async getProductToId(id) {
        return axios.get(`https://my-safe-establishment.herokuapp.com/private/product/${id}`,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                localStorage.setItem(`${id}`, res.data.productDetails.urlImage)
            })
    },
}

export default userService;

