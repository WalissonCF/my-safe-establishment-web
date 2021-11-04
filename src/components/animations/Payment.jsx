import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/payment.json';
import '../../styles/tables.css';

function AnimationPayment() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="table-animation">
            <Lottie options={defaultOptions} width={100} height={100} />
        </div>
    )
}

export default AnimationPayment;