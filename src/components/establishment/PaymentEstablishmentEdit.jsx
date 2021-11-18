import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

function PaymentEstablishmentEdit() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {

    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="customer-demand">
            <div className="row">
                <div className="col-12">
                    <div className="content-menu-register">
                        <div className="content-in-text">
                            <h1>Bem vindo,</h1>
                            <h2>nomeUser</h2>
                            <Link to="/payment-establishment">
                                <button className="btn btn-outline-danger btn-login">PAGAMENTOS</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="customer-demand" className="payment-demands">
                <div className="demand-and-status">
                    <h2>Comanda: 5</h2>
                    <h2>Mesa: 3</h2>
                    <h2>Status: Aguardando pagamento</h2>
                </div>
                <div className="order-status">
                    <p className="order-item">5 - Frango Grelhado</p>
                    <p className="order-value">R$50.00</p>
                </div>
                <div className="order-status">
                    <p className="order-item">5 - Frango Grelhado</p>
                    <p className="order-value">R$50.00</p>
                </div>
                <div className="order-status">
                    <p className="order-item">5 - Frango Grelhado</p>
                    <p className="order-value">R$50.00</p>
                </div>
                <div className="order-status">
                    <p className="order-item">5 - Frango Grelhado</p>
                    <p className="order-value">R$50.00</p>
                </div>
                <div className="total">
                    <div className="total-and-values">
                        <p>Taxa</p>
                        <p>Gorjeta</p>
                        <p>Forma de pagamento</p>
                    </div>
                    <div className="value">
                        <p>R$20.00</p>
                        <p>R$0.00</p>
                    </div>
                </div>
                <div className="order-status">
                    <p className="order-item">Forma de pagamento</p>
                    <select class="form-select" name="" id="" >
                        <option value="1">Cartão de crédito</option>
                        <option value="2" selected>Cartão de débito</option>
                        <option value="2" selected>Dinheiro</option>
                    </select>
                </div>
                <hr className="hr" />
                <div class="order-value-total">
                    <div className="value-total">
                        <h2>Total R$220.00</h2>
                    </div>
                </div>
            </div>
            <div className="confirm c-2">
                <Link to="">
                    <button className="btn btn-outline-danger">EFETUAR PAGAMENTO</button>
                </Link>
            </div>
        </div>
    )
}

export default PaymentEstablishmentEdit;