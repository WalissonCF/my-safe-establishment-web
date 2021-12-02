import React from 'react'

import '../../styles/register.css';
import '../../styles/failed.css';
import { Link } from 'react-router-dom';
import userService from '../../services/UserService';
import InputMask from 'react-input-mask';
import AnimationFailed from '../animations/Failed';

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
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, phoneNumber, cpf } = this.state;
        userService.requestRegister(name, phoneNumber, cpf);
    }

    render() {
        const { name, phoneNumber, cpf } = this.state;
        const linkLoginUser = "/";

        return (
            <React.Fragment>
                <div class="container-fluid">
                    {/* <div class="welcome"></div> */}
                    <div class="row">
                        <div class="col-12">
                            <div class="content-menu-register">
                                <div class="content-in-text">
                                    <h1>Bem-vindo ao</h1>
                                    <h2>My Establishment</h2>
                                    <p>
                                        Cadastre-se agora para conseguir seu acento seguro <br />
                                    Essa aplicação é destinada a segurança <br />
                                    do ambiente, também para que possa <br />
                                    realizar seus pedidos sem a necessidade <br />
                                    de um atendente. <br /> <br />
                                    Já possuí conta? Acesse ela agora <br />
                                    clicando no botão abaixo
                                    </p>
                                    <Link to={linkLoginUser}>
                                        <button class="btn btn-outline-danger btn-login">ENTRAR</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label for="name">Nome:</label>
                            <input type="text" className="form-control" id="name-register" placeholder="Seu nome"
                                name="name" value={name} onChange={this.onChange} required />
                        </div>
                        <div className="form-group">
                            <label for="cpf-register">CPF:</label>
                            <InputMask mask="999.999.999-99" type="tel" maskChar={null} className="form-control cpf-mask" id="cpf-register" placeholder="000.000.000-00"
                                name="cpf" value={cpf} onChange={this.onChange} required></InputMask>
                        </div>
                        <div className="form-group">
                            <label for="phone-number-register">Digite seu celular:</label>
                            <InputMask mask="(99) 99999-9999" type="tel" maskChar={null} className="form-control" id="phone-number-register" placeholder="(00) 0000-0000"
                                name="phoneNumber" value={phoneNumber} onChange={this.onChange} required></InputMask>
                        </div>
                        <div id="failed-register" hidden>
                            <AnimationFailed></AnimationFailed>
                            <p id="alert-register">*Falha no registro</p>
                        </div>
                        <button type="submit" className="btn btn-outline-danger">CADASTRAR</button>
                    </form>
                    <hr />
                    <h6 className="responsible">Desenvolvido por alunos da Universidade Paulista(UNIP) - 2021</h6>
                </div>
            </React.Fragment>
        )
    }
}