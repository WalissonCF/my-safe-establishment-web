import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import InputMask from 'react-input-mask';

import '../../styles/payment.css'

export default class PaymentForm extends React.Component {
    constructor() {
        super();
        
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        if (this.state.selectedOption === 'credito' || this.state.selectedOption === 'debito') {
            if (document.getElementById('PaymentForm').offsetParent === null) {
                document.getElementById('select-type-payment').hidden="true";
                document.getElementById('PaymentForm').removeAttribute('hidden');
            }
        }
        console.log(this.state.selectedOption)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3 class="title-payment">Pagamento</h3>
                    </div>
                </div>
                <div className="row" id="select-type-payment">
                    <div className="col-12">
                        <form onSubmit={this.formSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Gorjeta:</label>
                                <InputMask className="form-control" />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" for="gridRadios1">Débito <br /></label>
                                <input className="form-check-input" type="radio" name="gridRadios" 
                                value="debito" checked={this.state.selectedOption === "debito"}
                                onChange={this.onValueChange} />
                            </div>
                            <div class="form-check">
                                <label className="form-check-label" for="gridRadios2">Crédito</label>
                                <input className="form-check-input" type="radio" name="gridRadios" 
                                value="credito" checked={this.state.selectedOption === "credito"}
                                onChange={this.onValueChange} />
                            </div>
                            <div class="form-check">
                                <label className="form-check-label" for="gridRadios3">Dinheiro</label>
                                <input className="form-check-input" type="radio" name="gridRadios" 
                                value="dinheiro" checked={this.state.selectedOption === "dinheiro"}
                                onChange={this.onValueChange} disabled />
                            </div>
                            <div className="form-group">
                                <h3 className="total-products">Total:</h3>
                            </div>
                            <button className="btn btn-outline-danger" type="submit">Continuar</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div id="PaymentForm" hidden>
                            <Cards
                                cvc={this.state.cvc}
                                expiry={this.state.expiry}
                                focused={this.state.focus}
                                name={this.state.name}
                                number={this.state.number}
                            />
                            <form id="form-credit-card">
                                <div className="form-group">
                                    <InputMask
                                        mask="9999 9999 9999 9999"
                                        type="tel"
                                        name="number"
                                        placeholder="Número do cartão"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <InputMask
                                        type="text"
                                        name="name"
                                        placeholder="Nome no cartão"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <InputMask
                                        mask="99/99"
                                        type="tel"
                                        name="expiry"
                                        placeholder="expiry"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <InputMask
                                        mask="999"
                                        type="tel"
                                        name="cvc"
                                        placeholder="cvc"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                        className="form-control"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

