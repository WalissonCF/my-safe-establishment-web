import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import '../../styles/paymenteEstablishment.css';

function PaymentEstablishment() {
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
                            <Link to="/menu">
                                <button className="btn btn-outline-danger btn-login">MENU</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tables-establishment">
                <div className="all-tables all-payments">
                    <Link to="/payment-establishment-edit">
                        <div className="form-group tables-form-group">
                            <div className="tables">
                                <p className="number-table comand">Comanda 1</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/payment-establishment-edit">
                        <div className="form-group tables-form-group">
                            <div className="tables">
                                <p className="number-table comand">Comanda 2</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/payment-establishment-edit">
                        <div className="form-group tables-form-group">
                            <div className="tables">
                                <p className="number-table comand">Comanda 3</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/payment-establishment-edit">
                        <div className="form-group tables-form-group">
                            <div className="tables">
                                <p className="number-table comand">Comanda 3</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/payment-establishment-edit">
                        <div className="form-group tables-form-group">
                            <div className="tables">
                                <p className="number-table comand">Comanda 4</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PaymentEstablishment;