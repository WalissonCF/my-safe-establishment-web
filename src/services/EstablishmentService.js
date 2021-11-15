import axios from 'axios';
import authService from '../auth';
import customerUtils from '../utils/customerUtils';

const URL = 'https://my-safe-establishment-company.herokuapp.com/';

const LOGIN = 'public/customer/login';
const REGISTER = 'public/owner/register';
const REGISTER_PRODUCTS = `${URL}private/product/register`;

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

    postRegisterProducts(name, typeProduct, description, ingredients, valueProduct, dataBase) {
        const value = parseFloat(customerUtils.unFormatNumber(valueProduct));
        var imageEncoded = dataBase.replace(/^data:image\/[a-z]+;base64,/, "");
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
        axios.post(REGISTER_PRODUCTS, { product, imageEncoded })
            .then((res) => {
                console.log(res);
            });
    },
}

export default establishmentService;