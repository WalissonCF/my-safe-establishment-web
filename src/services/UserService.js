import axios from 'axios';
import authService from '../auth';

const userService = {
    requestLogin(url, cpf, phoneNumber) {
        axios.post(url, { cpf, phoneNumber })
            .then((res) => {
                if (res.status === 200) {
                    authService.setLoggedUser(res.data, cpf);
                    window.location = "/amount-of-people-user";
                } else {
                    window.location = "/";
                }
            });
    },

    requestRegister(url) {

    },
}

export default userService;

