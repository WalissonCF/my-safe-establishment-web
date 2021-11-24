import axios from 'axios';
import authService from '../auth';
import customerUtils from '../utils/customerUtils';

const URL = 'https://my-safe-establishment.herokuapp.com/';
const URL_COMPANY = 'https://my-safe-establishment-company.herokuapp.com/';


const LOGIN = `${URL}public/owner/login`;
const REGISTER = `${URL}public/owner/register`;
const REGISTER_PRODUCTS = `${URL}private/product/register`;
const ORDER_PADS = `${URL_COMPANY}private/management/orderpads`;
const ORDER_PADS_TO_ID = `${URL_COMPANY}private/management/orderpad?id=1`;
const ORDERS_TO_ID = `${URL_COMPANY}private/management/orders?orderpad=1`;

const establishmentService = {
    postLogin(email, password) {
        axios.post(LOGIN, { email, password })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    authService.setLoggedUser(res.data, res.data.name,
                        res.data.token, res.data.customerId);
                    window.location = "/menu";
                    console.log(res);
                }
                console.log(res);
            })
    },

    postRegister(owner, establishment, address) {
        debugger

        axios.post(REGISTER, { owner, establishment, address })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    console.log(res);
                }
                debugger
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
        console.log(product);
        console.log(imageEncoded);
        axios.post(REGISTER_PRODUCTS, { product, imageEncoded },
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                console.log(res);
                if (res.data === 201) {
                    window.location = "/products-establishment";
                }
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

    async getDemand() {

    },

    async getOrderpads() {
        return axios.get(ORDER_PADS,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                // console.log(res.data);
                return res.data
            }
            );
    },

    async getOrderpadToId() {
        return axios.get(ORDER_PADS_TO_ID,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                console.log(res.data);
                return res.data
            }
            );
    },

    async getOrders() {
        return axios.get(ORDERS_TO_ID,
            { headers: { Authorization: `Bearer ${customerUtils.getCustomerToken()}` } })
            .then((res) => {
                console.log(res.data);
                return res.data
            }
            );
    },



}

export default establishmentService;