import React from 'react';
import InputMask from 'react-input-mask';

import '../../styles/login.css';
import { Link } from 'react-router-dom';
import userService from '../../services/UserService';

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
        const { cpf, phoneNumber } = this.state;
        userService.requestLogin(cpf, phoneNumber);
    }

    render() {
        const { cpf, phoneNumber } = this.state;
        const linkRegisterEstablishment = "/register-establishment";
        localStorage.clear();

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
                        <div className="form-group">
                            <label for="cpf">CPF:</label>
                            <InputMask mask="999.999.999-99" maskChar={null}
                                type="tel"
                                className="form-control"
                                id="cpf-login"
                                placeholder="000.000.000-00"
                                name="cpf"
                                value={cpf}
                                onChange={this.onChange}
                                required
                                autoComplete="off"
                            ></InputMask>
                        </div>
                        <div className="form-group">
                            <label for="phone-number-login">Digite seu celular:</label>
                            <InputMask mask="(99) 99999-9999" maskChar={null}
                                type="tel"
                                className="form-control"
                                id="phone-number-login"
                                placeholder="(00) 0000-0000"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={this.onChange}
                                required
                            ></InputMask>
                        </div>
                        <div>
                            <p id="alert-login" hidden>*CPF ou Celular incorretos</p>
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