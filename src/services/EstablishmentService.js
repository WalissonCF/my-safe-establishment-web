import axios from 'axios';
import authService from '../auth';
import customerUtils from '../utils/customerUtils';

const URL = 'https://my-safe-establishment.herokuapp.com/';

const LOGIN = `${URL}public/owner/login`;
const REGISTER = `${URL}public/owner/register`;
const REGISTER_PRODUCTS = `${URL}private/product/register`;
const DELETE = `${URL}private/product/delete/`;

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

    },

    async getDemand() {

    },
}

export default establishmentService;