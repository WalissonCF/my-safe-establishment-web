import React from 'react';
import userServiceService from '../../services/UserServiceService';

export default class Ordered extends React.Component {
    constructor() {
        super();
    };

    render() {
        const list = userServiceService.ordered();
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
                        {
                            list.map((item) => {
                                const names = item.name.map((name) => {
                                    return name;
                                });
                                const quatityProducts = item.quatityProduct.map((quatityProduct) => {
                                    return quatityProduct;
                                });
                                const amounts = item.amount.map((amount) => {
                                    return amount;
                                });
                                console.log("names", names);
                                console.log("quatityProducts", quatityProducts);
                                console.log("amounts", amounts);
                                return (
                                    <div>{
                                        item.src.map((src, i) => {
                                            return (
                                                <div>
                                                    <img src={src} alt="" />
                                                    <label>{[names[i]]}</label>
                                                    <label htmlFor="">Quantidade:{[quatityProducts[i]]}</label>
                                                    <label htmlFor="">R${[amounts[i]]}</label>
                                                </div>
                                            )
                                        })    
                                    }</div>
                                )
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}