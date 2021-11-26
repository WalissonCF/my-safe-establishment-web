import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import establishmentService from '../../services/EstablishmentService';

function RegisterTables() {
    const [selects, setSelects] = useState();
    const [selectsStatus, setSelectsStatus] = useState();

    function onChange(e) {
        console.log(selects);
    }

    function onClickRegisterTable() {
        // const qtdeSeats = document.getElementById('').innerText;
        const locationArea = localStorage.getItem('locationTable');
        const statusTable = localStorage.getItem('statusTable');
        establishmentService.postRegisterTable(locationArea, statusTable);
    }

    return (
        <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-menu-register">
                                <div className="content-in-text">
                                    <h1>Bem vindo,</h1>
                                    <h2>nomeUser</h2>
                                    <Link to="/tables-establishment">
                                        <button className="btn btn-outline-danger btn-login">MESAS</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register-tables-establishment">
                        <h2 className="h2-tables-establishment">Cadastre a mesa preenchendo os campos abaixo</h2>
                        <div className="status-tables-1">
                            <div className="form-group">
                                {localStorage.setItem('locationTable', selects)}
                                <select value={selects} class="form-select" onChange={e => setSelects(e.target.value)}>
                                    <option value=""></option>
                                    <option value="Interna">Interna</option>
                                    <option value="Externa">Externa</option>
                                </select>
                            </div>
                        </div>
                        <div className="status-tables-2">
                            <div className="form-group">
                                {localStorage.setItem('statusTable', selectsStatus)}
                                <select value={selectsStatus} class="form-select" onChange={e => setSelectsStatus(e.target.value)}>
                                    <option value=""></option>
                                    <option value="Ocupada">Ocupada</option>
                                    <option value="Disponivel">Disponivel</option>
                                    <option value="Inativa">Inativa</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="label-tables-establishment">
                                <label className="l1">Quantidade de lugares</label>
                            </div>
                            <div className="info-customer qtde-chairs">
                                <i className="material-icons" 
                                // onClick={this.onClickSubtraction}
                                >remove_circle_outline </i>
                                <label id="qtde-customer">1</label>
                                <i className="material-icons" 
                                // onClick={this.onClickSum}
                                >add_circle_outline</i>
                            </div>
                        </div>
                        <div className="confirm c-2">
                            <button className="btn btn-outline-danger" onClick={onClickRegisterTable}>CADASTRAR MESA</button>
                        </div>
                    </div>
                </div>
    )
}

export default RegisterTables;