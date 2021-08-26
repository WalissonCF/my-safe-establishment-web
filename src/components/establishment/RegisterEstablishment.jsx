import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const USER_LOGIN_URL = 'http://localhost:8080/public/owner/register';
export default class LoginEstablishment extends React.Component {
    constructor() {
        super();

        this.state = {
            companyName: '',
            tradingName: '',
            cnpj: '',
            typeEstablishment: '',
            phoneNumber: '',
            publicPlace: '',
            number: '',
            district: '',
            city: '',
            name: '',
            cpf: '',
            email: '',
            password: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { companyName, tradingName, cnpj, typeEstablishment, phoneNumber, 
            publicPlace, number, district, city, name, cpf, email, password } = this.state;

        axios.post(USER_LOGIN_URL, { companyName, tradingName, cnpj, typeEstablishment, 
            phoneNumber, publicPlace, number, district, city, name, cpf, email, password, })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
    }

    onBlurCEP(e) {
        const { value } = e.target;
        const cep = value?.replace(/[^0-9]/g, '');
        if(cep?.length !== 8) {
            return;
        }

        axios.get(`http://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
                document.getElementById('public-place').value = res.data.logradouro;
                document.getElementById('district').value = res.data.bairro;
                document.getElementById('city').value = res.data.uf;
            });
    }

    onClickNextOne = (e) => {
        
    }

    render() {
        const { companyName, tradingName, cnpj, typeEstablishment, phoneNumber, 
            publicPlace, number, district, city, name, cpf, email, password } = this.state;
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
                            <input type="text" class="form-control" id="corporate-name" 
                            name="companyName" value={companyName} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="fantasy-name">Nome fantasia:</label>
                            <input type="text" class="form-control" id="fantasy-name"
                            name="tradingName" value={tradingName} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="cpnj">CNPJ:</label>
                            <input type="text" class="form-control" id="cpnj" placeholder="00.000.000/0000-00"
                            name="cnpj" value={cnpj} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="type-of-establishment">Tipo de estabelecimento:</label>
                            <input type="text" class="form-control" id="type-of-establishment"
                            name="typeEstablishment" value={typeEstablishment} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="phone-number-register-establishment">Número de telefone:</label>
                            <input type="text" class="form-control" id="phone-number-register-establishment" placeholder="(00) 00000-0000"
                            name="phoneNumber" value={phoneNumber} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="cep">CEP:</label>
                            <input type="text" class="form-control" id="cep" placeholder="00000-000"
                            onBlur={this.onBlurCEP} required />
                        </div>
                        <div class="form-group">
                            <label for="number">Número:</label>
                            <input type="text" class="form-control" id="number"
                            name="number" value={number} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="public-place">Logradouro:</label>
                            <input type="text" class="form-control" id="public-place"
                            name="publicPlace" value={publicPlace} onChange={this.onChange} required disabled />
                        </div>
                        <div class="form-group">
                            <label for="district">Bairro:</label>
                            <input type="text" class="form-control" id="district"
                            name="district" value={district} onChange={this.onChange} required disabled />
                        </div>
                        <div class="form-group">
                            <label for="city">Cidade:</label>
                            <input type="text" class="form-control" id="city"
                            name="city" value={city} onChange={this.onChange} required disabled />
                        </div>
                        <div class="form-group">
                            <label for="name-register-establishment">Nome:</label>
                            <input type="text" class="form-control" id="name-register-establishment"
                            name="name" value={name} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="cpf-register-establishment">CPF:</label>
                            <input type="text" class="form-control" id="cpf-register-establishment"
                            name="cpf" value={cpf} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail:</label>
                            <input type="email" class="form-control" id="email"
                            name="email" value={email} onChange={this.onChange} required />
                        </div>
                        <div class="form-group">
                            <label for="password">Senha:</label>
                            <input type="password" class="form-control" id="password"
                            name="password" value={password} onChange={this.onChange} required />
                        </div>

                        <button type="submit" class="btn btn-outline-danger" onClick={this.onClickNextOne}>PROXIMO</button>
                    </form>
                    <hr />
                    <h6 class="responsible">Desenvolvido por alunos da Universidade Paulista(UNIP) - 2021</h6>
                </div>
            </React.Fragment>
        )
    }
}