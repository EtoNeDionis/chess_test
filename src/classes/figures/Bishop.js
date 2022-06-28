import {Figure} from "./Figure";
import image_white from '../../assets/chess-bishop-white.png'
import image_black from '../../assets/chess-bishop-black.png'
import {Cell} from "../Cell";

export class Bishop extends Figure {

    constructor(cell: Cell, color: string, id: number) {
        super(cell, color, id);
        this.image = color === 'white' ? image_white : image_black;
        this.id = id
    }

    verifyMove(target: Cell) {
        if (!super.verifyMove(target)) return false;
        else if (this.cell.diagonalAvailableCells(target)) return true;

        return false
    }

}