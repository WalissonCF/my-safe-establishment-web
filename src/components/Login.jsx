import React from 'react'

import '../login.css'

export default () => {
    return (
        <React.Fragment>
            <div class="apagar">
                <p class="t1">Bem-vindo ao</p>
                <p class="t2">My safe establishment web</p>
                <div class="qrCode"></div>
                <p class="s1">Scaneia o QR code</p>
                <p class="s2">Não possuí conta? Cadastre-se agora</p>
                <button id="cadastro">CADASTRE-SE</button>
            </div>
             <form action="#" id="content-form-register">
                <div>
                    <label for="cpf" class="cpf">CPF:</label>
                    <input id="cpf" type="text" placeholder="Seu nome" required></input>
                </div>
                <div>
                    <label for="date" class="date">Data de nascimento:</label>
                    <input id="date" type="text" placeholder="date" data-mask="00/00/0000" required></input>
                </div>
                <button id="entrar">ENTRAR</button>
             </form>
        </React.Fragment>
    )
}