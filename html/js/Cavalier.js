import Piece from "./Piece.js";


export default class Cavalier extends Piece 
{
	constructor(lig, col, num) {super(lig, col, num)}

	deplacementValide(ligDest, colDest) 
	{
		return (Math.abs(ligDest-this.lig) == 2 && Math.abs(colDest-this.col) == 1) 
			|| (Math.abs(ligDest-this.lig) == 1 && Math.abs(colDest-this.col) == 2);
	}
}