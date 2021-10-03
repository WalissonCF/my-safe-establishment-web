import React from 'react';
import userService from '../../services/UserService';
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

    onClickQuantityProduct() {
        const quantityProduct = parseInt(document.getElementById('qtde-product').innerText);
        const indexProduct = parseInt(localStorage.getItem('index'));
        const valueProduct = document.getElementById('product').innerText;
        const srcProduct = localStorage.getItem('src');
        const product = [
            {
                src: srcProduct,
                quantityProductSelected: quantityProduct,
                index: indexProduct,
                valueProductSelected: parseFloat(valueProduct?.replace(/[^0-9.,]+/, '')),
            }
        ];
        console.log(product);
        localStorage.setItem(`product${indexProduct}`, JSON.stringify(product));
        console.log(quantityProduct);
        console.log(indexProduct);
        window.location = "/product-list";
    }

    render() {
        const lista = userServiceService.menu();
        const src = localStorage.getItem('src');
        const name = localStorage.getItem('name');
        const index = localStorage.getItem('index');

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div id="product-selected">
                                <img id="product-img-selected" src={src} alt="" />
                            </div>
                            <div id="product-item">
                                <label className="name-product">{name}</label>
                                {
                                    lista.map((item) => {
                                        return (
                                            item.amont.map((amounts, i) => {
                                                const j = parseInt(index)
                                                if (i === j) {
                                                    localStorage.setItem('valueProduct', amounts);
                                                    return (
                                                        <div id="product-selected">
                                                            <i className="material-icons" onClick={this.onClickSubtraction}>remove_circle_outline </i>
                                                            <label id="qtde-product">1</label>
                                                            <i className="material-icons" onClick={this.onClickSum}>add_circle_outline</i>
                                                            <label key={i} id="product">R${amounts}</label>
                                                        </div>
                                                    )
                                                }
                                            })
                                        )
                                    })
                                }
                                <button onClick={this.onClickQuantityProduct} class="btn btn-outline-danger">CONFIRMAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}