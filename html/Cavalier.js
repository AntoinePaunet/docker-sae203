import Piece from "./Piece.js";


export default class Cavalier extends Piece 
{
	constructor(num, x, y) {super(num, x, y);}

	deplacementValide(xDest, yDest, tabPieces) 
	{
		return super.deplacementValide(xDest, yDest, tabPieces)
			&& ((Math.abs(xDest-this.x) == 2 && Math.abs(yDest-this.y) == 1) 
			||  (Math.abs(xDest-this.x) == 1 && Math.abs(yDest-this.y) == 2));
	}
}