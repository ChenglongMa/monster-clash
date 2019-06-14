import React from 'react';
import '../css/Cell.css'

export const Role = {
    OozmaKappa: 'ok',
    RoarOmegaRoar: 'ror',
    NEUTRAL: "neutral",
    DISABLED: "disabled",
};

class Cell extends React.Component {


    render() {

        return (
            <div className='Cell' style={this.props.style}/>
        )
    }
}

export default Cell;