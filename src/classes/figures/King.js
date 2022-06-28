import {Figure} from "./Figure";
import image_white from '../../assets/chess-king-white.png'
import image_black from '../../assets/chess-king-black.png'
import {Cell} from "../Cell";

export class King extends Figure{

    constructor(cell: Cell, color: string, id: number) {
        super(cell, color, id);
        this.image = color === 'white' ? image_white : image_black;
        this.id = id
    }

    verifyMove(target: Cell) {
        return super.verifyMove(target)
    }

}