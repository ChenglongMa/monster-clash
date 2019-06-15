import React from "react";
import '../css/Piece.css'
import {DragSource} from "react-dnd";

class Piece extends React.Component {

    render() {
        return (
            <div id="Piece"
                 ref={this.props.connectDragSource}
            >

            </div>
        );
    }
}

export default DragSource(
    'Piece',
    {
        beginDrag: () => ({}),
    },
    (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }),
)(Piece);