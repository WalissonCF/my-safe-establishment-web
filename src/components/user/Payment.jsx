import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import userService from '../../services/UserService';
import AnimationPaymentApp from '../animations/PaymentApp';
import AnimationPaymentMoney from '../animations/PaymentMoney';

import '../../styles/payment.css'
import customerUtils from '../../utils/customerUtils';

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
        tip: '',
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

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value })
    }

    formSubmit(event) {
        event.preventDefault();
        const { tip } = this.state;
        if (this.state.selectedOption === 'credito') {
            const paymentMethod = 'Credito';
            localStorage.setItem("paymentMethod", paymentMethod);
            userService.postCloserOrder(paymentMethod, tip);
        } else if (this.state.selectedOption === 'debito') {
            const paymentMethod = 'Debito';
            localStorage.setItem("paymentMethod", paymentMethod);
            userService.postCloserOrder(paymentMethod, tip);
        } else {
            document.getElementById('alert').removeAttribute('hidden');
        }
    }

    onClickPaymentApp() {
        if (document.getElementById("select-type-payment").offsetParent === null) {
            document.getElementById("payments-methods").hidden = "true";
            customerUtils.removeHidden("select-type-payment");
        } else {
            customerUtils.removeHidden("payments-methods");
            document.getElementById("select-type-payment").hidden = "true";
        }
    }

    onClickPaymentMoney() {
        window.location = "/calling-attendant";
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3 class="title-payment">Pagamento</h3>
                    </div>
                </div>
                <div id="payments-methods">
                    <div id="payment-app" onClick={this.onClickPaymentApp}>
                        <AnimationPaymentApp></AnimationPaymentApp>
                        <div className="warn-box">
                            <p>Pagar pelo App</p>
                        </div>
                    </div>
                    <div id="payment" onClick={this.onClickPaymentMoney}>
                        <AnimationPaymentMoney></AnimationPaymentMoney>
                        <div className="warn-box">
                            <p>Chamar atendente</p>
                        </div>
                    </div>
                </div>
                <div className="row" id="select-type-payment" hidden>
                    <div className="col-12">
                        <form onSubmit={this.formSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Gorjeta:</label>
                                <InputMask type="tel" name="tip" maskChar={null} mask="R$999.99" className="form-control"
                                    onChange={this.onChange} />
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
                            <div>
                                <p id="alert" hidden>*Por favor selecione um método de pagamento</p>
                                <p id="alert-payment-error" hidden></p>
                            </div>
                            <button className="btn btn-outline-danger" type="submit">CONTINUAR</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

