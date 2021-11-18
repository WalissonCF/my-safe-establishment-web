import React from 'react';

import '../../styles/amountOfPeopleUser.css';
import customerUtils from '../../utils/customerUtils';

export default class AmountOfPeopleUser extends React.Component {
    constructor() {
        super();

        this.state = {
            quantityCustomer: '',
            tables: null,
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { quantityCustomer } = this.state;
    }

    onClickProceed() {
        const quantityCustomer = document.getElementById('qtde-customer');
        if (quantityCustomer.innerText) {
            localStorage.setItem("quantityCustomer", quantityCustomer.innerText);
            window.location = '/tables';
        }
    }

    onClickSubtraction() {
        const qtdeProduct = document.getElementById('qtde-customer').innerText;
        if (parseInt(qtdeProduct) > 1) {
            const qtdeTotalProduct = parseInt(qtdeProduct) - 1;
            document.getElementById('qtde-customer').innerText = `${qtdeTotalProduct.toString()}`;
        }
    }

    onClickSum() {
        const qtdeProduct = document.getElementById('qtde-customer').innerText;
        const qtdeTotalProduct = parseInt(qtdeProduct) + 1;
        document.getElementById('qtde-customer').innerText = `${qtdeTotalProduct.toString()}`;
    }

    render() {
        const { quantityCustomer } = this.state;

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-in-text">
                                <h3>My safe establishment web</h3>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group" id="registration-of-the-number-of-people">
                            <div class="form-group">
                                <h3>Bem vindo, <br /> {customerUtils.getCustomerName()}</h3>
                                <label for="quantity-customer" class="quantity-customer">Mesa para quantos? <br />Não esqueça de incluir você!</label>
                                <div className="info-customer">
                                    <i className="material-icons" onClick={this.onClickSubtraction}>remove_circle_outline </i>
                                    <label id="qtde-customer">1</label>
                                    <i className="material-icons" onClick={this.onClickSum}>add_circle_outline</i>
                                </div>
                            </div>
                            <button class="btn btn-outline-danger btn-quantity-customer" onClick={this.onClickProceed}>CONTINUAR</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}