import {Figure} from "./Figure";
import image_white from '../../assets/chess-knight-white.png'
import image_black from '../../assets/chess-knight-black.png'
import {Cell} from "../Cell";

export class Knight extends Figure{

    constructor(cell: Cell, color: string, id: number) {
        super(cell, color, id);
        this.image = color === 'white' ? image_white : image_black;
        this.id = id
    }

    verifyMove(target: Cell) {
        return super.verifyMove(target)
    }
}