import React from 'react';

import { Link } from 'react-router-dom';
import authService from '../../auth';
import establishmentService from '../../services/EstablishmentService';

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
        establishmentService.postLogin(email, password);
    }

    render() {
        const { email, password } = this.state;
        const linkRegisterEstablishment = "/register-establishment";

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-menu-register">
                                <div className="content-in-text">
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
                        <div className="form-group">
                            <label for="email">E-mail:</label>
                            <input type="email" className="form-control" id="email-login-register-establishment"
                            name="email" value={email} onChange={this.onChange} placeholder="exemplo@email.com" required />
                        </div>
                        <div className="form-group">
                            <label for="password-register-establishment">Senha:</label>
                            <input type="password" className="form-control" id="password-register-establishment"
                            name="password" value={password} onChange={this.onChange} placeholder="********"
                            required />
                        </div>
                        <button type="submit" className="btn btn-outline-danger">ENTRAR</button>
                        <h6>Cadastre-se sua <Link to={linkRegisterEstablishment}>empresa</Link>!</h6>
                    </form>
                    <hr />
                    <h6 className="responsible">Desenvolvido por alunos da Universidade Paulista(UNIP) - 2021</h6>
                </div>
            </React.Fragment>
        )
    }
}