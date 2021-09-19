import React from 'react';

import '../../styles/productList.css';


export default class ProductList extends React.Component {
    constructor() {
        super();

        this.state = {
            teste: '',
        }
    }

    menu() {
        const srcs = ["https://miro.medium.com/max/1838/1*CgccG6m3Xl8s2EJI6_e7sw.png",
        "https://criticalhits.com.br/wp-content/uploads/2021/03/AAAABYQp33Z3D9uGJK0IZsYfvENQpSz4zoSrjb8v5CCl4UTiFDe7Z_yovhieDFhJtGm2Rh4LoleJfHwHdyRDMtezwqojkDXH.jpg",
        "https://narutokonoha.com/wp-content/uploads/2019/10/Imagens-do-anime-Naruto-para-Imprimir-e-Colorir.jpg",
        "https://images.unsplash.com/photo-1516123359062-32456af7c128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"];
        const names = ["Programação", "Naruto", "Naruto2", "Flor"]

        let list = [
            {
                src: srcs,
                name: names,
            }
        ]
        return list;
    }

    render() {
        const lista = this.menu();
        
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="content-menu-register">
                                <div class="content-in-text">
                                    <h1>Bem vindo,</h1>
                                    <h2>nomeUser</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form>
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
                                                    <a href=""><img id="img" key={index} src={srcs} alt="" /></a>
                                                    <label id="product-name" key={index}>{[names[index]]}</label>
                                                </div>
                                            )
                                        })            
                                    }</div>
                                )
                            })
                        }
                    </form>
                </div>
            </React.Fragment>
        )
    }
}