import React, { useEffect, useState } from 'react';

import '../../styles/productList.css';
import { Link } from 'react-router-dom';
import userService from '../../services/UserService';

function ProductList() {
    const [posts, setPosts] = useState([]);
    const productList = "/product-list";
    const userName = localStorage.getItem('userName');
    const table = localStorage.getItem('table');

    async function fetchPosts() {
        console.log("Batendo na API...");
        await userService.getProducts().then(setPosts);
    }

    useEffect(() => {
        console.log("chamando API");
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
                <div id="product-img">
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
                            return product.map((itens, index) => {
                                const names = itens.name.map((name) => {
                                    return name;
                                });
                                return (
                                    <div id="products">{
                                        itens.src.map((srcs, index) => {
                                            return (
                                                <div class="form-group" id="products">
                                                    <img class={[index]} name={[names[index]]} id="img" key={index} src={srcs} alt="" onClick={onClickCheckImg} />
                                                    <label id="product-name" key={index}>{[names[index]]}</label>
                                                </div>
                                            )
                                        })
                                    }</div>
                                )
                            })
                        })
                    }
                    {/* {
                                lista.map((itens) => {
                                    const names = itens.name.map((name) => {
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
                            } */}
                </div>
                <Link to="/ordered">
                        <button class="btn btn-outline-danger ordered">MEUS PEDIDOS</button>
                </Link>
            </form>
        </div>
    )
}

export default ProductList;

// export default class ProductList extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             teste: '',
//         }
//     }

//     onClickCheckImg(e) {
//         e.preventDefault();
//         localStorage.setItem('src', e.target.src);
//         localStorage.setItem('name', e.target.name);
//         localStorage.setItem('index', e.target.className);
//         window.location = '/product';
//     }

//     render() {
//         const lista = userServiceService.menu();
//         console.log(lista);
//         const userName = localStorage.getItem('userName');
//         const table = localStorage.getItem('table');

//         return (
//             <React.Fragment>
//                 <div class="container-fluid">
//                     <div class="row">
//                         <div class="col-12">
//                             <div class="content-menu-register">
//                                 <div class="content-in-text">
//                                     <h1>Bem vindo,</h1>
//                                     <h2>{userName}</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <form>
//                         <h1 className="menu">Faça seu pedido</h1>
//                         <h2 className="menu-1">Mesa: {table}</h2>
//                         <h2 className="menu-2">Carpadio:</h2>
//                         <div id="products">
//                             {
//                                 lista.map((itens) => {
//                                     const names = itens.name.map((name) => {
//                                         return name;
//                                     })
//                                     return (
//                                         <div id="product-img">{
//                                             itens.src.map((srcs, index) => {
//                                                 return (
//                                                     <div class="form-group" id="products">
//                                                         <img class={[index]} name={[names[index]]} id="img" key={index} src={srcs} alt="" onClick={this.onClickCheckImg} />
//                                                         <label id="product-name" key={index}>{[names[index]]}</label>
//                                                     </div>
//                                                 )
//                                             })            
//                                         }</div>
//                                     )
//                                 })
//                             }
//                             <Link to="/ordered">
//                                 <button class="btn btn-outline-danger ordered">MEUS PEDIDOS</button>
//                             </Link>
//                         </div>           
//                     </form>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }