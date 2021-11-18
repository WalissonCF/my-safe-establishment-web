import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/menuEstablishment.css';

export default class MenuEstablishment extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-menu-register">
                                <div className="content-in-text">
                                    <h1>Bem vindo,</h1>
                                    <h2>nomeUser</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="menu-establishment">
                        <div className="menu-itens">
                            <Link to="/demands">
                                <div className="form-group">
                                    <div className="menu-establishment">
                                        <label>Gerenciamento</label>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/products-establishment">
                                <div className="form-group">
                                    <div className="menu-establishment">
                                        <label>Produtos</label>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/tables-establishment">
                                <div className="form-group">
                                    <div className="menu-establishment">
                                        <label>Mesas</label>
                                    </div>
                                </div>
                            </Link>
                            <div className="form-group">
                                <div className="menu-establishment">
                                    <label>Pagamentos</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}