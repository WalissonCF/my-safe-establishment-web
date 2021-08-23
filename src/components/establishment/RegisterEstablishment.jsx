import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const USER_LOGIN_URL = 'http://localhost:8080/public/customer/register';
export default class LoginEstablishment extends React.Component {
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
        const linkLoginEstablishment = "/login-establishment";

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
                                    Cadastre-se agora seu estabelecimento <br /> <br />
                                    Todos os campos são obrigatório o <br />
                                    preenchimento <br />
                                    Já possuí seu estabelecimento <br />
                                    cadastrado? Acesse ela agora <br />
                                    clicando no botão abaixo
                                    </p>
                                    <Link to={linkLoginEstablishment}>
                                        <button class="btn btn-outline-danger btn-login">ENTRAR</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label for="corporate-name">Razão social:</label>
                            <input type="text" class="form-control" id="corporate-name" required />
                        </div>
                        <div class="form-group">
                            <label for="fantasy-name">Nome fantasia:</label>
                            <input type="text" class="form-control" id="fantasy-name" required />
                        </div>
                        <div class="form-group">
                            <label for="cpnj">CNPJ:</label>
                            <input type="text" class="form-control" id="cpnj" placeholder="00.000.000/0000-00" required />
                        </div>
                        <div class="form-group">
                            <label for="type-of-establishment">Tipo de estabelecimento:</label>
                            <input type="text" class="form-control" id="type-of-establishment" required />
                        </div>
                        <div class="form-group">
                            <label for="phone-number-register-establishment">Número de telefone:</label>
                            <input type="text" class="form-control" id="phone-number-register-establishment" placeholder="(00) 00000-0000" required />
                        </div>
                        <button type="submit" class="btn btn-outline-danger">PROXIMO</button>
                    </form>
                    <hr />
                    <h6 class="responsible">Desenvolvido por alunos da Universidade Paulista(UNIP) - 2021</h6>
                </div>
            </React.Fragment>
        )
    }
}