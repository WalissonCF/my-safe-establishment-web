import React from 'react';
import userServiceService from '../../services/UserServiceService';

import '../../styles/product.css';

export default class Product extends React.Component {
    constructor() {
        super();

        this.state = {
            teste: '',
        }
    }

    

    render() {
        const lista = userServiceService.menu();
        const src = localStorage.getItem('src');
        const name = localStorage.getItem('name');
        const index = localStorage.getItem('index');

        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div id="product-selected">
                                <img id="product-img-selected" src={src} alt="" />
                            </div>
                            <div>
                                <label htmlFor="">{name}</label>
                                {
                                    lista.map((item) => {
                                        return (
                                            item.amont.map((amounts, i) => {
                                                const j = parseInt(index)
                                                if (i === j) {
                                                    localStorage.setItem('valueProduct', amounts);
                                                    return (
                                                        <div>
                                                            <label key={i} htmlFor="">
                                                                <i className="material-icons">remove_circle_outline </i>
                                                                R${amounts}
                                                                <i className="material-icons">add_circle_outline</i>
                                                            </label>
                                                        </div>
                                                    )
                                                }
                                            })
                                        )
                                    })
                                }
                             </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}