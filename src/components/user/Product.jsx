import React, { useEffect, useState } from 'react';
import userService from '../../services/UserService';

import '../../styles/product.css';
import { Link } from 'react-router-dom';
import customerUtils from '../../utils/customerUtils';

function Product() {
    const [posts, setPosts] = useState([]);
    const src = localStorage.getItem('src');
    const index = localStorage.getItem('index');

    async function fetchPosts() {
        await userService.getProducts().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickSubtraction() {
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

    function onClickSum() {
        const product = localStorage.getItem('valueProduct');
        const valueProduct = parseFloat(product);
        const productItem = document.getElementById('product').innerText;
        const total = valueProduct + parseFloat(productItem?.replace(/[^0-9.,]+/, ''));
        document.getElementById('product').innerText = `R$${total.toFixed(2).toString()}`;
        const qtdeProduct = document.getElementById('qtde-product').innerText;
        const qtdeTotalProduct = parseInt(qtdeProduct) + 1;
        document.getElementById('qtde-product').innerText = `${qtdeTotalProduct.toString()}`
    }

    function onClickQuantityProduct() {
        const quantityProduct = parseInt(document.getElementById('qtde-product').innerText);
        const note = document.getElementById('note-customer').value;
        console.log(note)
        localStorage.setItem('note', note);
        localStorage.setItem('quantityProduct', quantityProduct);
        userService.postOrder();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div id="product-selected">
                        <img id="product-img-selected" src={src} alt="" />
                    </div>
                    <div id="product-item">
                        <h2 className="name-product">{customerUtils.getProductName()}</h2>
                        {
                            posts.map((item) => {
                                const ids = [item.id];
                                const srcs = ["https://static.clubedaanamariabraga.com.br/wp-content/uploads/2021/04/frango-assado-em-pe.jpg"];
                                const names = [item.name];
                                const values = [item.value];
                                const ingredient = [item.ingredients];
                                const descriptions = [item.description];
                                let product = [
                                {
                                    id: ids,
                                    src: srcs,
                                    name: names,
                                    value: values,
                                    ingredients: ingredient,
                                    description: descriptions,
                                }
                                ];
                                return product.map((itens) => {
                                    const ingre = itens.ingredients.map((ingredient) => {
                                        return ingredient;
                                    });
                                    const desc = itens.description.map((description) => {
                                        return description;
                                    });
                                    const ids = itens.id.map((id) => {
                                        return id;
                                    });
                                    return (
                                        itens.value.map((amounts) => {
                                            const j = parseInt(index)
                                            const k = parseInt(ids)
                                            if (j === k) {
                                                localStorage.setItem('valueProduct', amounts);
                                                return (
                                                    <div id="product-selected">
                                                        <div className="info-product">
                                                            <i className="material-icons" onClick={onClickSubtraction}>remove_circle_outline </i>
                                                            <label id="qtde-product">1</label>
                                                            <i className="material-icons" onClick={onClickSum}>add_circle_outline</i>
                                                        </div>
                                                        <div className="value-product">
                                                            <h2 id="product">R${amounts}</h2>
                                                        </div>
                                                        <div className="descriptions">
                                                            <h2 className="sobre">Ingredientes:</h2>
                                                            <p id="ingredient">{ingre}</p>
                                                            <br />
                                                            <h2 className="sobre">Descrição:</h2>
                                                            <p id="description">{desc}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    )
                                })
                            })
                        }
                        <label className="note-customer-label">Observações:</label>
                        <textarea id="note-customer" className="form-control"></textarea>
                        <button onClick={onClickQuantityProduct} className="btn btn-outline-danger">CONFIRMAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;