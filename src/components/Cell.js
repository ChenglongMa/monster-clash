import React from 'react';
import '../css/Cell.css'
import {DropTarget} from "react-dnd";

class Cell extends React.Component {

    render() {

        return (
            <div className='Cell' style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

export const Role = {
    OozmaKappa: 'ok',
    RoarOmegaRoar: 'ror',
    NEUTRAL: "neutral",
    DISABLED: "disabled",
};

export default DropTarget(
    'Piece',
    {
        canDrop: props => true,
        drop: props => true,
    },
    (connect, monitor) => {
        return {
            connectDropTarget: connect.dropTarget(),
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }
    },
)(Cell);