import React, { useEffect, useState } from 'react';
import userService from '../../services/UserService';

import '../../styles/ordered.css';
import customerUtils from '../../utils/customerUtils';

function Ordered() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await userService.getListOrder().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickCloseOrder() {
        window.location = "/payment";
    };

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
                                    <div>{
                                        itens.src.map((src, i) => {
                                            const value = parseFloat([amounts[i]]);
                                            return (
                                                <div id="products-confirmed">
                                                    <img id="img-selected" src={src} alt="" />
                                                    <label className="product-selected">{[namesProducts[i]]}</label>
                                                    <label className="product-selected">Quantidade: {[quatityProducts[i]]}</label>
                                                    <label className="product-selected">R${value.toFixed(2)}</label>
                                                </div>
                                            )
                                        })
                                    }</div>
                                )
                            })
                        })
                    }
                </div>
                <div className="product-list">
                    <button onClick={onClickCloseOrder} class="btn btn-outline-danger">FORMA DE PAGAMENTO</button>
                </div>
            </div>
        </div>
    )
}

export default Ordered;