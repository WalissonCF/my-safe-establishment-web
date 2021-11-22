import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import establishmentService from '../../services/EstablishmentService';
import InputMask from 'react-input-mask';

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
        const cnpj = document.getElementById('cpnj').value;
        const companyName = document.getElementById('corporate-name').value;
        const tradingName = document.getElementById('fantasy-name').value;
        const typeEstablishment = document.getElementById('type-of-establishment').value;
        const phoneNumber = document.getElementById('phone-number-register-establishment').value;
        const phoneNumberTwo = document.getElementById('phone-number-register-establishment-2').value;
        const addresss = document.getElementById('public-place').value;
        const name = document.getElementById('name-register-establishment').value;
        const cpf = document.getElementById('cpf-register-establishment').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const publicPlace = document.getElementById('public-place').value;
        const number = document.getElementById('number').value;
        const district = document.getElementById('district').value;
        const city = document.getElementById('city').value;

        // const { cnpj, companyName, tradingName, typeEstablishment, phoneNumber,
        //     addresss, name, cpf, email, password, publicPlace, number, district,
        //     city } = this.state;

        // console.log(cnpj, companyName, tradingName, typeEstablishment, phoneNumber,
        //     addresss, name, cpf, email, password, publicPlace, number, district,
        //     city);   

        console.log(companyName);
        let owner =
        {
            name: name,
            cpf: cpf,
            phoneNumber: phoneNumberTwo,
            email: email,
            password: password,
        };
        let establishment = 
        {
            companyName: companyName,
            tradingName: tradingName,
            cnpj: cnpj,
            typeEstablishmentm: typeEstablishment,
            phoneNumber: phoneNumber,
        };
        let address = 
        {
            publicPlace: publicPlace,
            number: number,
            district: district,
            city: city,
        };
        console.log(owner, establishment, address);
        establishmentService.postRegister(owner, establishment, address);
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
            document.getElementById('first-register').hidden = "true";
            document.getElementById('next-register').removeAttribute('hidden');
            document.getElementById('register-establishment').removeAttribute('hidden');
        } else {
            document.getElementById('first-register').removeAttribute('hidden');
            document.getElementById('next-register').hidden = "true";
            document.getElementById('register-establishment').hidden = "true";
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
                                    Todos os campos são obrigatório o <br />
                                    preenchimento <br />
                                    Já possuí seu estabelecimento <br />
                                    cadastrado? Acesse ela agora <br />
                                    clicando no botão abaixo
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
                                <InputMask mask="99.999.999/9999-99" maskChar={null}
                                    type="tel" className="form-control" id="cpnj" placeholder="00.000.000/0000-00"
                                    name="cnpj" value={cnpj} onChange={this.onChange} onBlur={this.onBlurCNPJ} required
                                ></InputMask>
                            </div>
                            <div className="form-group">
                                <label for="corporate-name">Razão social:</label>
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
                                <label for="phone-number-register-establishment">Número de telefone:</label>
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
                                <label for="number">Número:</label>
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
                                <InputMask mask="999.999.999-99" maskChar={null}
                                    type="tel" className="form-control" id="cpf-register-establishment"
                                    name="cpf" value={cpf} value={this.state.value} onChange={this.onChange}
                                    placeholder="000.000.000-00" required
                                >
                                </InputMask>
                            </div>
                            <div className="form-group">
                                <label for="phone-number-register-establishment-2">Número de telefone:</label>
                                <InputMask mask="(99) 99999-9999" maskChar={null} type="tel" className="form-control" id="phone-number-register-establishment-2" placeholder="(00) 00000-0000"
                                    name="phoneNumber" value={phoneNumber} value={this.state.value} onChange={this.onChange}
                                    onKeyPress={this.onKeyPressPhone} required
                                ></InputMask>
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