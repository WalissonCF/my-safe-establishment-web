import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import userService from '../../services/UserService';

function TablesEstablishment() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await userService.getTables().then(setPosts);
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
                <div className="all-tables">
                    {
                        posts.map((item) => {
                            const ids = [item.id];
                            const statusTables = [item.statusTable];
                            let tables = [
                                {
                                    id: ids,
                                    statusTable: statusTables,
                                }
                            ];
                            return tables.map((itens) => {
                                const status = itens.statusTable.map((situations) => {
                                    if (situations === '0') {
                                        return "tables";
                                    } else {
                                        return "tables-1";
                                    }
                                })
                                return itens.id.map((t, index) => {
                                    if ([status[index]].toString() === "tables") {
                                        return (
                                            <div className="form-group tables-form-group">
                                                <div key={index} className={[status[index]]}
                                                //  onClick={onClickCheckTable}
                                                 >
                                                    <p className="number-table">Mesa {t}</p>
                                                </div>
                                                <button type="button" class="btn btn-outline-primary button-delete">DELETAR</button>
                                            </div>)
                                    } else {
                                        return (
                                            <div className="form-group tables-form-group">
                                                <div key={index} class={[status[index]]}>
                                                    <p className="number-table">Mesa {t}</p>
                                                </div>
                                                <button type="button" class="btn btn-outline-primary button-delete">DELETAR</button>
                                            </div>
                                        )
                                    }
                                })
                            })
                        })
                    }
                </div>
                {/* <div className="all-tables">
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
                </div> */}
            </div>
            <div className="confirm c-2">
                <Link to="/register-tables">
                    <button className="btn btn-outline-danger">CADASTRAR NOVA MESA</button>
                </Link>
            </div>
        </div>
    )
}

export default TablesEstablishment;