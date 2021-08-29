import React from 'react'

import '../../styles/register.css';
//import UserService from '../services/UserService'
import axios from 'axios';
import { Link } from 'react-router-dom';

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

        console.log(name);
        console.log(cpf);

        axios.post(USER_REGISTER_URL, { name, phoneNumber, cpf })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
        console.log("to aqui véi");
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
                                    <Link to={linkLoginUser}>
                                        <button class="btn btn-outline-danger btn-login">ENTRAR</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit} >
                        <div class="form-group">
                            <label for="name">Nome:</label>
                            <input type="text" class="form-control" id="name-register" placeholder="Seu nome"
                            name="name" value={name} value={this.state.value} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="cpf-register">CPF:</label>
                            <input type="text" class="form-control cpf-mask" id="cpf-register" placeholder="000.000.000-00"
                            name="cpf" value={cpf} value={this.state.value} onChange={this.onChange} maxlength="11" required pattern="\d*" />
                        </div>
                        <div class="form-group">
                            <label for="phone-number-register">Digite seu celular:</label>
                            <input type="text" class="form-control" id="phone-number-register" placeholder="(00) 0000-0000"
                            name="phoneNumber" value={phoneNumber} value={this.state.value} onChange={this.onChange} maxlength="11" 
                            required pattern="\d*" />
                        </div>
                        <button type="submit" class="btn btn-outline-danger">CADASTRAR</button>
                    </form>
                    <hr />
                    <h6 class="responsible">Desenvolvido por alunos da Universidade Paulista(UNIP) - 2021</h6>
                </div>
            </React.Fragment>
        )
    }
}