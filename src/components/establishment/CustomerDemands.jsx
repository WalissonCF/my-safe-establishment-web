import React, { useEffect, useState } from 'react';
import establishmentService from '../../services/EstablishmentService';

function CustomerDemand() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await establishmentService.getDemand().then(setPosts);
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
                            <h1>CNPJ:</h1>
                            <h2>00.000.000/0000-00</h2>
                            {/* <Link to={linkDemand}> */}
                                <button className="btn btn-outline-danger btn-login">PEDIDOS</button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                
            </div>
        </div>
    )
}

export default CustomerDemand;