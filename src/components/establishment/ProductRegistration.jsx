import React from 'react';

import '../../styles/productRegistration.css';

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
                this.setState({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    render() {
        const {profileImg} = this.state;

        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="content-menu-register">
                                <div class="content-in-text">
                                    <h1>Bem vindo,</h1>
                                    <h2>nomeUser</h2>
                                    <h1>CNPJ:</h1>
                                    <h2>00.000.000/0000-00</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <div class="canvas">
                                <h4>Cadastre seu produto:</h4>
                                <img src={profileImg} alt="" class="preview-image" />
                                <input type="file" id="upload-image"
                                class="form-control-file"
                                onChange={this.imageHandler}
                                accept="image/*" />
                                <label class="label-help">Clique no botão abaixo para <br /> adicionar uma imagem</label>
                                <label class="upload-image" htmlFor="upload-image" >
                                    <i id="image" className="material-icons">add_box</i>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>

            </React.Fragment>
        )
    }
}