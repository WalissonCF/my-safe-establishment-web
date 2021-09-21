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
        const srcs = ["https://skdesu.com/wp-content/uploads/2017/10/shokugeki.jpg",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/974c191f7974357d204fc1cd38157e744f17c169_hq.gif?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/transforming_furikake_shining.gif?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/rainbow_terrine_anime.png?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/chou_farci_anime.png?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/eggs_benedict_anime.png?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/oja-style_pacific_saury_takikomi_gohan_anime.png?w=778"];
        const names = ["Bacon assado", "Sumire Karaage Roll", "Furikake Gohan", "Terrine Arco-íris", "Chou Farci",
        "Ovos Benedict", "Sahi Pacífico"]

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
        const userName = localStorage.getItem('cpf');
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