import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div id="PaymentForm">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <form>
                    <input
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="name"
                        placeholder="name"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="expiry"
                        placeholder="expiry"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cvc"
                        placeholder="cvc"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
            </form>
            </div>
        );
    }
}
    
// function Payment() {
//     const [number, setNumber] = useState([]);
//     const [name, setName] = useState('');
//     const [expiry, setExpiry] = useState('');
//     const [cvc, setCvc] = useState('');
//     const [focus, setFocus] = useState([]);

//     return (
//         <div>
//             <Cards
//                 cvc={this.state.cvc}
//                 expiry={this.state.expiry}
//                 focused={this.state.focus}
//                 name={this.state.name}
//                 number={this.state.number}
//             />
//             <form>
//                 <input type="tel" name="number" value={number} onChange={e => setNumber(e.target.value)}
//                     onFocus={e => setFocus(e.target.name)} />
//             </form>
//         </div>
//     )
// }

// export default Payment;