import axios from 'axios';
import authService from '../auth';
import userServiceService from './UserServiceService';

const userService = {
    requestLogin(url, cpf, phoneNumber) {
        const document = cpf?.replace(/[^0-9]/g, '');
        const phone = phoneNumber?.replace(/[^0-9]/g, '');
        axios.post(url, { document, phone })
            .then((res) => {
                // if (res.status === 200) {
                //     authService.setLoggedUser(res.data, res.data.name,
                //         res.data.token, res.data.customerId);
                //     window.location = "/amount-of-people-user";
                //     userServiceService.table();
                //     console.log(res);
                // } else {
                //     window.location = "/";
                // }
                window.location = "/amount-of-people-user";
            });
    },

    requestRegister(url, name, phoneNumber, cpf) {
        const document = cpf?.replace(/[^0-9]/g, '');
        const phone = phoneNumber?.replace(/[^0-9]/g, '');
        axios.post(url, { name, phone, document })
            .then((res) => {
                // if (res.status === 200) {
                //     authService.setLoggedUser(res.data, cpf);
                //     window.location = "/amount-of-people-user";
                // } else {
                //     window.location = "/register";
                // }
                window.location = "/amount-of-people-user";
            });
    },

    requestTable(url, qtdePessoas, table) {
        axios.post(url, { qtdePessoas, table })
            .then((res) => {
                console.log(res);
                userServiceService.menu();
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

