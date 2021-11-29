import React, { useEffect, useState } from 'react';

import '../../styles/productList.css';
import { Link } from 'react-router-dom';
import userService from '../../services/UserService';
import customerUtils from '../../utils/customerUtils';
import product from '../../assets/product.png';
import AnimationProducts from '../animations/Products';

function ProductList() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await userService.getProducts().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onClickCheckImg(e) {
        e.preventDefault();
        localStorage.setItem('src', e.target.src);
        localStorage.setItem('name', e.target.name);
        localStorage.setItem('index', e.target.className);

        window.location = '/product';
    }

    return (
        <div className="'c'">
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
            <form id="form-product-list">
                <h1 className="menu">Faça seu pedido</h1>
                <h2 className="menu-1">Mesa: {customerUtils.getTable()}</h2>
                <h2 className="menu-2">Carpadio:</h2>
                <div id="product-img">
                    {
                        posts.map((item) => {
                            const ids = [item.id];
                            // const srcs = [item.productDetails.urlImage];
                            var src;
                            if (item.productDetails === null) {
                                src = ['https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image'];
                            } else {
                                src = [item.productDetails.urlImage];
                            }
                            const names = [item.name];
                            const values = [item.value];
                            const ingredient = [item.ingredients];
                            const descriptions = [item.description];
                            let product = [
                                {
                                    id: ids,
                                    src: src,
                                    name: names,
                                    value: values,
                                    ingredients: ingredient,
                                    description: descriptions,
                                }
                            ];
                            localStorage.setItem(`${ids}`, src);
                            return product.map((itens, i) => {
                                const names = itens.name.map((name) => {
                                    return name;
                                });
                                const ids = itens.id.map((id) => {
                                    return id;
                                });
                                const src = itens.src.map((s) => {
                                    return s;
                                });
                                return (
                                    <div id="products">{
                                        itens.id.map((srcs, index) => {
                                            return (
                                                <div class="form-group" id="products">
                                                    <img class={ids} name={[names[index]]} id="img" key={index} src={src} alt="" onClick={onClickCheckImg} />
                                                    <label id="product-name" key={index}>{[names[index]]}</label>
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
                    <AnimationProducts></AnimationProducts>
                    <h2 class="my-products">Para verificar seus pedidos <br /> clique no botão abaixo</h2>
                    <Link to="/ordered">
                        <button class="btn btn-outline-danger ordered">MEUS PEDIDOS</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default ProductList;