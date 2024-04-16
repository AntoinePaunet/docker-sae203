import Piece from "./Piece.js";


export default class Reine extends Piece
{
    constructor(num, x, y) {super(num, x, y)}

    deplacementValide(xDest, yDest, tabPieces)
    {
        return    super.deplacementValide(xDest, yDest, tabPieces) 
		       && (Math.abs(xDest-this.x) == Math.abs(yDest-this.y) || xDest==this.x || yDest==this.y);
    }
}