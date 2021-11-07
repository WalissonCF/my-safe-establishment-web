import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/paymentApp.json';
import '../../styles/tables.css';

function AnimationPaymentApp() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="animation">
            <Lottie options={defaultOptions} width={200} height={200} />
        </div>
    )
}

export default AnimationPaymentApp;