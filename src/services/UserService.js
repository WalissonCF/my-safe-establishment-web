import axios from 'axios';
import authService from '../auth';

const userService = {
    requestLogin(url, cpf, phoneNumber) {
        const document = cpf?.replace(/[^0-9]/g, '');
        axios.post(url, { document, phoneNumber })
            .then((res) => {
                if (res.status === 200) {
                    authService.setLoggedUser(res.data, res.data.name,
                        res.data.token, res.data.customerId);
                    window.location = "/amount-of-people-user";
                    console.log(res);
                } else {
                    window.location = "/";
                }
            });
    },

    requestRegister(url, name, phoneNumber, cpf) {
        axios.post(url, { name, phoneNumber, cpf })
            .then((res) => {
                if (res.status === 200) {
                    authService.setLoggedUser(res.data, cpf);
                    window.location = "/amount-of-people-user";
                } else {
                    window.location = "/register";
                }
            });
    },

    requestTable(url, qtdePessoas, table) {
        axios.post(url, { qtdePessoas, table })
            .then((res) => {
                console.log(res);
            });
    },

    requestPedido(url, customerId, product, qtdeProduct) {
        axios.post(url, { customerId, product, qtdeProduct })
            .then((res) => {
                console.log(res);
            });
    },
}

export default userService;

