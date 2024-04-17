package echec.src;

public class Roi extends Piece
{
	public Roi(int num,int x,int y) {super(num, x, y);}

    public boolean deplacementValide(int xDest,int yDest, Piece[][] tabPieces)
    {	
		return    super.deplacementValide(xDest, yDest, tabPieces) 
		       && Math.abs(xDest-this.x) <= 1 
			   && Math.abs(yDest-this.y) <= 1;
    }
}
