import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import establishmentService from '../../services/EstablishmentService';

import '../../styles/demand.css';

function Demand() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await establishmentService.getOrderpads().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickDemand(ids) {
        const id = parseInt(ids);
        console.log(id);
        localStorage.setItem('demandId', id);
        window.location = "/customer-demand";
    }

    return (
        <div className="container-fluid">
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
            <div className="all-demands">
                <div id="demands">
                    {
                        posts.map((item) => {
                            const ids = [item.id];
                            const statusDemand = [item.status];
                            const customersIds = [item.customerId];
                            const customersNames = [item.customerName];
                            const tablesIds = [item.tableId];
                            const quantityCustomers = [item.quantityCustomer];
                            let demand = [
                                {
                                    id: ids,
                                    status: statusDemand,
                                    customerId: customersIds,
                                    customerName: customersNames,
                                    tableId: tablesIds,
                                    quantityCustomer: quantityCustomers,
                                }
                            ]
                            console.log(item);
                            return demand.map((itens, i) => {
                                const status = itens.status.map((s) => {
                                    return s;
                                });
                                const table = itens.tableId.map((t) => {
                                    return t
                                });
                                const id = itens.id.map((itens) => {
                                    return itens;
                                })
                                return (
                                    <div className="form-group demands-group" key={i}>
                                        <div className="demand" onClick={() => onClickDemand(id)}>
                                            <label>Comanda: {id}</label>
                                            <label>Mesa: {table}</label>
                                            <label>Staus: {status}</label>
                                        </div>
                                    </div>
                                )
                            })
                        })
                    }
                </div>
                {/* <div id="demands">
                    <div className="form-group demands-group">
                        <div className="demand" onClick={establishmentService.getOrderpadToId}>
                            <label>Comanda:</label>
                            <label>Mesa:</label>
                            <label>Status:</label>
                        </div>
                    </div>
                    <div className="form-group demands-group" >
                        <div className="demand" onClick={establishmentService.getOrders}>
                            <label>Comanda:</label>
                            <label>Mesa:</label>
                            <label>Status:</label>
                        </div>
                    </div>
                    <div className="form-group demands-group">
                        <div className="demand" onClick={onClickDemand}>
                            <label>Comanda:</label>
                            <label>Mesa:</label>
                            <label>Status:</label>
                        </div>
                    </div>
                    <div className="form-group demands-group">
                        <div className="demand" onClick={onClickDemand}>
                            <label>Comanda:</label>
                            <label>Mesa:</label>
                            <label>Status:</label>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Demand;