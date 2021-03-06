import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const ESTABLISHMENT_REGISTER_URL = 'https://my-safe-establishment.herokuapp.com/public/owner/register';
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
            phoneNumber: '',
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

        axios.post(ESTABLISHMENT_REGISTER_URL, { companyName, tradingName, cnpj, typeEstablishment,
            phoneNumber, publicPlace, number, district, city, name, cpf, email, password })
            .then((res) => {
                console.log(res);
            });
    }

    onBlurCNPJ(e) {
        const { value } = e.target;
        const cnpj = value?.replace(/[^0-9]/g, '');
        if (cnpj?.length !== 14) {
            return;
        }

        axios.get(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`)
            .then((res) => {
                document.getElementById('corporate-name').value = res.data["RAZAO SOCIAL"];
                document.getElementById('fantasy-name').value = res.data["NOME FANTASIA"];
                document.getElementById('type-of-establishment').value = res.data["CNAE PRINCIPAL DESCRICAO"];
                document.getElementById('cep').value = res.data["CEP"];
                document.getElementById('number').value = res.data["NUMERO"];
                document.getElementById('public-place').value = res.data["LOGRADOURO"];
                document.getElementById('district').value = res.data["BAIRRO"];
                document.getElementById('city').value = res.data["UF"];
                document.getElementById('phone-number-register-establishment').value = res.data["TELEFONE"];
            });
    }

    onClickHidden() {
        if (document.getElementById('next-register').offsetParent === null) {
            document.getElementById('first-register').hidden="true";
            document.getElementById('next-register').removeAttribute('hidden');
            document.getElementById('register-establishment').removeAttribute('hidden');
        } else {
            document.getElementById('first-register').removeAttribute('hidden');
            document.getElementById('next-register').hidden="true";
            document.getElementById('register-establishment').hidden="true";
        }
    }

    onKeyPressCPF() {
        var cpf = document.getElementById('cpf-register-establishment');
        var valueCpf = cpf.value?.length;
        if (valueCpf === 3 || valueCpf === 7) {
            cpf.value += ".";
        } else if (valueCpf === 11) {
            cpf.value += "-";
        }
    }

    onKeyPressCNPJ() {
        var cnpj = document.getElementById('cpnj');
        var valueCnpj = cnpj.value?.length;
        if (valueCnpj === 2 || valueCnpj === 6) {
            cnpj.value += ".";
        } else if (valueCnpj === 10) {
            cnpj.value += "/";
        } else if (valueCnpj === 15) {
            cnpj.value += "-";
        }
    }

    onKeyPressPhone() {
        var phoneNumber = document.getElementById('phone-number-register-establishment-2');
        var valuePhoneNumber = phoneNumber.value?.length;
        if (valuePhoneNumber === 0) {
            phoneNumber.value += "(";
        } else if (valuePhoneNumber === 3) {
            phoneNumber.value += ")";
        } else if (valuePhoneNumber === 9) {
            phoneNumber.value += "-";
        }
    }

    render() {
        const { companyName, tradingName, cnpj, typeEstablishment, phoneNumber, 
            publicPlace, number, district, city, name, cpf, email, password } = this.state;
        const linkLoginEstablishment = "/login-establishment";

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
                                    Cadastre-se agora seu estabelecimento <br /> <br />
                                    Todos os campos s??o obrigat??rio o <br />
                                    preenchimento <br />
                                    J?? possu?? seu estabelecimento <br />
                                    cadastrado? Acesse ela agora <br />
                                    clicando no bot??o abaixo
                                    </p>
                                    <Link to={linkLoginEstablishment}>
                                        <button className="btn btn-outline-danger btn-login">ENTRAR</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group" id="first-register">
                            <div className="form-group">
                                <label for="cpnj">CNPJ:</label>
                                <input type="text" className="form-control" id="cpnj" placeholder="00.000.000/0000-00"
                                name="cnpj" value={cnpj} onBlur={this.onBlurCNPJ} onChange={this.onChange} onInput={this.onInputCNPJ} 
                                onKeyPress={this.onKeyPressCNPJ} maxlength="18" required pattern="\d*" />
                            </div>
                            <div className="form-group">
                                <label for="corporate-name">Raz??o social:</label>
                                <input type="text" className="form-control" id="corporate-name" 
                                name="companyName" value={companyName} value={this.state.value} onChange={this.onChange} required disabled />
                            </div>
                            <div className="form-group">
                                <label for="fantasy-name">Nome fantasia:</label>
                                <input type="text" className="form-control" id="fantasy-name"
                                name="tradingName" value={tradingName} value={this.state.value} onChange={this.onChange} required disabled />
                            </div>
                            <div className="form-group">
                                <label for="type-of-establishment">Tipo de estabelecimento:</label>
                                <input type="text" className="form-control" id="type-of-establishment"
                                name="typeEstablishment" value={typeEstablishment} value={this.state.value} onChange={this.onChange} required disabled />
                            </div>
                            <div className="form-group">
                                <label for="phone-number-register-establishment">N??mero de telefone:</label>
                                <input type="text" className="form-control" id="phone-number-register-establishment" placeholder="(00) 00000-0000"
                                name="phoneNumber" value={phoneNumber} value={this.state.value} onChange={this.onChange}
                                maxlength="11" required pattern="\d*" disabled />
                            </div>
                            <div className="form-group">
                                <label for="cep">CEP:</label>
                                <input type="text" class="form-control" id="cep" placeholder="00000-000"
                                maxlength="8" value={this.state.value} required disabled />
                            </div>
                            <div className="form-group">
                                <label for="number">N??mero:</label>
                                <input type="text" className="form-control" id="number"
                                name="number" value={number} value={this.state.value} onChange={this.onChange} required pattern="\d*" disabled />
                            </div>
                            <div className="form-group">
                                <label for="public-place">Logradouro:</label>
                                <input type="text" className="form-control" id="public-place"
                                name="publicPlace" value={publicPlace} value={this.state.value} onChange={this.onChange} required disabled disabled />
                            </div>
                            <div className="form-group">
                                <label for="district">Bairro:</label>
                                <input type="text" className="form-control" id="district"
                                name="district" value={district} value={this.state.value} onChange={this.onChange} required disabled />
                            </div>
                            <div className="form-group">
                                <label for="city">Cidade:</label>
                                <input type="text" className="form-control" id="city"
                                name="city" value={city} value={this.state.value} onChange={this.onChange} required disabled />
                            </div>
                            <button className="btn btn-outline-danger next" onClick={this.onClickHidden}>PROXIMO</button>
                        </div>
                        <div className="form-group" id="next-register" hidden> 
                            <div className="form-group">
                                <label for="name-register-establishment">Nome:</label>
                                <input type="text" className="form-control" id="name-register-establishment"
                                name="name" value={name} value={this.state.value} onChange={this.onChange} required />
                            </div>
                            <div className="form-group">
                                <label for="cpf-register-establishment">CPF:</label>
                                <input type="text" className="form-control" id="cpf-register-establishment"
                                name="cpf" value={cpf} value={this.state.value} onChange={this.onChange} maxlength="11"
                                placeholder="000.000.000-00" onKeyPress={this.onKeyPressCPF} maxLength="14" required />
                            </div>
                            <div className="form-group">
                                <label for="phone-number-register-establishment-2">N??mero de telefone:</label>
                                <input type="text" className="form-control" id="phone-number-register-establishment-2" placeholder="(00) 00000-0000"
                                name="phoneNumber" value={phoneNumber} value={this.state.value} onChange={this.onChange}
                                onKeyPress={this.onKeyPressPhone} maxlength="14" required />
                            </div>
                            <div className="form-group">
                                <label for="email">E-mail:</label>
                                <input type="email" className="form-control" id="email"
                                name="email" value={email} value={this.state.value} onChange={this.onChange} required />
                            </div>
                            <div className="form-group">
                                <label for="password">Senha:</label>
                                <input type="password" className="form-control" id="password"
                                name="password" value={password} value={this.state.value} onChange={this.onChange} required />
                            </div>
                            <button className="btn btn-outline-danger" id="back" onClick={this.onClickHidden}>VOLTAR</button>
                        </div>
                        <button type="submit" className="btn btn-outline-danger" id="register-establishment" onClick={this.onClickNextOne} hidden >CADASTRAR</button>
                    </form>
                    <hr />
                    <h6 className="responsible">Desenvolvido por alunos da Universidade Paulista(UNIP) - 2021</h6>
                </div>
            </React.Fragment>
        )
    }
}