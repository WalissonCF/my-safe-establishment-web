import React, { useEffect, useState } from 'react';
import establishmentService from '../../services/EstablishmentService';
import { Link } from 'react-router-dom';

import '../../styles/customerDemand.css';

function CustomerDemand() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const id = localStorage.getItem('demandId');
        await establishmentService.getOrders(id).then(setPosts);
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
                    <h2>Comanda: {localStorage.getItem('demandId')}</h2>
                    <h2>Mesa: {localStorage.getItem('tableDemandId')}</h2>
                    <h2>Status: {localStorage.getItem('statusDemandId')}</h2>
                </div>
                {
                    posts.map((item) => {
                        const id = [item.id];
                        const orderPadId = [item.orderPadId];
                        const note = [item.note];
                        const productId = [item.productId];
                        const productName = [item.productName];
                        const quantity = [item.quantity];
                        const status = [item.status];
                        const value = [item.value];
                        let order = [
                            {
                                id: id,
                                orderPadId: orderPadId,
                                note: note,
                                productId: productId,
                                productName: productName,
                                quantity: quantity,
                                status: status,
                                value: value,
                            }
                        ];
                        return order.map((itens) => {
                            const id = itens.id.map((i) => {
                                return i;
                            });
                            const quantity = itens.quantity.map((q) => {
                                return q;
                            });
                            const productName = itens.productName.map((p) => {
                                return p;
                            })
                            const status = itens.status.map((s) => {
                                return s;
                            })
                            const value = itens.value.map((v) => {
                                return v;
                            })
                            return (
                                <div className="order-status">
                                    <p className="order-item">Quantidade: {quantity} - {productName}</p>
                                    <p className="order-value">R${value}</p>
                                    <select className="form-select">
                                        <option value=""></option>
                                        <option value="1">Em progresso</option>
                                        <option value="2">Entregue</option>
                                    </select>
                                </div>
                            )
                        })
                    })
                }
            </div>
        </div>
    )
}

export default CustomerDemand;