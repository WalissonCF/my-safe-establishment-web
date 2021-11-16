import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/orderSummary.css';

import customerUtils from '../../utils/customerUtils';

function OrderSummary() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() { }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="content-menu-register">
                        <div className="content-in-text">
                            <h1>Bem vindo,</h1>
                            <h2>{customerUtils.getCustomerName()}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="summary">
                <h2>Resumo</h2>
                <div className="products-summary">
                    <div className="products">
                        <p>Frango</p>
                        <p>Feijoada</p>
                        <p>Salada</p>
                        <p>Suco</p>
                    </div>
                    <div className="values">
                        <p>R$40.00</p>
                        <p>R$80.00</p>
                        <p>R$9.00</p>
                        <p>R$7.00</p>
                    </div>
                </div>
                <hr />
                <div className="summary">
                    <div className="total-summary">
                        <p>Taxa</p>
                        <p>Total</p>
                    </div>
                    <div className="values">
                        <p>R$80.00</p>
                        <p>R$XXX.XX</p>
                    </div>
                </div>
                <Link to="/payment">
                    <button class="btn btn-outline-danger confirm-summary">CONFIRMAR</button>
                </Link>
            </div>
        </div>
    )
}

export default OrderSummary;