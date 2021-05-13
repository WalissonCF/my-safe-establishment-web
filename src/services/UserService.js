import React from 'react';
import axios from 'axios';

const USER_REGISTER_URL = 'http://localhost:3000/public/customer/register';

class UserService {
    
    state = {
        name: '',
        phoneNumber: '',
        cpf: '',
    }

    handleChange = event => {
        this.setState({ name: event.target.value});
        this.setState({phoneNumber: event.target.value})
        this.setState({cpf: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            cpf: this.state.cpf
        };

        axios.post(USER_REGISTER_URL, { user }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

}

export default new UserService();

