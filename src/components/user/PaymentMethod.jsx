import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import InputMask from 'react-input-mask';

import '../../styles/payment.css'
import customerUtils from '../../utils/customerUtils';

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
        tip: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div id="PaymentForm">
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
                                    placeholder="expiry"
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
                                    placeholder="cvc"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <h3 className="total-products">Total: R${customerUtils.getTotalValueProduct()}</h3>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}