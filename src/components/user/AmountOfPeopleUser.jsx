import React from 'react';

import '../../styles/amountOfPeopleUser.css';
import { Link } from 'react-router-dom';

export default class AmountOfPeopleUser extends React.Component {
    constructor() {
        super();

        this.state = {
            quantityCustomer: '',
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

    onClickHidden() {
        if (document.getElementById('select-table').offsetParent === null) {
            document.getElementById('registration-of-the-number-of-people').hidden="true";
            document.getElementById('select-table').removeAttribute('hidden');
        }
    }

    table() {
        const types = ["N", "S", "N", "N", "N", "S", "N", "N", "S", "S"];
        const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let tables = [
            {
                busy: types,
                board: table,
            }
        ]
        return tables;
    }

    render() {
        const { quantityCustomer } = this.state;
        const user = localStorage.getItem('cpf');
        const productList = "/product-list";
        const tables = this.table();

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
                            <button class="btn btn-outline-danger btn-quantity-customer" onClick={this.onClickHidden}>CONTINUAR</button>                     
                        </div>
                        <div class="form-group" id="select-table" hidden>
                            <h2>Por favor selecione <br /> uma mesa</h2>
                            <div className="background-color">
                                {
                                    tables.map((item) => {
                                        const occupy = item.busy.map((itens) => {
                                            if (itens === 'N') {
                                                return "tables";
                                            } else {
                                                return "tables-1";
                                            }
                                        })
                                        return item.board.map((t, index) => {
                                            return <div key={index} class={[occupy[index]]}><p className="number-table">Mesa {t}</p></div>
                                        })
                                    })
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}