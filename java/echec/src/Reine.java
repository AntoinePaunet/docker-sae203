package echec.src;

public class Reine extends Piece
{
    public Reine(int num, int x, int y) {super(num, x, y);}

    public boolean deplacementValide(int xDest,int yDest, Piece[][] tabPieces)
    {
        return    super.deplacementValide(xDest, yDest, tabPieces) 
		       && (Math.abs(xDest-this.x) == Math.abs(yDest-this.y) || xDest==this.x || yDest==this.y)
               && !this.autrePiece(xDest, yDest, tabPieces);
    }

    private boolean autrePiece(int xDest,int yDest, Piece[][] tabPieces) 
    {
        int dirX = 1;
        int dirY = 1;
        if (this.x > xDest) dirX = -1;
        if (this.y > yDest) dirY = -1;
    
		Piece piece = null;
        if (yDest == this.y) 
        {
            for (int k = 1; k < Math.abs(xDest - this.x); k++) 
			{
				piece = tabPieces[this.x + k * dirX][this.y];
				if (piece != null && "Roi".equals(piece.getType()) && piece.getCouleur() != this.getCouleur())return false;
                if (piece != null) return true;
            }
        } 
        else if (xDest == this.x) 
        {
            for (int k = 1; k < Math.abs(yDest - this.y); k++) 
			{
				piece = tabPieces[this.x][this.y + k * dirY];
				if (piece != null && "Roi".equals(piece.getType()) && piece.getCouleur() != this.getCouleur())return false;
                if (piece != null) return true;
            }
        } 
        else 
        {
            for (int k = 1; k < Math.abs(xDest - this.x); k++) 
			{
				piece = tabPieces[this.x + k * dirX][this.y + k * dirY];
				if (piece != null && "Roi".equals(piece.getType()) && piece.getCouleur() != this.getCouleur())return false;
                if (piece != null) return true;
            }
        }
        return false;
    }
}
