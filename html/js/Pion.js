import Piece from "./Piece.js";

export default class Pion extends Piece
{
	constructor(num, x, y) {super(num, x, y);}

	deplacementValide(xDest, yDest, tabPieces)
	{
		/*
		let distParcourable = 1;
		if(!this.aDeplace) distParcourable = 2;
		
		let res = xDest===this.x && Math.abs(yDest-this.y) <= distParcourable;
		*/

		return super.deplacementValide(xDest, yDest, tabPieces);
	}
}