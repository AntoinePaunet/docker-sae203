package echec.src;

public class Pion extends Piece
{
	private int xOrg;
	private int yOrg;
	
	public Pion (int num, int x, int y) 
	{
		super(num, x, y); 
		this.xOrg = x; 
		this.yOrg = y;
	}

	public boolean deplacementValide(int xDest, int yDest, Piece[][] tabPieces)
	{
		return super.deplacementValide(xDest, yDest, tabPieces) && 
			((yDest == this.y + 1 && xDest == this.x && this.num >= 7 && tabPieces[xDest][yDest] == null) 
		|| (yDest == this.y + 2 && xDest == this.x && this.num >= 7 && this.xOrg == this.x && this. yOrg == this.y && tabPieces[xDest][yDest] == null))
		|| ((yDest == this.y - 1 && xDest == this.x && this.num < 7 && tabPieces[xDest][yDest] == null) 
		|| (yDest == this.y - 2 && xDest == this.x && this.num < 7 && this.xOrg == this.x && this. yOrg == this.y && tabPieces[xDest][yDest] == null))
		|| (xDest == this.x + 1 && yDest == this.y + 1 && this.num >= 7 && (tabPieces[this.x+1][this.y+1] != null && tabPieces[this.x+1][this.y+1].getNum() < 7))
		|| (xDest == this.x - 1 && yDest == this.y + 1 && this.num >= 7 && (tabPieces[this.x-1][this.y+1] != null && tabPieces[this.x-1][this.y+1].getNum() < 7))
		|| (xDest == this.x + 1 && yDest == this.y - 1 && this.num < 7 && (tabPieces[this.x+1][this.y-1] != null && tabPieces[this.x+1][this.y-1].getNum() >= 7))
		|| (xDest == this.x - 1 && yDest == this.y - 1 && this.num < 7 && (tabPieces[this.x-1][this.y-1] != null && tabPieces[this.x-1][this.y-1].getNum() >= 7));

	}
}
