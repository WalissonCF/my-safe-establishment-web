import React from 'react';

export default class ProductList extends React.Component {
    constructor() {
        super();

        this.state = {
            teste: '',
        }
    }

    menu() {
        const srcs = ["https://miro.medium.com/max/1838/1*CgccG6m3Xl8s2EJI6_e7sw.png", "https://criticalhits.com.br/wp-content/uploads/2021/03/AAAABYQp33Z3D9uGJK0IZsYfvENQpSz4zoSrjb8v5CCl4UTiFDe7Z_yovhieDFhJtGm2Rh4LoleJfHwHdyRDMtezwqojkDXH.jpg"];
        const names = ["Programação", "Naruto"]

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
        console.log(lista);

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
                            lista.map((item) => {
                                console.log("item: ", item);
                                return (
                                    <div class="form-group">
                                        {item.name.map((names) => {
                                            console.log("names: ", names);
                                            return (
                                                <label for={names}>{names}</label>
                                            );
                                        })
                                        }
                                        {item.src.map((srcs) => {
                                            console.log("src: ", srcs);
                                            return (
                                                <img src={srcs} /> 
                                            );
                                        })}
                                    </div>
                                );
                            })
                        }
                    </form>
                </div>
            </React.Fragment>
        )
    }
}