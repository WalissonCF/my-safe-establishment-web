import axios from 'axios';
import authService from '../auth';
import customerUtils from '../utils/customerUtils';

const URL = 'https://my-safe-establishment.herokuapp.com/';
const URL_COMPANY = 'https://my-safe-establishment-company.herokuapp.com/';

const LOGIN = `${URL}public/owner/login`;
const REGISTER = `${URL}public/owner/register`;
const REGISTER_PRODUCTS = `${URL}private/product/register`;
const ORDER_PADS = `${URL}private/management/orderpads`;
const ORDER_PADS_TO_ID = `${URL_COMPANY}private/management/orderpad?id=1`;
const ORDERS_TO_ID = `${URL_COMPANY}private/management/orders?orderpad=`;
const REGISTER_TABLE = `${URL}private/table/register`;
const UPDATE_PRODUCT = `${URL}private/product/update`;
const UPDATE_ORDER_STATUS = `${URL_COMPANY}/private/management/change/order?id=10&status=3&customerId=6`;
const PAYMENT_MANUAL = `${URL}private/management/manual/payment/orderpad`;

const establishmentService = {
    postLogin(email, password) {
        axios.post(LOGIN, { email, password })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    authService.setLoggedUser(res.data, res.data.name,
                        res.data.token, res.data.customerId);
                    window.location = "/menu";
                }
            })
    },

    postRegister(owner, establishment, address) {
        debugger

        axios.post(REGISTER, { owner, establishment, address })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                }
            })
    },

    postRegisterProducts(name, typeProduct, description, ingredients, valueProduct, dataBase) {
        const value = parseFloat(customerUtils.unFormatNumber(valueProduct));
        var imageEncoded = customerUtils.unformatDataBase(dataBase);
        let product =
        {
            name,
            typeProduct,
            description,
            ingredients,
            value
        };
        axios.post(REGISTER_PRODUCTS, { product, imageEncoded },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                if (res.data === 201) {
                    window.location = "/products-establishment";
                }
            });
    },

    postRegisterTable(locationArea, statusTable) {
        const numberSeats = parseInt(localStorage.getItem('numberSeats'));
        axios.post(REGISTER_TABLE, {statusTable, locationArea, numberSeats},
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                // customerUtils.removeItem(['locationTable', 'statusTable']);
                customerUtils.removeHidden('alert-success-register-table');
            });
    },

    deleteProducts(id) {
        axios.delete(`https://my-safe-establishment.herokuapp.com/private/product/delete/${id}`,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                window.location = "/products-establishment";
            })
    },

    deleteTables(id) {
        axios.delete(`https://my-safe-establishment.herokuapp.com/private/table/delete/${id}`,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                window.location = "/tables-establishment";
            })
    },

    updateProdut(id, name, typeProduct, description, ingredients, value) {
        axios.put(UPDATE_PRODUCT, { id, name, typeProduct, description, ingredients, value }, 
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
            })
    },

    updateOrderStatus(orderId, status, customerId) {
        axios.post(`https://my-safe-establishment-company.herokuapp.com/private/management/change/order?id=${orderId}&status=${status}&customerId=${customerId}`)
        .then((res) => {
        })
        .catch(function(error) {
            const className = `alert-customer-demand-${orderId}`;
            document.getElementById(className).innerText = error.response.data.message;
            customerUtils.removeHidden(`alert-customer-${orderId}`);
        })
    },

    postPaymentManual(customerId, paymentMethod, valuePayment) {
        axios.post(PAYMENT_MANUAL, {customerId, paymentMethod, valuePayment},
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                document.getElementById('alert-payment-success-establishment').innerText = "Pagamento realizado com sucesso!";
                customerUtils.removeHidden(`alert-payment-success-establishment`);
                
            }).catch(function(error) {
                document.getElementById('alert-payment-success-establishment').innerText = error.response.data.message;
                customerUtils.removeHidden(`alert-payment-success-establishment`); 
            })
    },
    
    //retorna todas as demandas
    async getOrderpads() {
        return axios.get(ORDER_PADS,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                return res.data
            }
            );
    },

    //
    async getOrderpadToId() {
        return axios.get(ORDER_PADS_TO_ID,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                return res.data
            }
            );
    },

    //gerencimento quando clicar na demanda
    //orderpadId
    async getOrders(id) {
        return axios.get(`${ORDERS_TO_ID}${id}` ,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                return res.data
            }
            );
    },
}

export default establishmentService;