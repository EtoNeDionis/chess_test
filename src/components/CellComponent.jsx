import React from 'react';
import {FC} from "react";
import {Cell} from "../classes/Cell";

interface cellProps {
    cell: Cell;
    selectedCell: boolean;
    click: (cell: Cell) => void
}

const CellComponent: FC<cellProps> = ({cell, click, selectedCell}) => {
    return (
        <div
            className={((selectedCell && cell.figure)? 'selected' : null) + ' cell ' + cell.color}
            onClick={() => click(cell)}
            style = {{background: cell.usable && cell.figure ? 'darkred' : ''}}
        >
            {cell.figure && <img src={cell.figure.image} alt={''}/>}
            {!cell.figure && cell.usable && <div className="available"/>}

        </div>
    );
};

export default CellComponent;