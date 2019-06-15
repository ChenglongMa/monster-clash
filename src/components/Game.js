import React from 'react'
import Center from "react-center";
import Board from "./Board";
// import Dice from "./Dice";
import '../index.css';
import RollDice from "../containers/RollDice";
import {DndProvider} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';
import Piece from "./Piece";

const pieces = new Map([
    [[-6, 2].toString(), <Piece></Piece>],
    [[-6, 3].toString(), <Piece></Piece>],
    [[-6, 4].toString(), <Piece></Piece>],
    [[6, 2].toString(), <Piece></Piece>],
    [[6, 3].toString(), <Piece></Piece>],
    [[6, 4].toString(), <Piece></Piece>],

]);

class Game extends React.Component {

    render() {
        return (
            <Center>
                <div className="game">
                    <div className="game-info">
                        <div>Player 1 Panel</div>
                    </div>
                    <div className="game-board">
                        <DndProvider backend={HTML5Backend}>
                            <Board
                                maxX={6}
                                maxY={6}
                                cornerX={4}
                                cornerY={4}
                                pieces={pieces}
                            />
                        </DndProvider>
                        <RollDice/>
                    </div>
                    <div className="game-info">
                        <div>Player 2 Panel</div>
                    </div>
                </div>
            </Center>
        );
    }
}


export default Game;