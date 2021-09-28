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

    onClickSubtraction() {
        const product = localStorage.getItem('valueProduct');
        const valueProduct = parseFloat(product);
        const productItem = document.getElementById('product').innerText;
        console.log("productItem:", productItem);
        console.log("valueProduct", valueProduct)
        if (parseFloat(productItem?.replace(/[^0-9.,]+/, '')) > valueProduct) {
            const total = parseFloat(productItem?.replace(/[^0-9.,]+/, '')) - valueProduct;
            document.getElementById('product').innerText = `R$${total.toFixed(2).toString()}`;
            const qtdeProduct = document.getElementById('qtde-product').innerText;
            const qtdeTotalProduct = parseInt(qtdeProduct) - 1;
            document.getElementById('qtde-product').innerText = `${qtdeTotalProduct.toString()}`
        }
    }

    onClickSum() {
        const product = localStorage.getItem('valueProduct');
        const valueProduct = parseFloat(product);
        const productItem = document.getElementById('product').innerText;
        const total = valueProduct + parseFloat(productItem?.replace(/[^0-9.,]+/, ''));
        document.getElementById('product').innerText = `R$${total.toFixed(2).toString()}`;
        const qtdeProduct = document.getElementById('qtde-product').innerText;
        const qtdeTotalProduct = parseInt(qtdeProduct) + 1;
        document.getElementById('qtde-product').innerText = `${qtdeTotalProduct.toString()}`
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
                                                            <i className="material-icons" onClick={this.onClickSubtraction}>remove_circle_outline </i>
                                                            <label id="qtde-product">1</label>
                                                            <i className="material-icons" onClick={this.onClickSum}>add_circle_outline</i>
                                                            <label key={i} id="product" htmlFor="">R${amounts}</label>
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