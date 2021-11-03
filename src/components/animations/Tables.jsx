import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/tables.json';
import '../../styles/tables.css';

function AnimationTable() {
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
            <Lottie options={defaultOptions}
                // width={200}
                // isStopped={this.state.isStopped}
                // isPaused={this.state.isPaused}
                />
        </div>
    )
}

export default AnimationTable;