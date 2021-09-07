import React from 'react';

import '../../styles/amountOfPeopleUser.css';

export default class AmountOfPeopleUser extends React.Component {
    constructor() {
        super();

        this.state = {
            quantityCustomer: '',
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value });
    }

    render() {
        const { quantityCustomer } = this.state;

        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group" id="registration-of-the-number-of-people">
                            <div class="form-group">
                                <label for="quantity-customer" class="quantity-customer">Mesa para quando? <br />Não esqueça de incluir você!</label>
                                <input type="text" 
                                class="form-control"
                                id="quantity-customer"
                                value={quantityCustomer}
                                value={this.state.value}
                                onChange={this.onChange}
                                required
                                pattern="\d*" />
                            </div>
                            <button class="btn btn-outline-danger btn-quantity-customer">CONTINUAR</button>                     
                        </div>

                    </form>
                </div>
            </React.Fragment>
        )
    }
}