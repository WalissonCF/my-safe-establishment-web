import React from 'react'

import '../register.css'

export default () => {
    return (
        <React.Fragment>
            <form action="#" id="content-form-register">
                <div class="apagar">
                    <p class="titulo">Bem-vindo ao</p>
                    <p class="titulo2">My safe establishment web</p>
                    <p class="sobretitulo">Cadastre-se agora para conseguir seu lugar
                    seguro(Alterar isto)</p>
                    <p class="sobretitulo2">Aqui escrevemos um pouco sobre
                    nosso software ou informando 
                    para que serve o cadastro</p>
                    <p class="sobretitulo3">Já possuí conta? Acesse ela agora
                    clicando no botão abaixo</p>
                    <button id="login">ENTRAR</button>
                </div>
                <div>
                    <label for="name" class="name">Nome:</label>
                    <input id="name" type="text" placeholder="Seu nome" required></input>
                </div>
                <div>
                    <label for="cpf" class="cpf">CPF:</label>
                    <input id="cpf" type="text" placeholder="CPF" data-mask="000.000.000-00" required></input>
                </div>
                <div>
                    <label for="date" class="date">Data de nascimento:</label>
                    <input id="date" type="text" placeholder="Data de nascimento" required></input>
                </div>

                <button id="sign-up" href="#">CADASTRAR</button>
            </form>
        </React.Fragment>
    )
}