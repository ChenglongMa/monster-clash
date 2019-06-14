import React from "react";
import {between} from "../utils/NumberUtil";
import Cell, {Role} from "./Cell";

class Board extends React.Component {

    /**
     * Determines if the specified coordinate in the Board.
     * @param x
     * @param y
     * @returns {boolean}
     */
    inBoard(x, y) {
        const maxX = this.props.maxX;
        const maxY = this.props.maxY;
        const cornerX = this.props.cornerX;
        const cornerY = this.props.cornerY;
        let validX = between(x, -maxX, maxX);
        let validY = between(y, -maxY, maxY);

        if (!validX || !validY) {
            return false;
        }
        validX = between(x, -cornerX, cornerX);
        validY = between(y, -cornerY, cornerY);
        return validX || validY;
    }

    static getColor(role: Role) {
        switch (role) {
            default:
                return 'white';
            case Role.OozmaKappa:
                return 'blue';
            case Role.RoarOmegaRoar:
                return 'orange';
            case Role.NEUTRAL:
                return 'grey';
        }
    }

    /**
     * Creates new Cells for this Board
     *
     * @Ensures cells.length > 0
     */
    initializeCells() {
        let x, y, n = 0, cells = [];
        const maxX = this.props.maxX;
        const maxY = this.props.maxY;
        for (y = -1 * maxY; y <= maxY; y++) {
            let cellsInRows = [];
            for (x = -1 * maxX; x <= maxX; x++) {
                let role, color = 'white';
                const isHome = Math.abs(x) === maxX;
                if (this.inBoard(x, y)) {
                    role = x === 0
                        ? Role.NEUTRAL
                        : (x < 0 ? Role.OozmaKappa : Role.RoarOmegaRoar);
                    color = n++ % 2 === 0
                        ? 'black'
                        : Board.getColor(role);
                } else {
                    role = Role.DISABLED;
                }
                cellsInRows.push(<Cell
                    key={[x, y]}
                    // x={x}
                    // y={y}
                    isHome={isHome}
                    role={role}
                    style={
                        {background: color}
                    }
                />);
            }
            cells.push(
                <div className='board-row' key={y}>
                    {cellsInRows}
                </div>
            );
        }
        return cells;
    }

    render() {
        return (
            <div>
                {this.initializeCells()}
            </div>
        )
    }
}

export default Board;