import React from 'react'

import '../register.css'
//import UserService from '../services/UserService'
import axios from 'axios';

const USER_REGISTER_URL = 'https://my-safe-establishment.herokuapp.com/public/customer/register';
export default class RegisterUser extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            phoneNumber: '',
            cpf: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, phoneNumber, cpf } = this.state;

        axios.post(USER_REGISTER_URL, { name, phoneNumber, cpf })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
        console.log("to aqui véi");
    }

    render() {
        const { name, phoneNumber, cpf } = this.state;

        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="welcome"></div>
                    <div class="row">
                        <div class="col-12">
                            <div class="content-menu-register">
                                <div class="content-in-text">
                                    <h1>Bem-vindo ao</h1>
                                    <h2>My safe establishment web</h2>
                                    <p>
                                    Cadastre-se agora para conseguir seu acento seguro <br />
                                    Essa aplicação é destinada a segurança <br />
                                    do ambiente, também para que possa <br />
                                    realizar seus pedidos sem a necessidade <br />
                                    de um atendente. <br /> <br />
                                    Já possuí conta? Acesse ela agora <br />
                                    clicando no botão abaixo
                                    </p>
                                    <button class="btn btn-outline-danger btn-login">ENTRAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit} >
                        <div class="form-group">
                            <label for="name">Nome:</label>
                            <input type="text" class="form-control" id="name-register" placeholder="Seu nome"
                            name="name" value={name} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="cpf-register">CPF:</label>
                            <input type="text" class="form-control cpf-mask" id="cpf-register" placeholder="CPF"
                            name="cpf" value={cpf} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="phone-number-register">Digite seu celular:</label>
                            <input type="text" class="form-control" id="phone-number-register" placeholder="Número de telefone"
                            name="phoneNumber" value={phoneNumber} onChange={this.onChange} required />
                        </div>
                        <button type="submit" class="btn btn-outline-danger">CADASTRAR</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}