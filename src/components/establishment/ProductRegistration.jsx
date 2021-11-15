import React from 'react';

import '../../styles/productRegistration.css';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import establishmentService from '../../services/EstablishmentService';
import customerUtils from '../../utils/customerUtils';

export default class ProductRegistration extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            typeProduct: '',
            description: '',
            ingredients: '',
            value: '',
            test: '',
            profileImg: '',
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, typeProduct, description, ingredients, value, profileImg } = this.state;
        establishmentService.postRegisterProducts(name, typeProduct, description, ingredients, value, profileImg);
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    render() {
        const { name, typeProduct, description, ingredients, value, profileImg } = this.state;
        const linkDemand = "/customer-demand";

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-menu-register">
                                <div className="content-in-text">
                                    <h1>Bem vindo,</h1>
                                    <h2>nomeUser</h2>
                                    <h1>CNPJ:</h1>
                                    <h2>00.000.000/0000-00</h2>
                                    <Link to={linkDemand}>
                                        <button className="btn btn-outline-danger btn-login">PEDIDOS</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit} id="form-register-product">
                        <div className="form-group">
                            <div className="canvas">
                                <h4>Cadastre seu produto:</h4>
                                <img src={profileImg} alt="" className="preview-image" id="img-product" />
                                <input type="file" id="upload-image"
                                    className="form-control-file"
                                    onChange={this.imageHandler}
                                    accept="image/*" />
                                <label className="label-help">Clique no botão abaixo para <br /> adicionar uma imagem</label>
                                <label className="upload-image" htmlFor="upload-image" >
                                    {/* https://materializecss.com/icons.html */}
                                    <i id="image" className="material-icons">add_box</i>
                                </label>
                            </div>
                            <div class="form-group">
                                <label>Nome do produto:</label>
                                <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.onChange} />
                            </div>
                            <div class="form-group">
                                <label>Valor:</label>
                                <InputMask mask="R$999,999,999" maskChar={null}
                                    type="tel" className="form-control" id="value" name="value" value={value} onChange={this.onChange}
                                    placeholder="R$"></InputMask>
                            </div>
                            <div class="form-group">
                                <label>Tipo do produto:</label>
                                <input type="text" className="form-control" id="typeProduct" name="typeProduct" value={typeProduct} onChange={this.onChange} />
                            </div>
                            <div class="form-group">
                                <label>Ingredientes:</label>
                                <textarea className="form-control" id="ingredients" name="ingredients" value={ingredients} onChange={this.onChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea className="form-control" id="description" name="description" value={description} onChange={this.onChange}></textarea>
                            </div>
                        </div>
                        <div className="confirm">
                            <p id="register-product">Cadastre seu produto clicando no botão abaixo</p>
                            {/* <Link to={productList}> */}
                            <button class="btn btn-outline-danger btn-quantity-customer btn-select-table">CADASTRAR</button>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}