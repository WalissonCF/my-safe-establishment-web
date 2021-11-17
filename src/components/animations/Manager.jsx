import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/manager.json';
import '../../styles/animations.css';

function AnimationManager() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="menu-animation">
            <Lottie options={defaultOptions} width={70} height={70} />
        </div>
    )
}

export default AnimationManager;