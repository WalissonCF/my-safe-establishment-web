import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

function TablesEstablishment() {
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
                <div className="all-tables ">
                    <div className="form-group tables-form-group">
                        <div className="tables">
                            <p className="number-table">Mesa 1</p>
                        </div>
                        <button type="button" class="btn btn-outline-primary button-delete">DELETAR</button>
                    </div>
                    <div className="form-group tables-form-group">
                        <div className="tables">
                            <p className="number-table">Mesa 2</p>
                        </div>
                        <button type="button" class="btn btn-outline-primary button-delete">DELETAR</button>
                    </div>
                    <div className="form-group tables-form-group">
                        <div className="tables">
                            <p className="number-table">Mesa 3</p>
                        </div>
                        <button type="button" class="btn btn-outline-primary button-delete">DELETAR</button>
                    </div>
                    <div className="form-group tables-form-group">
                        <div className="tables">
                            <p className="number-table">Mesa 4</p>
                        </div>
                        <button type="button" class="btn btn-outline-primary button-delete">DELETAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TablesEstablishment;