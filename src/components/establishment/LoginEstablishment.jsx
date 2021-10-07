import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import authService from '../../auth';

const ESTABLISHMENT_LOGIN_URL = 'https://my-safe-establishment.herokuapp.com/public/owner/login'
export default class LoginEstablishment extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password} = this.state;

        // axios.post(ESTABLISHMENT_LOGIN_URL, { email, password })
        //     .then((res) => {
        //         console.log(res);
        //         console.log(res.data);
        //         console.log(res.status);
        //         if (res.status === 200) {
        //             authService.setLoggedUser(res.data);
        //             window.location = "/";
        //         } else {
        //             window.location = "/";
        //         }
        //     });
        window.location = "/product-registration";

    }

    render() {
        const { email, password } = this.state;
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
                                    Esse ambiente é privado ao estabelecimento <br /> <br /> <br /> <br /> 
                                    Essa aplicação é destinada a segurança <br />
                                    do seu estabelecimento <br /> <br /> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label for="email">E-mail:</label>
                            <input type="email" class="form-control" id="email-login-register-establishment"
                            name="email" value={email} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="password-register-establishment">Senha:</label>
                            <input type="password" class="form-control" id="password-register-establishment"
                            name="password" value={password} onChange={this.onChange} 
                            required />
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