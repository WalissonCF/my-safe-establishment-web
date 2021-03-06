import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import userService from '../../services/UserService';

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
        if (this.state.selectedOption === 'credito' || this.state.selectedOption === 'debito') {
            const paymentMethod = 'Cartao de Credito';
            userService.postCloserOrder(paymentMethod, tip);
        } else {
            document.getElementById('alert').removeAttribute('hidden');
        }
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
                                <InputMask type="tel" name="tip" maskChar={null} mask="R$999.99" className="form-control"
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" for="gridRadios1">D??bito <br /></label>
                                <input className="form-check-input" type="radio" name="gridRadios"
                                    value="debito" checked={this.state.selectedOption === "debito"}
                                    onChange={this.onValueChange} />
                            </div>
                            <div class="form-check">
                                <label className="form-check-label" for="gridRadios2">Cr??dito</label>
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
                            <div>
                                <p id="alert" hidden>*Por favor selecione um m??todo de pagamento</p>
                            </div>
                            <button className="btn btn-outline-danger" type="submit">CONTINUAR</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

