import React from 'react';
import userServiceService from '../../services/UserServiceService';

import '../../styles/productList.css';
import { Link } from 'react-router-dom';

export default class ProductList extends React.Component {
    constructor() {
        super();

        this.state = {
            teste: '',
        }
    }
    
    onClickCheckImg(e) {
        e.preventDefault();
        localStorage.setItem('src', e.target.src);
        localStorage.setItem('name', e.target.name);
        localStorage.setItem('index', e.target.className);
        window.location = '/product';
    }

    render() {
        const lista = userServiceService.menu();
        const userName = localStorage.getItem('userName');
        const table = localStorage.getItem('table');
         
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="content-menu-register">
                                <div class="content-in-text">
                                    <h1>Bem vindo,</h1>
                                    <h2>{userName}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form>
                        <h1 className="menu">Faça seu pedido</h1>
                        <h2 className="menu-1">Mesa: {table}</h2>
                        <h2 className="menu-2">Carpadio:</h2>
                        <div id="products">
                            {
                                lista.map((itens) => {
                                    const names =  itens.name.map((name) => {
                                        return name;
                                    })
                                    return (
                                        <div id="product-img">{
                                            itens.src.map((srcs, index) => {
                                                return (
                                                    <div class="form-group" id="products">
                                                        <img class={[index]} name={[names[index]]} id="img" key={index} src={srcs} alt="" onClick={this.onClickCheckImg} />
                                                        <label id="product-name" key={index}>{[names[index]]}</label>
                                                    </div>
                                                )
                                            })            
                                        }</div>
                                    )
                                })
                            }
                            <Link to="/ordered">
                                <button class="btn btn-outline-danger ordered">MEUS PEDIDOS</button>
                            </Link>
                        </div>           
                    </form>
                </div>
            </React.Fragment>
        )
    }
}