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

    onClickYes() {
        document.getElementById('warning-payment').hidden = "true";
        document.getElementById('label-warning-payment').hidden = "true";
        customerUtils.removeHidden('button-payment');
    }

    onClickNo() {
        if (document.getElementById('separate-card-payment').offsetParent === null) {
            document.getElementById('warning-payment').hidden = "true";
            document.getElementById('label-warning-payment').hidden = "true";
            customerUtils.removeHidden('separate-card-payment');
        } else {
            customerUtils.removeHidden('warning-payment');
            customerUtils.removeHidden('label-warning-payment');
            document.getElementById('separate-card-payment').hidden = "true";
        }
    }

    onBlurValidateValuePayment() {
        const value = parseFloat(customerUtils.getTotalValueProduct());
        const valuePayment = parseFloat(customerUtils.unFormatNumber(document.getElementById('valuePayment').value))
        console.log('value', value, 'valuePayment', valuePayment);
        if (valuePayment > value) {
            customerUtils.removeHidden('alert-payment');
            document.getElementById('button-payment').hidden = "true";
        } else {
            document.getElementById('alert-payment').hidden = "true";
            customerUtils.removeHidden('button-payment');
        }
    }

    onClickPaymentOrderPad(e) {
        e.preventDefault();
        const { number, name, expiry, cvc } = this.state;
        const typeCard = localStorage.getItem('paymentMethod');
        const value = document.getElementById('valuePayment').value;
        let valuePayment = null;
        if (!value) {
            valuePayment = parseFloat(customerUtils.getTotalValueProduct());
        } else {
            valuePayment = parseFloat(customerUtils.unFormatNumber(value));
        }
        console.log(valuePayment)

        let card = {
            cardNumber: number,
            dateExpiry: expiry,
            cvv: cvc,
            nameCard: name,
            flagCard: 'MasterCard'
        }
        console.log('ta enviando')
        console.log(card)
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
                        <form id="form-credit-card">
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
                                    placeholder="Data de validade"
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
                        </form>
                        <div className="payment">
                            <div className="form-group label-warning-payment" id="label-warning-payment">
                                <label>Deseja pagar tudo somente em 1 cartão?</label>
                            </div>
                            <div className="warning-payment" id="warning-payment">
                                <div>
                                    <button className="btn btn-outline-danger" onClick={this.onClickYes}>SIM</button>
                                </div>
                                <div>
                                    <button className="btn btn-outline-danger" onClick={this.onClickNo}>NÃO</button>
                                </div>
                            </div>
                            <div className="form-group" id="separate-card-payment" hidden>
                                <label>Quanto deseja pagar com esse cartão?</label>
                                <InputMask mask="R$999,999,999" maskChar={null} id="valuePayment" type="tel"
                                    className="form-control" placeholder={`R$${customerUtils.getTotalValueProduct()}`}
                                    onBlur={this.onBlurValidateValuePayment}></InputMask>
                                <p id="alert-payment" hidden>*Valor superior ao valor total do pedido</p>
                            </div>
                            <div>
                                <p id="alert">*Em caso de dúvida procurar um atendente</p>
                            </div>
                            <div id="alert-success-payment" hidden>
                                <AnimationSuccess></AnimationSuccess>
                                <p id="alert-success-payment-text">*Pago*</p>
                            </div>
                        </div>
                        <div id="button-payment" hidden>
                            <button className="btn btn-outline-danger payment-method" type="submit">PAGAR</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}