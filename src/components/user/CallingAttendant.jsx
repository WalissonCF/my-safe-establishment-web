import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/walking-man.json';
import '../../styles/callingAttendant.css';
import customerUtils from '../../utils/customerUtils';

export default class CallingAttendant extends React.Component {
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
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div class="content-in-text">
                                <h3>{customerUtils.title()}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 animation-info">
                            <div className="animation">
                                <Lottie options={defaultOptions}
                                    width={300}
                                    isStopped={this.state.isStopped}
                                    isPaused={this.state.isPaused}
                                />
                            </div>
                        </div>
                    </div>
                    <p className="warning">Um atendente virá até sua mesa, por favor aguarde</p>
                </div>
            </React.Fragment>
        )
    }
}