import {Figure} from "./Figure";
import {Cell} from "../Cell";
import image_white from "../../assets/chess-pawn-white.png";
import image_black from "../../assets/chess-pawn-black.png";

export class Pawn extends Figure{
    constructor(cell: Cell, color: string, id: number) {
        super(cell, color, id);
        this.image = color === 'white' ? image_white : image_black;
        this.id = id
    }

    verifyMove(target: Cell) {
        return super.verifyMove(target)
    }
}