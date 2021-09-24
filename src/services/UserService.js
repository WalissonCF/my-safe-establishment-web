import axios from 'axios';
import authService from '../auth';

const userService = {
    requestLogin(url, cpf, phoneNumber) {
        axios.post(url, { cpf, phoneNumber })
            .then((res) => {
                if (res.status === 200) {
                    authService.setLoggedUser(res.data, res.data.name,
                        res.data.token, res.data.customerId);
                    window.location = "/amount-of-people-user";
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
}

export default userService;

