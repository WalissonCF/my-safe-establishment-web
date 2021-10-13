import axios from 'axios';
import authService from '../auth';

const TABLE = 'https://my-safe-establishment-company.herokuapp.com/private/owner/tables';
const PRODUCTS = 'https://my-safe-establishment-company.herokuapp.com/private/owner/products'
const ORDER = 'https://my-safe-establishment-company.herokuapp.com/private/order/register';
const CREATE_ORDER_PAD = 'https://my-safe-establishment-company.herokuapp.com/private/orderpad/create';

const customerId = localStorage.getItem("customerId");
const customer = parseInt(customerId);

const userService = {
    requestLogin(url, cpf, phoneNumber) {
        const document = cpf?.replace(/[^0-9]/g, '');
        const phone = phoneNumber?.replace(/[^0-9]/g, '');
        // axios.post(url, { document, phone })
        //     .then((res) => {
        //         if (res.status === 200) {
        //             authService.setLoggedUser(res.data, res.data.name,
        //                 res.data.token, res.data.customerId);
        //             window.location = "/amount-of-people-user";
        //             // userServiceService.table();
        //             console.log(res);
        //         } else {
        //             window.location = "/";
        //         }
        //     });
        window.location = "/amount-of-people-user";
    },

    requestRegister(url, name, phoneNumber, cpf) {
        const document = cpf?.replace(/[^0-9]/g, '');
        const phone = phoneNumber?.replace(/[^0-9]/g, '');
        console.log(document, phone);
        axios.post(url, { name, phone, document })
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
        const tableId = localStorage.getItem("table");
        const table = parseInt(tableId);
        const quantityCustomers = localStorage.getItem("quantityCustomer");
        const quantityCustomer = parseInt(quantityCustomers);
        axios.post(CREATE_ORDER_PAD, { customer, quantityCustomer, table })
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
        axios.post(ORDER, { customer, orders })
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

