import React, { useEffect, useState } from 'react';

import userService from '../../services/UserService';
import establishmentService from '../../services/EstablishmentService';

import { Link } from 'react-router-dom';

import '../../styles/productsEstablishment.css';

function Products() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await userService.getProducts().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function deleteProduct(e) {
        const id = parseInt(e.target.id);
        console.log("id", id);
        establishmentService.deleteProducts(id);
    }

    return (
        <div className="customer-demand">
            <div className="row">
                <div className="col-12">
                    <div className="content-menu-register">
                        <div className="content-in-text">
                            <h1>Bem vindo,</h1>
                            <h2>nomeUser</h2>
                            <Link to="/menu">
                                <button className="btn btn-outline-danger btn-login">Menu</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="all-products">

                {
                    posts.map((item) => {
                        const ids = [item.id];
                        const srcs = [item.productDetails.urlImage];
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
                        return product.map((itens, i) => {
                            const names = itens.name.map((name) => {
                                return name;
                            });
                            const ids = itens.id.map((id) => {
                                return id;
                            });
                            const amounts = itens.value.map((value) => {
                                return value;
                            });
                            const ingre = itens.ingredients.map((ingredient) => {
                                return ingredient;
                            });
                            const desc = itens.description.map((description) => {
                                return description;
                            });
                            return (
                                <div id="products">{
                                    itens.src.map((srcs, index) => {
                                        return (
                                            <div id="products-establishment">
                                                <div className="product-name-value">
                                                    <div className="img-product-establishment">
                                                        <img key={index} class={ids} name={[names[index]]} src={srcs} />
                                                    </div>
                                                    <div className="content-product">
                                                        <p id="id-product">#{ids}</p>
                                                        <h2 className="h2-product">Nome do produto:</h2>
                                                        <p>{[names[index]]}</p>
                                                        <h2 className="h2-product">R${[amounts[index]]}</h2>
                                                    </div>
                                                </div>
                                                <div className="ingredients-description">
                                                    <div className="ingredients-product">
                                                        <h2 className="h2-product">Ingredientes:</h2>
                                                        <p>{ingre}</p>
                                                    </div>
                                                    <div className="description-product">
                                                        <h2 className="h2-product">Descrição:</h2>
                                                        <p>{desc}</p>
                                                    </div>
                                                </div>
                                                <div className="edit">
                                                    <button type="button" class="btn btn-outline-primary button-edit">ALTERAR</button>
                                                    <button id={ids} onClick={deleteProduct} type="button" class="btn btn-outline-primary button-delete">DELETAR</button>
                                                </div>
                                                <hr />
                                            </div>
                                        )
                                    })
                                }</div>
                            )
                        })
                    })
                }
            </div>
            <div className="confirm new-product">
                <Link to="/product-registration">
                    <button className="btn btn-outline-danger">NOVO PRODUTO</button>
                </Link>
            </div>
        </div>
    )
}

export default Products;