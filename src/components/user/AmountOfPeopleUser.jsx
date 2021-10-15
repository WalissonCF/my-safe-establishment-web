import React from 'react';

import '../../styles/amountOfPeopleUser.css';

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
        const quantityCustomer = document.getElementById('quantity-customer');
        if (quantityCustomer.value) {
            localStorage.setItem("quantityCustomer", quantityCustomer.value);
            window.location = '/tables';   
        }
    }

    onClickCheckTable(e) {
        e.preventDefault();
        const value = e.target.innerText;
        const table = value?.replace(/[^0-9]/g, '');
        localStorage.setItem('table', table);
        const tableSelected = localStorage.getItem('table');
        document.getElementById('table-selected').innerHTML = `Mesa: ${tableSelected}`;
    }

    render() {
        const { quantityCustomer } = this.state;
        const user = localStorage.getItem('userName');

        const userr = localStorage.getItem('user');
        console.log('user', JSON.parse(userr));
        const teste = JSON.parse(userr);
        const t = teste.map((u) => {
            return u.name;
        })
        console.log('t', t)

        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="content-in-text">
                                <h3>My safe establishment web</h3>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group" id="registration-of-the-number-of-people">
                            <div class="form-group">
                                <h3>Bem vindo, <br /> {user}</h3>
                                <label for="quantity-customer" class="quantity-customer">Mesa para quantos? <br />Não esqueça de incluir você!</label>
                                <input type="text" 
                                class="form-control"
                                id="quantity-customer"
                                name="quantityCustomer"
                                value={quantityCustomer}
                                onChange={this.onChange}
                                required
                                pattern="\d*" />
                            </div>
                            <button class="btn btn-outline-danger btn-quantity-customer" onClick={this.onClickProceed}>CONTINUAR</button>                     
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}