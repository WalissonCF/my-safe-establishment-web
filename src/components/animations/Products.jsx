import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/product.json';
import '../../styles/tables.css';

function AnimationProducts() {
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
            <Lottie options={defaultOptions} width={90} height={90} />
        </div>
    )
}

export default AnimationProducts;