import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import '../../styles/editProduct.css';
import userService from '../../services/UserService';

function EditProduct() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await userService.getProductToId().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="customer-demand">
            <div className="row">
                <div className="col-12">
                    <div className="content-menu-register">
                        <div className="content-in-text">
                            <h1>Bem vindo,</h1>
                            <h2>nomeUser</h2>
                            <Link to="/products-establishment">
                                <button className="btn btn-outline-danger btn-login">PRODUTOS</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="products-establishment" className="edit-product-establishment">
                <div className="product-name-value">
                    <div className="img-product-establishment">
                        <img src={localStorage.getItem(`imageProductId${posts.id}`)} alt="" />
                    </div>
                    <div className="content-product edit-content">
                        <h2 className="h2-product edit-h2-product">Nome do produto:</h2>
                        <input type="text" className="form-control edit-input" placeholder={posts.name} />
                        <h2 className="h2-product edit-h2-product edit-value">Valor:</h2>
                        {/* <p>Valor:</p> */}
                        {/* <input type="text" className="form-control edit-input" placeholder={`R$${posts.value}`} /> */}
                        <NumberFormat className="form-control edit-input" thousandSeparator={true} prefix={'R$'} type="tel" className="form-control" name="value"
                                    placeholder="R$" autoComplete="off" placeholder={`R$${posts.value}`} />
                    </div>
                </div>
                <div className="ingredients-description">
                    <div className="ingredients-product">
                        <h2 className="h2-product">Ingredientes:</h2>
                        <textarea className="form-control edit-textarea"
                        placeholder={posts.ingredients}></textarea>
                    </div>
                    <div className="description-product">
                        <h2 className="h2-product">Descrição:</h2>
                        <textarea className="form-control edit-textarea" placeholder={posts.description}></textarea>
                    </div>
                </div>
            </div>
            <div className="confirm new-product">
                <Link to="/product-registration">
                    <button className="btn btn-outline-danger">SALVAR</button>
                </Link>
            </div>
        </div>
    )
}

export default EditProduct;