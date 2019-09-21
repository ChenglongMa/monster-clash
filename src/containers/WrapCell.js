import Overlay from './Overlay'
import '../css/Cell.css'
import React from 'react'
import {DropTarget} from 'react-dnd'
import Cell from "./Cell";
import ItemTypes from "./ItemTypes";

const WrapCell = ({
                      x, y,
                      connectDropTarget,
                      isOver,
                      canDrop,
                      children,
                      color,
                  }) => {
    return connectDropTarget(
        <div className="WrapCell">
            <Cell
                style={{
                    background: color
                }}
            >{children}</Cell>
            {isOver && !canDrop && <Overlay color="red"/>}
            {!isOver && canDrop && <Overlay color="yellow"/>}
            {isOver && canDrop && <Overlay color="green"/>}
        </div>,
    )
};
export default DropTarget(
    ItemTypes.PIECE,
    {
        canDrop: props => canMoveKnight(props.x, props.y),
        drop: props => moveKnight(props.x, props.y),
    },
    (connect, monitor) => {
        return {
            connectDropTarget: connect.dropTarget(),
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }
    },
)(WrapCell)
