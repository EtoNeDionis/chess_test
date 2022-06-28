import {Cell} from "../Cell";

export class Figure {
    image: string | null
    cell: Cell
    id: number

    constructor(cell: Cell, color: string, id: number) {
        this.cell = cell;
        this.color = color;
        this.cell.figure = this;
        this.image = null;
        this.id = id
    }

    color: string
    id: number

    verifyMove(target: Cell) {
        if(this.color === target.figure?.color){
            return false
        }
        return true
    }

    moveFigure(target: Cell){}
}