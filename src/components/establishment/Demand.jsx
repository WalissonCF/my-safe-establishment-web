import React, { useEffect, useState } from 'react';
import '../../styles/demand.css';

function Demand() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {

    }

    useEffect(() => {
        fetchPosts()
    }, [])

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
            <div className="card-row">
                <div className="card">
                    <div className="imgBx">
                        <img src="https://img.itdg.com.br/tdg/images/recipes/000/002/462/332854/332854_original.jpg" alt="" />
                        <h2>Mesa:</h2>
                    </div>
                    <div className="content-card">
                        <h2 className="pedidos">Pedidos:</h2>
                        <p className="product">Frango - Quantidade: </p>
                        <p className="note">Observações:</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src="https://img.itdg.com.br/tdg/images/recipes/000/002/462/332854/332854_original.jpg" alt="" />
                        <h2>Mesa:</h2>
                    </div>
                    <div className="content-card">
                        <h2 className="pedidos">Pedidos:</h2>
                        <p className="product">Frango - Quantidade: </p>
                        <p className="note">Observações:
                            Quero um frango sem frango somente o osso, sem prato mas com os talheres, obrigado
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demand;