import React, { useEffect, useState } from 'react';
import establishmentService from '../../services/EstablishmentService';
import { Link } from 'react-router-dom';

import '../../styles/customerDemand.css';


function CustomerDemand() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await establishmentService.getDemand().then(setPosts);
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
                            <Link to="/demands">
                                <button className="btn btn-outline-danger btn-login">PEDIDOS</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="customer-demand">
                <div className="demand-and-status">
                    <h2>Comanda: 5</h2>
                    <h2>Mesa: 3</h2>
                    <h2>Status: Aguardando pagamento</h2>
                </div>
                <div className="order-status">
                    <p className="order-item">5 - Frango Grelhado</p>
                    <p className="order-value">R$50.00</p>
                    <select class="form-select" name="" id="" disabled>
                        <option value="1">Em progresso</option>
                        <option value="2" selected>Entregue</option>
                    </select>
                </div>
                <div className="order-status">
                    <p className="order-item">5 - Frango Grelhado</p>
                    <p className="order-value">R$50.00</p>
                    <select class="form-select" name="" id="" disabled>
                        <option value="1">Em progresso</option>
                        <option value="2" selected>Entregue</option>
                    </select>
                </div>
                <div className="order-status">
                    <p className="order-item">5 - Frango Grelhado</p>
                    <p className="order-value">R$50.00</p>
                    <select class="form-select" name="" id="" disabled>
                        <option value="1">Em progresso</option>
                        <option value="2" selected>Entregue</option>
                    </select>
                </div>
                <div className="order-status">
                    <p className="order-item">5 - Frango Grelhado</p>
                    <p className="order-value">R$50.00</p>
                    <select class="form-select" name="" id="">
                        <option value="1">Em progresso</option>
                        <option value="2" selected>Entregue</option>
                    </select>
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
                        <p>Cartão de crédito</p>
                    </div>
                </div>
                <hr className="hr" />
                <div class="order-value-total">
                    <div className="value-total">
                        <h2>Total R$220.00</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDemand;