// Importanto biblioteca responsável por requisições HTTP
import { Route } from 'react-router-dom';

// Definindo o bjeto do serviço
const authService = {

    // Função para salvar o usuário logado no local storage
    setLoggedUser(data, cpf) {
        let parsedData = JSON.stringify(data)
        localStorage.setItem('cpf', cpf);
        localStorage.setItem("user", parsedData)
    },

    // Função responsável por recuperar o usuário logado do local storage
    // isAuthenticated(){
    //     let data = localStorage.getItem("cpf");  
    //     if(!data) return null;
    //     try {
    //         let parsedData = JSON.parse(data)
    //         return parsedData
    //     } catch (error) {
    //         console.log(error)
    //         return null
    //     }
    // },

    isAuthenticated(){
        let token = localStorage.getItem("cpf");
        console.log("token: ", token);
        try {
            if (token === null) {
                console.log(token);
                return false;
            } else {
                return true;
            }
        } catch(error) {
            return false;
        }
    },

    privateRoutes(path, elementTest) {
        const isLoggedIn = this.isAuthenticated();
        console.log("logado?", isLoggedIn);
        if (isLoggedIn == true) {
            console.log("to aqui", isLoggedIn);
           return <Route path={path} element={elementTest} />;
        } else {
           return <Route path={path} element={ 
           <div class="container-fluid">
               <img style={{
                   width: '100%',
                   height: '100%'
               }} alt="Deu-RUIM" src="https://c.tenor.com/MLj6KHoL_MQAAAAC/food-wars.gif"></img>
               <h1 style={{
                   textAlign: 'center'
               }}>Faz o login ai</h1>
           </div>
            } />;
        }
    }    
}

export default authService;