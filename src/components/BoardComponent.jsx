import React, {useEffect, useState} from 'react'
import {FC} from "react";
import CellComponent from "./CellComponent";
import {Board} from "../classes/Board";
import {Cell} from "../classes/Cell";

interface boardProps {
    board: Board;
    setBoard: (board: Board) => void
}

const BoardComponent: FC<boardProps> = ({board, setBoard}) => {
    const [activeCell, setActiveCell] = useState(null)

    function click(cell: Cell) {
        //переместить фигуру на другую ячейку
        if (activeCell && activeCell !== cell && activeCell.figure?.verifyMove(cell)) {
            activeCell.moveFigure(cell)
            setActiveCell(null)
            updateBoard()
        } else {
            setActiveCell(cell)
        }
        console.log(cell)
    }

    function updateBoard() {
        const newBoard = board.getCopy()
        setBoard(newBoard)
    }

    //показывать доступные ячейки при нажатии
    useEffect(() => {
        availableMoves()
    }, [activeCell])

    function availableMoves() {
        board.availableMoves(activeCell)
        updateBoard()
    }

    return (
        <div className={'board'}>
            {board.chess_map.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            cell={cell}
                            click={click}
                            selectedCell={cell.x === activeCell?.x && cell.y === activeCell?.y}
                            key={cell.id}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;

