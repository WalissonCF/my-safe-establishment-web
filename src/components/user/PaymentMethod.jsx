import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import InputMask from 'react-input-mask';
import userService from '../../services/UserService';

import '../../styles/payment.css'
import customerUtils from '../../utils/customerUtils';
import AnimationSuccess from '../animations/Success';

export default class PaymentMethod extends React.Component {
    constructor() {
        super();
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

    onSubmit = (e) => {
        e.preventDefault();
        const { number, name, expiry, cvc } = this.state;
        console.log(number, name, expiry, cvc);
    }

    onClickPaymentOrderPad() {
        userService.postPaymentOrdenPad();
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div id="PaymentForm">
                        <div id="card">
                            <Cards
                                cvc={this.state.cvc}
                                expiry={this.state.expiry}
                                focused={this.state.focus}
                                name={this.state.name}
                                number={this.state.number}
                            />
                        </div>
                        <form id="form-credit-card" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <InputMask
                                    mask="9999 9999 9999 9999" maskChar={null}
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
                                    mask="99/99" maskChar={null}
                                    type="tel"
                                    name="expiry"
                                    placeholder="Expiry"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <InputMask
                                    mask="999" maskChar={null}
                                    type="tel"
                                    name="cvc"
                                    placeholder="CVV"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <h3 className="total-products">Total: R${customerUtils.getTotalValueProduct()}</h3>
                            </div>
                            <div>
                                <p id="alert">*Em caso de dúvida procurar um atendente</p>
                            </div>
                            {/* <button className="btn btn-outline-danger" type="submit">PAGAR</button> */}
                            <div id="alert-success-payment" hidden>
                                <AnimationSuccess></AnimationSuccess>
                                <p id="alert-success-payment-text">*Pago*</p>
                            </div>
                        </form>
                        <button className="btn btn-outline-danger payment-method" onClick={this.onClickPaymentOrderPad}>PAGAR</button>
                    </div>
                </div>
            </div>
        )
    }
}