package echec.src;

public class Cavalier extends Piece 
{
	public Cavalier (int num, int x, int y) {super(num, x, y);}

	public boolean deplacementValide(int xDest, int yDest, Piece[][] tabPieces) 
	{
		return super.deplacementValide(xDest, yDest, tabPieces)
			&& ((Math.abs(xDest-this.x) == 2 && Math.abs(yDest-this.y) == 1) 
			||  (Math.abs(xDest-this.x) == 1 && Math.abs(yDest-this.y) == 2));
	}
}
