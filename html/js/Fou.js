import Piece from "./Piece.js";
import Roi from "./Roi.js";

export default class Fou extends Piece 
{
	constructor(num, x, y) {super(num, x, y)}

	deplacementValide(xDest, yDest, tabPieces) 
	{
		return    super.deplacementValide(xDest, yDest, tabPieces) 
		       && Math.abs(xDest-this.x) == Math.abs(yDest-this.y)
			   && !this.autrePiece(xDest, yDest, tabPieces)
			   
	}

	autrePiece(xDest, yDest, tabPieces)
	{
		let dirX = 1;
		let dirY = 1;
		if(this.x > xDest) dirX = -1;
		if(this.y > yDest) dirY = -1;

		let piece = null;
		for(let k = 1; k < Math.abs(xDest-this.x); k++)
		{
			piece = tabPieces[this.x+k*dirX][this.y+k*dirY];
			if (piece instanceof Roi)return false;
			if (piece !== null) return true;
		}
		return false;
	}
}