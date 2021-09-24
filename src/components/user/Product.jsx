import React from 'react';
import userServiceService from '../../services/UserServiceService';

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
                <div>
                    <div className="form-group" id="product-selected">
                        <img id="product-img-selected" src={src} alt="" />
                        <label htmlFor="">{name}</label>
                            {
                                lista.map((item) => {
                                    return (
                                        item.amont.map((amounts, i) => {
                                            const j = parseInt(index)
                                            if (i === j) {
                                                return <label key={i} htmlFor="">R${amounts}</label> 
                                            }
                                        })
                                    )
                                })
                            }
                        </div>
                </div>
            </React.Fragment>
        )
    }
}