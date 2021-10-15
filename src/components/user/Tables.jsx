import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/amountOfPeopleUser.css';
import userService from '../../services/UserService';

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
        document.getElementById('table-selected').innerHTML = `Mesa: ${tableSelected}`;
    }

    function onClickPostOrderPad() {
        userService.postCreateOrderPad();
    }

    return (
        <div className="container-fluid">
            <form action="">
                <div className="form-group" id="select-table">
                    <h2>Por favor selecione <br /> uma mesa</h2>
                    <div className="background-color">
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
                                            return <div key={index} className={[status[index]]} onClick={onClickCheckTable}><p className="number-table">Mesa {t}</p></div>
                                        } else {
                                            return <div key={index} class={[status[index]]}><p className="number-table">Mesa {t}</p></div>
                                        }
                                    })
                                })
                            })
                        }
                        <div>
                            <h2 id="table-selected"></h2>
                            <Link to={productList}>
                                <button onClick={onClickPostOrderPad} class="btn btn-outline-danger btn-quantity-customer">CONTINUAR</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Table;