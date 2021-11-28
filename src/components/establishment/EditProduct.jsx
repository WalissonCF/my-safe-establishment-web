import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import '../../styles/editProduct.css';
import userService from '../../services/UserService';
import customerUtils from '../../utils/customerUtils';

function EditProduct() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        await userService.getProductToId().then(setPosts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function updateProduct() {
        const product = JSON.parse(localStorage.getItem('editProduct'));
        console.log(product);

        const name = document.getElementById('edit-name-product').value;
        const value = document.getElementById('edit-value').value;
        const ingredients = document.getElementById('edit-ingredient').value;
        const description = document.getElementById('edit-description').value;

        const updateName = isValidateName(name, product.name);
        const updateValue = isValidateValue(value, product.value);
        const updateIngredient = isValidateIngredient(ingredients, product.ingredients)
        const updateDescription = isValidateDescription(description, product.description);

        let productUpdate = {
            name: updateName,
            value: updateValue,
            ingredients: updateIngredient,
            description: updateDescription,
        };
        console.log(productUpdate);
    }

    function isValidateDescription(description, descriptionOrigin) {
        var updateDescription;
        localStorage.setItem('editDescription', descriptionOrigin);
        if (description === '') {
            return updateDescription = localStorage.getItem('editDescription');;
        } else {
            return updateDescription = description;
        }
    }

    function isValidateIngredient(ingredients, ingredientsOrigin) {
        var updateIngredients;
        localStorage.setItem('editIngredients', ingredientsOrigin);
        if (ingredients === '') {
            return updateIngredients = localStorage.getItem('editIngredients');;
        } else {
            return updateIngredients = ingredients;
        }
    }

    function isValidateName(name, nameOrigin) {
        var updateName;
        localStorage.setItem('editName', nameOrigin);
        if (name === '') {
            return updateName = localStorage.getItem('editName');;
        } else {
            return updateName = name;
        }
    }

    function isValidateValue(value, valueOrigin) {
        var updateValue;
        localStorage.setItem('editValue', valueOrigin);
        if (value === '') {
            return updateValue = localStorage.getItem('editValue');;
        } else {
            return updateValue = value;
        }
    }

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
                        <input id="edit-name-product" type="text" className="form-control edit-input" placeholder={posts.name} />
                        <h2 className="h2-product edit-h2-product edit-value">Valor:</h2>
                        {/* <p>Valor:</p> */}
                        {/* <input type="text" className="form-control edit-input" placeholder={`R$${posts.value}`} /> */}
                        <NumberFormat id="edit-value" className="form-control edit-input" thousandSeparator={true} prefix={'R$'} type="tel" className="form-control" name="value"
                                    placeholder="R$" autoComplete="off" placeholder={`R$${posts.value}`} />
                    </div>
                </div>
                <div className="ingredients-description">
                    <div className="ingredients-product">
                        <h2 className="h2-product">Ingredientes:</h2>
                        <textarea id="edit-ingredient" className="form-control edit-textarea"
                        placeholder={posts.ingredients}></textarea>
                    </div>
                    <div className="description-product">
                        <h2 className="h2-product">Descrição:</h2>
                        <textarea id="edit-description" className="form-control edit-textarea" placeholder={posts.description}></textarea>
                    </div>
                </div>
            </div>
            <div className="confirm new-product">
                {/* <Link to="/product-registration"> */}
                    <button className="btn btn-outline-danger" onClick={updateProduct}>SALVAR</button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default EditProduct;