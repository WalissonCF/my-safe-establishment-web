import React, { useEffect, useState } from 'react';
import '../../styles/demand.css';

function Demand() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {

    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickDemand() {
        window.location = "/customer-demand"
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="content-menu-register">
                        <div className="content-in-text">
                            <h1>Bem vindo,</h1>
                            <h2>nomeUser</h2>
                            <h1>CNPJ:</h1>
                            <h2>00.000.000/0000-00</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-demands">
                <div id="demands">
                    <div className="form-group demands-group">
                        <div className="demand" onClick={onClickDemand}>
                            <label>Comanda:</label>
                            <label>Mesa:</label>
                            <label>Status:</label>
                        </div>
                    </div>
                    <div className="form-group demands-group" >
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
                    <div className="form-group demands-group">
                        <div className="demand" onClick={onClickDemand}>
                            <label>Comanda:</label>
                            <label>Mesa:</label>
                            <label>Status:</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demand;