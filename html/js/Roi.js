import Piece from "./Piece.js";

export default class Roi extends Piece
{
    constructor(num, x, y) {super(num, x, y)}

    deplacementValide(xDest, yDest, tabPieces)
    {		
		return    super.deplacementValide(xDest, yDest, tabPieces) 
		       && Math.abs(xDest-this.x) <= 1 
			   && Math.abs(yDest-this.y) <= 1
			   && !this.autrePiece(xDest, yDest, tabPieces);
    }

	autrePiece(xDest, yDest, tabPieces)
	{
		return tabPieces[xDest][yDest] !== null;
	}
}