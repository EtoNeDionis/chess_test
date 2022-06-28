import {Figure} from "./Figure";
import image_white from '../../assets/chess-rook-white.png'
import image_black from '../../assets/chess-rook-black.png'
import {Cell} from "../Cell";

export class Rook extends Figure{

    constructor(cell: Cell, color: string, id: number) {
        super(cell, color, id);
        this.image = color === 'white' ? image_white : image_black
        this.id = id
    }

    verifyMove(target: Cell) {
            if (!super.verifyMove(target)) return false;
            else if (this.cell.verticalAvailableCells(target)) return true;
            else if (this.cell.horizontalAvailableCells(target)) return true;

        return false
    }
}