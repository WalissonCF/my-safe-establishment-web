import React, { useEffect, useState } from 'react';
import userService from '../../services/UserService';

import '../../styles/ordered.css';
import customerUtils from '../../utils/customerUtils';
import AnimationPayment from '../animations/Payment';

function Ordered() {
    const [posts, setPosts] = useState([]);
    const [updateValueProduct, setValueProduct] = useState([]);

    async function fetchPosts() {
        await userService.getListOrder().then(setPosts);
    }

    async function valueProduct(id, orderPadId, updateQuality) {
        await userService.postUpdateQuatityProduct(id, orderPadId, updateQuality).then(setValueProduct);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickCloseOrder() {
        window.location = "/order-summary";
    };

    function onClickSum(e) {
        const id = parseInt(e.target.id);
        const product = posts.find(p => p.id === id);
        const updateQuality = product.quantity += 1;
        const orderPadId = product.orderPadId;
        valueProduct(id, orderPadId, updateQuality);
        const updateNewValue = localStorage.getItem('valueUpdateQuatityProduct');
        const updateValue = product.value = updateNewValue;
        const updateProduct = { ...product, quantity: updateQuality, value: updateValue };
        const allProducts = posts.map((item) => {
            return item;
        });
        const updateListProduct = allProducts.filter(p => p === id ? { ...updateProduct } : product);
        setPosts([...updateListProduct]);
    };

    function onClickSubtraction(e) {
        const id = parseInt(e.target.id);
        const product = posts.find(p => p.id === id);
        const qtdeProducts = product.quantity;
        const orderPadId = product.orderPadId;
        if (qtdeProducts > 0) {
            const updateQuality = product.quantity -= 1;
            valueProduct(id, orderPadId, updateQuality);
            const updateNewValue = localStorage.getItem('valueUpdateQuatityProduct');
            const updateValue = product.value = updateNewValue;
            const updateProduct = { ...product, quantity: updateQuality, value: updateValue };
            const allProducts = posts.map((item) => {
                return item;
            });
            const updateListProduct = allProducts.filter(p => p === id ? { ...updateProduct } : product);
            setPosts([...updateListProduct]);
        }
    }

    function onClickDeleteProduct(e) {
        const id = parseInt(e.target.id);
        console.log(id);
        const product = posts.find(p => p.id !== id);
        const updateProduct = { ...product };
        console.log(updateProduct);
        const allProducts = posts.map((item) => {
            return item;
        });
        const updateListProduct = allProducts.filter(p => p.id !== id);
        console.log(updateListProduct);
        setPosts([...updateListProduct]);
        const productDelete = posts.find(p => p.id === id);
        console.log(productDelete);
        userService.deleteProductOrder(productDelete);
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
                        updateValueProduct
                    }
                    {
                        posts.map((item) => {
                            const ids = [item.id];
                            const srcs = ["https://static.clubedaanamariabraga.com.br/wp-content/uploads/2021/04/frango-assado-em-pe.jpg"];
                            const names = [item.productName];
                            const quantityProduct = [item.quantity];
                            const values = [item.value];
                            const productId = [item.productId];
                            let product = [
                                {
                                    id: ids,
                                    src: srcs,
                                    name: names,
                                    quantity: quantityProduct,
                                    value: values,
                                    productId: productId,
                                }
                            ];

                            return product.map((itens) => {
                                const productIds = itens.productId.map((productId) => {
                                    return productId;
                                })
                                const namesProducts = itens.name.map((name) => {
                                    return name;
                                });
                                const quatityProducts = itens.quantity.map((quantity) => {
                                    return quantity;
                                });
                                const amounts = itens.value.map((value) => {
                                    return value;
                                });
                                const idsProducts = itens.id.map((id) => {
                                    return id;
                                });
                                return (
                                    <div className="products">{
                                        itens.src.map((src, i) => {
                                            const value = parseFloat([amounts[i]]);
                                            var srcs = localStorage.getItem(`${productIds}`);
                                            return (
                                                <div id="products-confirmed">
                                                    <img id="img-selected" src={srcs} alt="" />
                                                    <div>
                                                        <label className="product-selected name-product-selected">{[namesProducts[i]]}</label>
                                                        <div >
                                                            <label id={`value-product-${[idsProducts]}`} className="product-selected">R${value.toFixed(2)}</label>
                                                        </div>
                                                        <div className="info-product info-product-order">
                                                            <i className="material-icons" id={[idsProducts[i]]}
                                                                onClick={onClickSubtraction}
                                                            >remove_circle_outline </i>
                                                            <label id="qtde-product" className={`qtde-product-${[idsProducts[i]]}`}>{[quatityProducts[i]]}</label>
                                                            <i id={[idsProducts[i]]} className="material-icons"
                                                                onClick={onClickSum}
                                                            >add_circle_outline</i>
                                                            <i id={[idsProducts[i]]} className="material-icons delete" onClick={onClickDeleteProduct}>delete</i>
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