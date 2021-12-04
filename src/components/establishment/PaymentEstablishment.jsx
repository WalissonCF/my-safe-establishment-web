import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import '../../styles/paymenteEstablishment.css';
import establishmentService from '../../services/EstablishmentService';

function PaymentEstablishment() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await establishmentService.getOrderpads().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickComand(id, customerId, paybleValue, tip, rate) {
        localStorage.setItem('demaindIdPayment', id);
        localStorage.setItem('customerIdPayment', customerId);
        localStorage.setItem('paybleValuePayment', paybleValue)
        localStorage.setItem('tipPayment', tip)
        localStorage.setItem('ratePayment', rate)

        window.location = "/payment-establishment-edit";
    }

    return (
        <div className="customer-demand">
            <div className="row">
                <div className="col-12">
                    <div className="content-menu-register">
                        <div className="content-in-text">
                            <h1>Bem vindo,</h1>
                            <h2>nomeUser</h2>
                            <Link to="/menu">
                                <button className="btn btn-outline-danger btn-login">MENU</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tables-establishment">
                <div className="all-tables all-payments">
                    {
                        posts.map((item) => {
                            const id = [item.id];
                            localStorage.setItem('tablePayment', item.tableId);
                            localStorage.setItem('statusDemandPayment', item.status);
                            let demand = [
                                {
                                    id: id,
                                }
                            ]
                            return demand.map((itens) => {
                                const id = itens.id.map((i) => {
                                    return i;
                                });
                                return (
                                    <div className="form-group tables-form-group" key={String(id)} onClick={() => onClickComand(id, item.customerId, item.paybleValue, item.tip, item.rate)}>
                                        <div className="tables">
                                            <p className="number-table comand">Comanda: {id}</p>
                                        </div>
                                    </div>
                                )
                            })
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PaymentEstablishment;