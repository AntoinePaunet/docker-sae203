import Piece from "./Piece.js";


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
    
        if (yDest === this.y) 
        {
            for (let k = 1; k < Math.abs(xDest - this.x); k++) {
                if (tabPieces[this.x + k * dirX][this.y] !== null) return true;
            }
        } 
        else if (xDest === this.x) 
        {
            for (let k = 1; k < Math.abs(yDest - this.y); k++) {
                if (tabPieces[this.x][this.y + k * dirY] !== null) return true;
            }
        } 
        else 
        {
            for (let k = 1; k < Math.abs(xDest - this.x); k++) {
                if (tabPieces[this.x + k * dirX][this.y + k * dirY] !== null) return true;
            }
        }
        return false;
    }
}