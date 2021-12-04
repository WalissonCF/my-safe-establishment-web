import axios from 'axios';
import authService from '../auth';
import customerUtils from '../utils/customerUtils';

const customerId = parseInt(customerUtils.getCustomerId());
const URL = 'https://my-safe-establishment.herokuapp.com/';
const URL_COMPANY = 'https://my-safe-establishment-company.herokuapp.com/';

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
const UPDATE_PRODUCT_QUANTITY = `${URL_COMPANY}private/order/update/`;

const userService = {
    requestLogin(document, phone) {
        const cpf = customerUtils.unFormatCpf(document);
        const phoneNumber = customerUtils.unFormatPhoneNumber(phone);
        axios.post(USER_LOGIN_URL, { cpf, phoneNumber })
            .then((res) => {
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
                    window.location = "/amount-of-people-user";
                }
            })
            .catch((res) => {
                customerUtils.removeHidden('failed-register');
            });
    },

    postCreateOrderPad() {
        const tableId = parseInt(localStorage.getItem("table"));
        const quantityCustomer = parseInt(localStorage.getItem("quantityCustomer"));
        axios.post(CREATE_ORDER_PAD, { customerId, quantityCustomer, tableId },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                if (res.status === 200) {
                    customerUtils.removeItem(['quantityCustomer']);
                    window.location = '/product-list';
                }
            })
            .catch(function(error) {
                // document.getElementById('alert-payment-error').innerText = error.response.data.message;
                // customerUtils.removeHidden('alert-payment-error');
                console.log(error.response.data.message)
            });
    },

    postOrder() {
        const productIds = localStorage.getItem("index");
        const product = parseInt(productIds)
        const quantityProduct = localStorage.getItem("quantityProduct");
        const quantitys = parseInt(quantityProduct);
        const notes = localStorage.getItem('note');
        let orders = [
            {
                productId: product,
                quantity: quantitys,
                note: notes,
            }
        ];
        axios.post(ORDER, { customerId, orders },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                if (res.status === 200) {
                    window.location = "/product-list";
                }
            })
            .catch(function(error) {
                document.getElementById('alert-product-select').innerText = error.response.data.message;
                customerUtils.removeHidden('alert-product-select');
            });
    },

    postCloserOrder(paymentMethod, tips) {
        const tip = parseFloat(customerUtils.unFormatNumber(tips));
        axios.post(CLOSE_ORDER, { customerId, paymentMethod, tip },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('totalProduct', res.data.orderPad.paybleValue);
                    window.location = "/payment-method";
                }
            })
            .catch(function (error) {
                document.getElementById('alert-payment-error').innerText = error.response.data.message;
                customerUtils.removeHidden('alert-payment-error');
            })
    },

    postPaymentOrdenPad() {
        const valuePayment = parseFloat(customerUtils.getTotalValueProduct());
        axios.post(PAYMENT_ORDER_PAD, { customerId, valuePayment },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
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
                if (res.status === 200 || res.status === 201) {
                    localStorage.setItem('status', res.data.status);
                    var status = localStorage.getItem('status');
                    if (status === "1") {
                        localStorage.setItem('totalProduct', res.data.paybleValue);
                        window.location = "/payment-method"
                    } else if (status !== "1") {
                        localStorage.setItem('totalProduct', res.data.paybleValue);
                        customerUtils.removeItem(['index', 'src', 'quantityProduct', 'valueProduct', 'name', 'note']);
                        window.location = "/payment-success";
                        customerUtils.removeHidden('alert-success-payment');
                    }
                }
            })
            .catch((res) => { });
    },

    //order/update/{orderId}/{orderpadId}/{quantity} -> Trocar quantidade de itens do produto usuário -> post
    async updateQuantityProduct(orderId, orderpadId, quantity) {
        return await axios.post(`${UPDATE_PRODUCT_QUANTITY}${orderId}/${orderpadId}/${quantity}`,
        { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
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
            .then((res) => {
                return res.data
            }
            );
    },

    async getListOrder() {
        return await axios.get(LIST_ORDER, { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
    },

    async getProductToId() {
        const id = localStorage.getItem('updateProductId');
        return axios.get(`https://my-safe-establishment.herokuapp.com/private/product/${id}`,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                localStorage.setItem(`imageProductId${id}`, res.data.productDetails.urlImage)
                return res.data;
            })
    },

    async deleteProductOrder(order) {
        return await axios.delete(`https://my-safe-establishment.herokuapp.com/private/order/delete`, { order },
        { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } });
    },

    async deleteProductCustomer(id) {
        return axios.delete(`https://my-safe-establishment.herokuapp.com/private/product/delete/${id}`)
            .then((res) => {
                window.location = "/ordered";
            })
    },    
}

export default userService;

