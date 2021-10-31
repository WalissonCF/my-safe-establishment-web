import axios from 'axios';
import authService from '../auth';

const LOGIN = 'https://my-safe-establishment-company.herokuapp.com/public/customer/login';
const REGISTER = 'https://my-safe-establishment-company.herokuapp.com/public/owner/register';
const REGISTER_PRODUCTS = 'https://my-safe-establishment-company.herokuapp.com/private/owner/product/register';

const establishmentService = {
    postLogin(email, senha) {
        // axios.post(LOGIN, { email, senha })
        //     .then((res) => {
        //         if (res.status === 200) {
        //             authService.setLoggedUser(res.data, res.data.name,
        //                 res.data.token, res.data.customerId);
        //             window.location = "/amount-of-people-user";
        //             console.log(res);
        //         } else {
        //             window.location = "/";
        //         }
        //         console.log(res);
        //     })
        window.location = "/product-registration";
    },

    postRegister(owner, establishment, address) {
        axios.post(REGISTER, { owner, establishment, address })
            .then((res) => {
                console.log(res);
            })
    },

    postRegisterProducts(name, typeProduct, description, ingredients, value) {
        axios.post(REGISTER_PRODUCTS, { name, typeProduct, description, ingredients, value })
            .then((res) => {
                console.log(res);
            });
    },
}

export default establishmentService;