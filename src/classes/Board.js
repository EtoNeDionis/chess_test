import {Cell} from './Cell'
import {Rook} from "./figures/Rook";
import {King} from "./figures/King";
import {Bishop} from "./figures/Bishop";
import {Pawn} from "./figures/Pawn";
import {Queen} from "./figures/Queen";
import {Knight} from "./figures/Knight";

export class Board {
    chess_map: Cell[] = []

    //сделать пустую 8x8 доску
    initCells() {
        let countId = 1
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(this, i, j, null, 'white', countId))
                } else {
                    row.push(new Cell(this, i, j, null, 'black', countId))
                }
                countId++
            }
            this.chess_map.push(row)
        }
    }

    availableMoves(selectedCell: Cell | null) {
        for (let i = 0; i < this.chess_map.length; i++) {
            const row = this.chess_map[i]
            for (let j = 0; j < 8; j++) {
                const target = row[j]
                target.usable = selectedCell?.figure?.verifyMove(target)
            }
        }
    }

    getCopy(){
        const newBoard = new Board()
        newBoard.chess_map = this.chess_map
        return newBoard
    }

    initFiguresClassic() {

        let countId = 1

        new Rook(this.chess_map[0][0], 'black', countId++)
        new Rook(this.chess_map[0][7], 'black', countId++)

        new Rook(this.chess_map[7][0], 'white', countId++)
        new Rook(this.chess_map[7][7], 'white', countId++)

        new Knight(this.chess_map[0][1], 'black', countId++)
        new Knight(this.chess_map[0][6], 'black', countId++)

        new Knight(this.chess_map[7][1], 'white', countId++)
        new Knight(this.chess_map[7][6], 'white', countId++)

        new Bishop(this.chess_map[0][2], 'black', countId++)
        new Bishop(this.chess_map[0][5], 'black', countId++)

        new Bishop(this.chess_map[7][2], 'white', countId++)
        new Bishop(this.chess_map[7][5], 'white', countId++)

        new Queen(this.chess_map[0][3], 'black', countId++)

        new Queen(this.chess_map[7][3], 'white', countId++)

        new King(this.chess_map[0][4], 'black', countId++)

        new King(this.chess_map[7][4], 'white', countId++)


        for (let i = 0; i < 8; i++) {
            // new Pawn(this.chess_map[1][i], 'black', countId++)
            // new Pawn(this.chess_map[6][i], 'white', countId++)
        }
    }
}