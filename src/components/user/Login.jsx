import React from 'react';

import '../../styles/login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import authService from '../../auth';

const USER_LOGIN_URL = 'https://my-safe-establishment.herokuapp.com/public/customer/login';
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
        console.log({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { cpf, phoneNumber} = this.state;

        console.log("Batendo na api")

        axios.post(USER_LOGIN_URL, { cpf, phoneNumber })
            .then((res) => {
                console.log(res);
                console.log(res.status);
                if (res.status === 200) {
                    authService.setLoggedUser(res.data, cpf);
                    window.location = "/amount-of-people-user";
                } else {
                    window.location = "/";
                }
            });
    }
     
    render() {
        const { cpf, phoneNumber } = this.state;
        const linkRegisterEstablishment = "/register-establishment";

        return (
            <React.Fragment>
                <div class="container-fluid">
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
                                    Não possuí uma conta? Cadastre-se agora <br />
                                    clicando no botão abaixo
                                    </p>
                                    <Link to="/register">
                                        <button class="btn btn-outline-danger btn-login">CADASTRAR-SE</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label for="cpf">CPF:</label>
                            <input type="text"
                            class="form-control"
                            id="cpf-login"
                            placeholder="000.000.000-00"
                            name="cpf"
                            value={cpf}
                            onChange={this.onChange}
                            maxlength="11"
                            required
                            pattern="\d*" />
                        </div>
                        <div class="form-group">
                            <label for="phone-number-login">Digite seu celular:</label>
                            <input type="text" 
                            class="form-control" 
                            id="phone-number-login" 
                            placeholder="(00) 0000-0000" 
                            name="phoneNumber" 
                            value={phoneNumber} 
                            onChange={this.onChange} 
                            maxlength="11" 
                            required 
                            pattern="\d*" />
                        </div>
                        <button type="submit" class="btn btn-outline-danger">ENTRAR</button>
                        <h6>Cadastre-se sua <Link to={linkRegisterEstablishment}>empresa</Link>!</h6>
                    </form>
                    <hr />
                    <h6 class="responsible">Desenvolvido por alunos da Universidade Paulista(UNIP) - 2021</h6>
                </div>
            </React.Fragment>
        )
    }
}