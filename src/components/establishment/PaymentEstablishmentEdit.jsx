import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import establishmentService from '../../services/EstablishmentService';

function PaymentEstablishmentEdit() {
    const [posts, setPosts] = useState([]);
    const [selects, setSelects] = useState([]);

    async function fetchPosts() {
        const id = localStorage.getItem('demaindIdPayment');
        await establishmentService.getOrders(id).then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickPayment() {
        const paymentMethod = localStorage.getItem('formOfPayment');
        const customerId = parseInt(localStorage.getItem('customerIdPayment'));
        const paybleValue = parseFloat(localStorage.getItem('paybleValuePayment')).toFixed(2);
        console.log(customerId, paymentMethod, paybleValue);
        establishmentService.postPaymentManual(customerId, paymentMethod, parseFloat(paybleValue))
    }

    function replaceStatus() {
        const status = localStorage.getItem('statusDemandPayment');
        switch (status) {
            case '0':
                return 'Aberto';
            case '1':
                return 'Aguardando pagamento';
            case '2':
                return 'Pago';
            case '3':
                return 'Aguardando pagamento manual';
        }
    }

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
                    <h2>Comanda: {localStorage.getItem('demaindIdPayment')}</h2>
                    <h2>Mesa: {localStorage.getItem('tablePayment')}</h2>
                    <h2>Status: {replaceStatus()}</h2>
                </div>
                {
                    posts.map(itens => (
                        <div key={String(itens.id)}>
                            <div className="order-status">
                                <p className="order-item">{itens.quantity} - {itens.productName}</p>
                                <p className="order-value">R${itens.value}</p>
                            </div>

                        </div>
                    ))
                }
                <div className="total">
                    <div className="total-and-values">
                        <p>Taxa</p>
                        <p>Gorjeta</p>
                    </div>
                    <div className="value">
                        <p>R${localStorage.getItem('ratePayment')}</p>
                        <p>R${localStorage.getItem('tipPayment')}</p>
                    </div>
                </div>
                <div className="order-status">
                    <p className="order-item">Forma de pagamento</p>
                    {localStorage.setItem('formOfPayment', selects)}
                    <select className="form-select" value={selects} onChange={e => setSelects(e.target.value)} >
                        <option value=""></option>
                        <option value="CREDITO">Cartão de crédito</option>
                        <option value="DEBITO" selected>Cartão de débito</option>
                        <option value="DINHEIRO" selected>Dinheiro</option>
                    </select>
                </div>
                <hr className="hr" />
                <div className="order-value-total">
                    <div className="value-total">
                        <h2>Total R${localStorage.getItem('paybleValuePayment')}</h2>
                    </div>
                </div>
            </div>
            <div className="confirm c-2">
                <p id="alert-payment-success-establishment" hidden></p>
                <button className="btn btn-outline-danger" onClick={onClickPayment}>EFETUAR PAGAMENTO</button>
            </div>
        </div>
    )
}

export default PaymentEstablishmentEdit;