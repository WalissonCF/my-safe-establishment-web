import React, { useEffect, useState } from 'react';
import '../../styles/amountOfPeopleUser.css';
import '../../styles/tables.css';
import userService from '../../services/UserService';
import AnimationTable from '../animations/Tables';

import { Link } from 'react-router-dom';

function Table() {
    const [posts, setPosts] = useState([]);
    const productList = "/product-list";

    async function fetchPosts() {
        await userService.getTables().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickCheckTable(e) {
        e.preventDefault();
        const value = e.target.innerText;
        const table = value?.replace(/[^0-9]/g, '');
        localStorage.setItem('table', table);
        const tableSelected = localStorage.getItem('table');
        document.getElementById('table-selected').innerHTML = `${tableSelected}`;
    }

    function onClickPostOrderPad() {
        userService.postCreateOrderPad();
    }

    return (
        <div className="container-fluid">
            <div className="tables-establishment">
                {/* <form> */}
                    <h2 className="table-title">Por favor selecione <br /> uma mesa</h2>
                    <div className="all-tables ">
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
                                        if (situations === '0' || situations === 'Disponivel') {
                                            return "tables";
                                        } else {
                                            return "tables-1";
                                        }
                                    })
                                    return itens.id.map((t, index) => {
                                        if ([status[index]].toString() === "tables") {
                                            return (
                                                <div key={index} className="form-group tables-form-group">
                                                    <div className={[status[index]]} onClick={onClickCheckTable}>
                                                        <p className="number-table">Mesa {t}</p>
                                                    </div>
                                                </div>)
                                        } else {
                                            return (
                                                <div className="form-group tables-form-group">
                                                    <div class={[status[index]]}>
                                                        <p className="number-table">Mesa {t}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                })
                            })
                        }
                    </div>
                    <div className="confirm">
                        <AnimationTable></AnimationTable>
                        <h2>Mesa:<p id="table-selected"></p>
                        </h2>
                        <button onClick={onClickPostOrderPad} class="btn btn-outline-danger btn-quantity-customer btn-select-table">CONTINUAR</button>
                    </div>
                {/* </form> */}
            </div>
        </div>

    )
}

export default Table;