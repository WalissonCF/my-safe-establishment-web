import React, { useEffect, useState } from 'react';
import userService from '../../services/UserService';

import '../../styles/ordered.css';
import { Link } from 'react-router-dom';

function Ordered() {
    const [posts, setPosts] = useState([]);
    const userName = localStorage.getItem('userName');

    async function fetchPosts() {
        console.log("Batendo na API...");
        await userService.getProducts().then(setPosts);
    }

    useEffect(() => {
        console.log("chamando API");
        fetchPosts()
    }, [])

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
                {/* {
                    list.map((item) => {
                        const names = item.name.map((name) => {
                            return name;
                        });
                        const quatityProducts = item.quatityProduct.map((quatityProduct) => {
                            return quatityProduct;
                        });
                        const amounts = item.amount.map((amount) => {
                            return amount;
                        });
                        console.log("names", names);
                        console.log("quatityProducts", quatityProducts);
                        console.log("amounts", amounts);
                        return (
                            <div id="products-selecteds">{
                                item.src.map((src, i) => {
                                    return (
                                        <div id="products-confirmed">
                                            <img id="img-selected" src={src} alt="" />
                                            <label className="product-selected">{[names[i]]}</label>
                                            <label className="product-selected">Quantidade: {[quatityProducts[i]]}</label>
                                            <label className="product-selected">R${[amounts[i]]}</label>
                                        </div>
                                    )
                                })
                            }</div>
                        )
                    })
                } */}
                <div className="product-list">
                    {/* <Link to="/product-list">
                        <button className="btn btn-outline-danger">VOLTAR</button>
                    </Link> */}
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