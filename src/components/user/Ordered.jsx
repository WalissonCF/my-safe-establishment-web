import React, { useEffect, useCallback, useState } from 'react';
import userService from '../../services/UserService';

import '../../styles/ordered.css';
import customerUtils from '../../utils/customerUtils';
import AnimationPayment from '../animations/Payment';

function Ordered() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getProducts() {
        const { data: productsList } = await userService.getListOrder();
        setProducts(productsList)
    }

    async function updateValueProduct({ id, orderPadId, quantity }) {
        try {
            const { data: product } = await userService.updateQuantityProduct(id, orderPadId, quantity)
            const updatedProducts = products.map(p => p.id === product.id ? { ...product } : p);
            setProducts(updatedProducts);
            console.log('Aqui');
            setLoading(true)
        } catch (e) {
            customerUtils.removeHidden('alert-delete-product-error');
            document.getElementById('alert-delete-product-error').innerText = `${e.response.data.message}. A tela será atualizada em 5s`
            setTimeout(function () {
                window.location = '/ordered';
            }, 5000)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => getProducts(), [])

    useCallback(() => getProducts(), [products])

    function onClickCloseOrder() {
        window.location = "/payment";
    };

    function incrementQuantity(productId) {
        let product = products.find(p => p.id === productId);

        const quantity = product.quantity += 1;

        product = { ...product, quantity }

        updateValueProduct(product);
    };

    function decrementQuantity(productId) {
        let product = products.find(p => p.id === productId);

        const quantity = product.quantity -= 1;

        if (quantity <= 0) return

        product = { ...product, quantity }

        updateValueProduct(product);
    }

    async function removeProduct(productId) {
        const productsUpdated = products.filter(p => p.id !== productId);

        const deleteProduct = products.find(p => p.id === productId)

        try {
            await userService.deleteProductOrder(deleteProduct.id, deleteProduct.orderPadId);
            setProducts(productsUpdated);
        } catch (e) {
            customerUtils.removeHidden('alert-delete-product-error');
            document.getElementById('alert-delete-product-error').innerText = `${e.response.data.message}. A tela será atualizada em 5s`
            setTimeout(function () {
                window.location = '/ordered';
            }, 5000)
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
                    {!loading && products.map(product => (
                        <div id="products-confirmed" key={String(product.id)}>
                            {localStorage.setItem('orderPadIdUser', product.orderPadId)}
                            <img id="img-selected" src={localStorage.getItem(`${product.productId}`)} alt="" />
                            <div>
                                <label className="product-selected name-product-selected">{product.productName}</label>
                                <div>
                                    <label id={`value-product-${product.id}`} className="product-selected">R${product.value.toFixed(2)}</label>
                                    <div id={`alert-ordered-${product.id}`} hidden>
                                        <p id={`alert-ordered-customer${product.id}`} className="alert-ordered-customer"></p>
                                    </div>
                                </div>
                                <div className="info-product info-product-order">
                                    <i className="material-icons" onClick={() => decrementQuantity(product.id)}>remove_circle_outline</i>
                                    <label id="qtde-product" className={`qtde-product-${product.id}`}>{product.quantity}</label>
                                    <i id={product.id} className="material-icons" onClick={() => incrementQuantity(product.id)} >add_circle_outline</i>
                                    <i id={product.id} className="material-icons delete" onClick={() => removeProduct(product.id)}>delete</i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="confirm">
                    <AnimationPayment></AnimationPayment>
                    <p id="alert-delete-product-error" hidden></p>
                    <h2 class="my-products">Para fechar a conta <br /> clique no botão abaixo</h2>
                    <button onClick={onClickCloseOrder} class="btn btn-outline-danger close-order">FECHAR A CONTA</button>
                </div>
            </div>
        </div>
    )
}

export default Ordered;