import Piece from "./Piece.js";

export default class Pion extends Piece
{
	constructor(lig, col, num) {super(lig, col, num);}

	deplacementValide(ligDest, colDest)
	{
		console.log(ligDest, colDest);
		console.log(this.lig, this.col);
		return Math.abs(ligDest-this.lig) == 1 && Math.abs(colDest-this.col) == 1;
	}
}