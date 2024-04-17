package echec.src;

public class Fou extends Piece 
{
	
	public Fou(int num, int x, int y) {super(num, x, y);}

	public boolean deplacementValide(int xDest,int yDest,Piece[][] tabPieces) 
	{
		return    super.deplacementValide(xDest, yDest, tabPieces) 
		       && Math.abs(xDest-this.x) == Math.abs(yDest-this.y)
			   && !this.autrePiece(xDest, yDest, tabPieces);

	}

	private boolean autrePiece(int xDest,int yDest,Piece[][] tabPieces)
	{
		int dirX = 1;
		int dirY = 1;
		if(this.x > xDest) dirX = -1;
		if(this.y > yDest) dirY = -1;

		Piece piece = null;
		for(int k = 1; k < Math.abs(xDest-this.x); k++)
		{
			piece = tabPieces[this.x+k*dirX][this.y+k*dirY];
			if (piece != null && "Roi".equals(piece.getType()) && piece.getCouleur().equals(this.getCouleur()))return false;
			if (piece != null) return true;
		}
		return false;
	}
}
