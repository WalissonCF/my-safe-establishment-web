import { Route } from 'react-router-dom';

const authService = {

    setLoggedUser(data) {
        let user = [
            {
                name: data.name,
                customerId: data.customerId,
            }
        ];
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', data.token);
    },

    isAuthenticated(){
        let token = localStorage.getItem("token");
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
        if (isLoggedIn === true) {
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
               }}>Faz o login ai cara!</h1>
           </div>
            } />;
        }
    }    
}

export default authService;