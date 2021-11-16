import React, { useEffect, useState } from 'react';
import userService from '../../services/UserService';

import '../../styles/ordered.css';
import customerUtils from '../../utils/customerUtils';
import AnimationPayment from '../animations/Payment';

function Ordered() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await userService.getListOrder().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickCloseOrder() {
        // window.location = "/payment";
        window.location = "/order-summary";
    };

    function onClickSum() {
        const qtdeProducts = document.getElementById('qtde-product').innerText;
        const sum = parseInt(qtdeProducts) + 1;
        document.getElementById('qtde-product').innerText = sum;
        console.log();
    };

    function onClickSubtraction() {
        const qtdeProducts = document.getElementById('qtde-product').innerText;
        const subtraction = parseInt(qtdeProducts) - 1;
        if (qtdeProducts > 0) {
            document.getElementById('qtde-product').innerText = subtraction;            
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="content-menu-register">
                        <div className="content-in-text">
                            <h1>Bem vindo,</h1>
                            <h2>{customerUtils.getCustomerName()}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="products-selecteds">
                    {
                        posts.map((item) => {
                            const srcs = ["https://static.clubedaanamariabraga.com.br/wp-content/uploads/2021/04/frango-assado-em-pe.jpg"];
                            const names = [item.productName];
                            const quantityProduct = [item.quantity];
                            const values = [item.value];
                            let product = [
                                {
                                    src: srcs,
                                    name: names,
                                    quantity: quantityProduct,
                                    value: values,
                                }
                            ];
                            return product.map((itens) => {
                                const namesProducts = itens.name.map((name) => {
                                    return name;
                                });
                                const quatityProducts = itens.quantity.map((quantity) => {
                                    return quantity;
                                });
                                const amounts = itens.value.map((value) => {
                                    return value;
                                });
                                console.log(namesProducts, quatityProducts, amounts);
                                return (
                                    <div className="products">{
                                        itens.src.map((src, i) => {
                                            const value = parseFloat([amounts[i]]);
                                            return (
                                                <div id="products-confirmed">
                                                    <img id="img-selected" src={src} alt="" />
                                                    <div>
                                                        <label className="product-selected name-product-selected">{[namesProducts[i]]}</label>
                                                        <div >
                                                            <label id={`value-product-${[i]}`} className="product-selected">R${value.toFixed(2)}</label>
                                                        </div>
                                                        <div className="info-product info-product-order">
                                                            <i className="material-icons"
                                                            onClick={onClickSubtraction}
                                                            >remove_circle_outline </i>
                                                            <label id="qtde-product">{[quatityProducts[i]]}</label>
                                                            <i className="material-icons"
                                                            onClick={onClickSum}
                                                            >add_circle_outline</i>
                                                            <i className="material-icons delete">delete</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }</div>
                                )
                            })
                        })
                    }
                </div>
                <div className="confirm">
                    <AnimationPayment></AnimationPayment>
                    <h2 class="my-products">Para fechar a conta <br /> clique no botão abaixo</h2>
                    <button onClick={onClickCloseOrder} class="btn btn-outline-danger close-order">FECHAR A CONTA</button>
                </div>
            </div>
        </div>
    )
}

export default Ordered;