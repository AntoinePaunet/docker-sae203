import Piece from "./Piece.js";


export default class Reine extends Piece
{
    constructor(lig, col, num) {super(lig,col,num)}

    deplacementValide(ligDest, colDest)
    {
        return Math.abs(ligDest-this._lig) == Math.abs(colDest-this._col) || ligDest==this.lig || colDest==this._col;
    }
}