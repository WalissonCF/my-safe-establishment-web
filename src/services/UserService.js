import axios from 'axios';
import authService from '../auth';

const TABLE = 'https://my-safe-establishment-company.herokuapp.com/private/owner/tables';
const PRODUCTS = 'https://my-safe-establishment-company.herokuapp.com/private/owner/products'

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

