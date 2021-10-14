import React, { useEffect, useState } from 'react';
import userService from '../../services/UserService';

import '../../styles/ordered.css';
import { Link } from 'react-router-dom';

function Ordered() {
    const [posts, setPosts] = useState([]);
    const userName = localStorage.getItem('userName');

    async function fetchPosts() {
        console.log("Batendo na API...");
        await userService.getListOrder().then(setPosts);
    }

    useEffect(() => {
        console.log("chamando API");
        fetchPosts()
    }, [])

    function onClickCloseOrder() {
        userService.postCloserOrder();
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="content-menu-register">
                        <div className="content-in-text">
                            <h1>Bem vindo,</h1>
                            <h2>{userName}</h2>
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
                                            return (
                                                <div id="products-confirmed">
                                                    <img id="img-selected" src={src} alt="" />
                                                    <label className="product-selected">{[namesProducts[i]]}</label>
                                                    <label className="product-selected">Quantidade: {[quatityProducts[i]]}</label>
                                                    <label className="product-selected">R${[amounts[i]]}</label>
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
                    <Link to="/product-list">
                        <button className="btn btn-outline-danger">VOLTAR</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Ordered;

// export default class Ordered extends React.Component {
//     constructor() {
//         super();
//     };

//     render() {
//         const list = userServiceService.ordered();
//         const userName = localStorage.getItem('userName');

//         return (
//             <React.Fragment>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="content-menu-register">
//                                 <div className="content-in-text">
//                                     <h1>Bem vindo,</h1>
//                                     <h2>{userName}</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         {
//                             list.map((item) => {
//                                 const names = item.name.map((name) => {
//                                     return name;
//                                 });
//                                 const quatityProducts = item.quatityProduct.map((quatityProduct) => {
//                                     return quatityProduct;
//                                 });
//                                 const amounts = item.amount.map((amount) => {
//                                     return amount;
//                                 });
//                                 console.log("names", names);
//                                 console.log("quatityProducts", quatityProducts);
//                                 console.log("amounts", amounts);
//                                 return (
//                                     <div id="products-selecteds">{
//                                         item.src.map((src, i) => {
//                                             return (
//                                                 <div id="products-confirmed">
//                                                     <img id="img-selected" src={src} alt="" />
//                                                     <label className="product-selected">{[names[i]]}</label>
//                                                     <label className="product-selected">Quantidade: {[quatityProducts[i]]}</label>
//                                                     <label className="product-selected">R${[amounts[i]]}</label>
//                                                 </div>
//                                             )
//                                         })   
//                                     }</div>
//                                 )
//                             })
//                         }
//                         <div className="product-list">
//                             <Link to="/product-list">
//                                 <button className="btn btn-outline-danger">VOLTAR</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }