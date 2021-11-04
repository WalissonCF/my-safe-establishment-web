import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/success.json';
import '../../styles/tables.css';

function AnimationSuccess() {
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
            <Lottie options={defaultOptions} width={70} height={70} />
        </div>
    )
}

export default AnimationSuccess;