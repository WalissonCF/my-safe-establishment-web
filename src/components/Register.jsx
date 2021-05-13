import React from 'react'

import '../register.css'
//import UserService from '../services/UserService'
import axios from 'axios';

const USER_REGISTER_URL = 'http://localhost:8080/public/customer/register';
export default class Register extends React.Component {
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
        console.log({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, phoneNumber, cpf } = this.state;

        axios.post('http://localhost:8080/public/customer/register', { name, phoneNumber, cpf })
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
                <form onSubmit={this.onSubmit} id="content-form-register">
                    <div class="apagar">
                        <p class="titulo">Bem-vindo ao</p>
                        <p class="titulo2">My safe establishment web</p>
                        <p class="sobretitulo">Cadastre-se agora para conseguir seu lugar
                        seguro(Alterar isto)</p>
                        <p class="sobretitulo2">Aqui escrevemos um pouco sobre
                        nosso software ou informando 
                        para que serve o cadastro</p>
                        <p class="sobretitulo3">Já possuí conta? Acesse ela agora
                        clicando no botão abaixo</p>
                        <button id="login">ENTRAR</button>
                    </div>
                    <div>
                        <label for="name" class="name">Nome:</label>
                        <input id="name" type="text" placeholder="Seu nome"
                        name="name" value={name} onChange={this.onChange} required></input>
                    </div>
                    <div>
                        <label for="phoneNumber" class="date">Número de telefone:</label>
                        <input id="phoneNumber" type="text" placeholder="Número de telefone"
                        name="phoneNumber" value={phoneNumber} onChange={this.onChange} required></input>
                    </div>
                    <div>
                    <label for="cpf" class="cpf">CPF:</label>
                        <input id="cpf" v-model='cpf' type="text" placeholder="CPF" data-mask="000.000.000-00" 
                        name="cpf" value={cpf} onChange={this.onChange} required></input>
                    </div>

                    <button type="submit" id="sign-up">CADASTRAR</button>
                </form>
            </React.Fragment>
        )
    }
}