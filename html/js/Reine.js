import Piece from "./Piece.js";
import Roi from "./Roi.js";


export default class Reine extends Piece
{
    constructor(num, x, y) {super(num, x, y)}

    deplacementValide(xDest, yDest, tabPieces)
    {
        return    super.deplacementValide(xDest, yDest, tabPieces) 
		       && (Math.abs(xDest-this.x) == Math.abs(yDest-this.y) || xDest==this.x || yDest==this.y)
               && !this.autrePiece(xDest, yDest, tabPieces);
    }

    autrePiece(xDest, yDest, tabPieces) 
    {
        let dirX = 1;
        let dirY = 1;
        if (this.x > xDest) dirX = -1;
        if (this.y > yDest) dirY = -1;
    
		let piece = null;
        if (yDest === this.y) 
        {
            for (let k = 1; k < Math.abs(xDest - this.x); k++) 
			{
				piece = tabPieces[this.x + k * dirX][this.y];
				if (piece !== null && piece.getType() === "Roi")return false;
                if (piece !== null) return true;
            }
        } 
        else if (xDest === this.x) 
        {
            for (let k = 1; k < Math.abs(yDest - this.y); k++) 
			{
				piece = tabPieces[this.x][this.y + k * dirY];
				if (piece !== null && piece.getType() === "Roi")return false;
                if (piece !== null) return true;
            }
        } 
        else 
        {
            for (let k = 1; k < Math.abs(xDest - this.x); k++) 
			{
				piece = tabPieces[this.x + k * dirX][this.y + k * dirY];
				if (piece !== null && piece.getType() === "Roi")return false;
                if (piece !== null) return true;
            }
        }
        return false;
    }
}