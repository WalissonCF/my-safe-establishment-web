import axios from 'axios';

const establishmentService = {
    requestLoginEstablishment(url, email, senha) {
        axios.post(url, { email, senha })
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

    requestRegisterEstablishment(url) {
        axios.post(url, {})
            .then((res) => {

            });
    },

}

export default establishmentService;