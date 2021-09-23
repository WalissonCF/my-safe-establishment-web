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
        "Ovos Benedict", "Sahi Pacífico"];
        const amounts = [20.00, 30.00, 40.00, 50.00, 100.00, 150.00, 80.00, 75.00];

        let list = [
            {
                src: srcs,
                name: names,
                amont: amounts, 
            }
        ]
        return list;
    }

    onClickCheckImg(e) {
        e.preventDefault();
        localStorage.setItem('src', e.target.src);
        localStorage.setItem('name', e.target.name);
        localStorage.setItem('index', e.target.className);
        if (document.getElementById('product-selected').offsetParent === null) {
            document.getElementById('products').hidden="true";
            document.getElementById('product-selected').removeAttribute('hidden');
            document.querySelector('.content-menu-register').hidden="true";
            document.querySelector('.menu').hidden="true";
            document.querySelector('.menu-1').hidden="true";
            document.querySelector('.menu-2').hidden="true";
        }
    }

    render() {
        const lista = this.menu();
        const userName = localStorage.getItem('cpf');
        const table = localStorage.getItem('table');
        const src = localStorage.getItem('src');
        const name = localStorage.getItem('name');
        const index = localStorage.getItem('index');
        
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
                        </div>
                        <div>
                            <div className="form-group" id="product-selected" hidden>
                                <img id="product-img-selected" src={src} alt="" />
                                <label htmlFor="">{name}</label>
                                {
                                    lista.map((item) => {
                                        return (
                                            item.amont.map((amounts, i) => {
                                                const j = parseInt(index)
                                                if (i === j) {
                                                    return <label key={i} htmlFor="">R${amounts}</label> 
                                                }
                                            })
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}