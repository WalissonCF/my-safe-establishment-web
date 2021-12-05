import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/success.json';
import customerUtils from '../../utils/customerUtils';
import { Link } from 'react-router-dom';


export default class PaymentSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 animation-info">
                            <div className="payment-success">
                                <Lottie options={defaultOptions}
                                    width={300}
                                    isStopped={this.state.isStopped}
                                    isPaused={this.state.isPaused}
                                />
                            </div>
                        </div>
                    </div>
                    <p className="success">Pagamento realizado com sucesso Sr(a). {customerUtils.getCustomerName()}</p>
                    <Link to="/menu">
                        <button className="btn btn-outline-danger logoff">SAIR</button>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}