import React, { useEffect, useState } from 'react';
import establishmentService from '../../services/EstablishmentService';
import { Link } from 'react-router-dom';

import '../../styles/customerDemand.css';
import customerUtils from '../../utils/customerUtils';

function CustomerDemand() {
    const [posts, setPosts] = useState([]);
    const [selects, setSelects] = useState([]);

    async function fetchPosts() {
        const id = localStorage.getItem('demandId');
        await establishmentService.getOrders(id).then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function replaceStatus() {
        const status = localStorage.getItem('statusDemandId');
        switch (status) {
            case '0':
                return 'Aberto';
            case '1':
                return 'Aceito';
            case '2':
                return 'Em entrega';
            case '3':
                return 'Entregue';
        }
    }

    function changeStatusOrder(ids, value) {
        setSelects(value);
        const customerId = parseInt(localStorage.getItem('customerIdDemand'));
        const id = parseInt(ids);
        const product = posts.find(p => p.id === id);
        const updateStatus = product.status = value;
        const updateProduct = { ...product, status: updateStatus };
        const allProducts = posts.map((item) => {
            return item;
        });
        const updateListProduct = allProducts.filter(p => p === id ? { ...updateProduct } : product);
        setPosts([...updateListProduct]);
        establishmentService.updateOrderStatus(id, value, customerId);
    }

    return (
        <div className="customer-demand">
            <div className="row">
                <div className="col-12">
                    <div className="content-menu-register">
                        <div className="content-in-text">
                            <h1>Bem vindo,</h1>
                            <h2>{customerUtils.getCustomerName()}</h2>
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
                    <h2>Status: {replaceStatus()}</h2>
                </div>
                <div id="all-demand-customer">
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
                                const note = itens.note.map((n) => {
                                    return n;
                                })
                                return (
                                    <div className="order-status" key={id}>
                                        <p className="order-item">Quantidade: {quantity} - {productName}</p>
                                        <p className="order-value">R${value}</p>
                                        {localStorage.setItem('statusOrder', selects)}
                                        {/* <div className="note-demand"> */}
                                        <p>Observação:</p>
                                        <p>{note}</p>
                                        {/* </div> */}
                                        <select id={id} value={status} className="form-select"
                                            // onChange={e => setSelects(e.target.value)}
                                            onChange={e => changeStatusOrder(e.target.id, e.target.value)}
                                        >
                                            <option value=""></option>
                                            <option value="0">Em progresso</option>
                                            <option value="1">Aceito</option>
                                            <option value="2">Em entrega</option>
                                            <option value="3">Entregue</option>
                                        </select>
                                        <div id={`alert-customer-${id}`}>
                                            <p id={`alert-customer-demand-${id}`} className="alert-customer-demand"></p>
                                        </div>
                                        {
                                            status.map((n) => {
                                                console.log(n)
                                                if (n === '3') {
                                                    setTimeout(function () {
                                                        document.getElementById(`${id}`).disabled = "true";
                                                    }, 900) 
                                                }
                                            })
                                        }
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

export default CustomerDemand;