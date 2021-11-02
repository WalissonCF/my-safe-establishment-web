import React from 'react';

import '../../styles/productRegistration.css';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

export default class ProductRegistration extends React.Component {
    constructor() {
        super();

        this.state = {
            test: '',
            profileImg: 'https://blogs.opovo.com.br/bancadoanime/wp-content/uploads/sites/59/2020/04/Shokugeki-no-Souma-5.jpg',
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {

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
        const { profileImg } = this.state;
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
                                <img src={profileImg} alt="" className="preview-image" />
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
                                <label for="corporate-name">Nome do produto:</label>
                                <input type="text" className="form-control" id="corporate-name" />
                            </div>
                            <div class="form-group">
                                <label for="corporate-name">Valor:</label>
                                <InputMask mask="R$999,999,999" maskChar={null}
                                    type="tel" className="form-control" id="corporate-name"
                                    placeholder="R$"></InputMask>
                            </div>
                            <div class="form-group">
                                <label for="corporate-name">Ingredientes:</label>
                                <textarea className="form-control" id="ingredients"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="corporate-name">Descrição:</label>
                                <textarea className="form-control" id="ingredients"></textarea>
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