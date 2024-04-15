import Piece from "./Piece.js";

export default class Tour extends Piece
{
    constructor(lig, col, num) {super(lig,col,num)}

    déplacementValide(ligDest, colDest)
    {
		console.log(ligDest, colDest);
		console.log(this.lig, this.col);
        return ligDest==this.lig || colDest==this.col;
    }
}