import React from 'react'

import '../login.css'
import axios from 'axios';

const USER_LOGIN_URL = 'http://localhost:8080/public/customer/register';
export default class LoginUser extends React.Component {
    constructor() {
        super();

        this.state = {
            cpf: '',
            phoneNumber: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { cpf, phoneNumber} = this.state;

        axios.post(USER_LOGIN_URL, { cpf, phoneNumber })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
    }

    render() {
        const { cpf, phoneNumber } = this.state;
    
        return (
            <React.Fragment>
                <div class="container">
                    <div class="welcome"></div>
                    <div class="row">
                        <div class="col">
                            <div class="content-menu">
                                <h1 class="title-1">Bem-vindo ao</h1>
                                <h1 class="title-2">My safe establishment web</h1>
                                <p class="sub-title-1">Cadastre-se agora para conseguir seu acento seguro</p>
                                <p class="sub-title-2">Essa aplicação é destinada a segurança <br />
                                do ambiente, também para que possa <br />
                                realizar seus pedidos sem a necessidade <br />
                                de um garço.</p>
                                <p class="register-title">Já possuí conta? Acesse ela agora <br />
                                clicando no botão abaixo</p>
                                <button class="button-register" id="register">CADASTRE-SE</button>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div class="form-group">
                            <label for="cpf-login" class="cpf-login">CPF:</label>
                            <input id="cpfLogin" class="form-control" type="text" placeholder="000.000.000-00"
                            name="cpf" value={cpf} onChange={this.onChange} required></input>
                        </div>
                        <div class="form-group">
                            <label for="phone-number" class="phone-number">Digite seu celular:</label>
                            <input id="phoneNumber" class="form-control" type="text" placeholder="(00) 0 0000-0000"
                            name="phoneNumber" value={phoneNumber} onChange={this.onChange} required></input>
                        </div>
                        <button type="submit" id="entrar">ENTRAR</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}