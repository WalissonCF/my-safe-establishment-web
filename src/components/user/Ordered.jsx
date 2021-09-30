import React from 'react';

export default class Ordered extends React.Component {
    constructor() {
        super();
    };

    render() {
        const userName = localStorage.getItem('userName');

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-menu-register">
                                <div className="content-in-text">
                                    <h1>Bem vindo,</h1>
                                    <h2>{userName}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}