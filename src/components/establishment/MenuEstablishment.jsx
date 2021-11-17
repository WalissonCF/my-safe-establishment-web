import React from 'react';


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
                                    <h1>CNPJ:</h1>
                                    <h2>00.000.000/0000-00</h2>
                                    {/* <Link to={linkDemand}> */}
                                        <button className="btn btn-outline-danger btn-login">PEDIDOS</button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="menu-establishment">

                    </div>
                </div>
            </React.Fragment>
        )
    }
}