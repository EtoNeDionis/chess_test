import {Board} from "./Board"
import {Figure} from "./figures/Figure"

export class Cell {
    board: Board
    id: number
    x: number
    y: number
    figure: Figure | null
    usable: boolean //можно ли задействовать
    color: 'white' | 'black'

    constructor(board: Board, x: number, y: number, figure: Figure | null, color: String, id: number) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.figure = figure;
        this.id = id;
        this.color = color;
        this.usable = false;
    }

    updateCell(figure: Figure) {
        this.figure = figure
        this.figure.cell = this
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.verifyMove(target)) {
            this.figure.moveFigure(target)
            target.updateCell(this.figure)
            this.figure = null
        }
        this.figure = null;
    }

    isEmpty() {
        return this.figure === null
    }

    horizontalAvailableCells(target: Cell){
        if (this.x !== target.x) {
            return false;
        }

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);
        for (let y = min + 1; y < max; y++) {
            if(!this.board.chess_map[this.x,y].figure === null) {
                return false
            }
        }
        return true;
    }

    verticalAvailableCells(target: Cell){
        if (this.y !== target.y) {
            return false;
        }

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);
        for (let x = min + 1; x < max; x++) {
            if(!this.board.chess_map[x, this.y].figure === null) {
                return false
            }
        }
        return true;
    }

    diagonalAvailableCells(target: Cell){
        const absX = Math.abs(target.x - this.x)
        const absY = Math.abs(target.y - this.y)

        if(absX != absY) return false;

        //ДОДЕЛАТЬ ЭТО!!!

        return true
    }
}