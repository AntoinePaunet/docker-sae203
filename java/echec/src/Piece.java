package echec.src;

import java.awt.image.BufferedImage;
import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Graphics2D;
import java.io.IOException;
import javax.imageio.ImageIO;

public class Piece
{
	protected int num, x, y, xImg, yImg;
	private double vitesse;

	private BufferedImage imgPieces;
	private String imgPiecesSrc;
	
	public Piece(int num, int x, int y)
	{
		this.num = num;
		this.x = x;
		this.y = y;
		this.vitesse = 1;
		this.xImg = x;
		this.yImg = y;
		
		this.imgPiecesSrc = "../res/pieces.png";
		this.getImgPieces();
    }

	private void getImgPieces(){
        try {
            this.imgPieces = ImageIO.read(getClass().getResourceAsStream(this.imgPiecesSrc));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

	public boolean deplacementValide(int xDest,int yDest,Piece[][] tabPieces) 
	{
		return    !(xDest == this.x && yDest == this.y)
		       && !this.estMemeCouleur(tabPieces[xDest][yDest]);
	}

	public boolean estMemeCouleur(Piece autrePiece)
	{
		if(autrePiece == null) return false;

		return this.getCouleur().equals(autrePiece.getCouleur());
	}

	public String getCouleur()
	{
		if (1 <= this.num && this.num <= 6)  return "Blanc";
		if (7 <= this.num && this.num <= 12) return "Noir";
		return "";
	}

	public String getType()
	{
		String retour = "";
		
		int typePiece = this.num;
		if(typePiece > 6) typePiece -= 6;
		switch(typePiece)
		{
			case 1  : retour = "Pion";     break;
			case 2  : retour = "Tour";     break;
			case 3  : retour = "Cavalier"; break;
			case 4  : retour = "Fou";      break;
			case 5  : retour = "Reine";    break;
			case 6  : retour = "Roi";      break;
		}

		return retour;
	}

	public int getNum () {return this.num;}
	public int getX   () {return this.x;}
	public int getY   () {return this.y;}


	public boolean deplacer(int xDest,int yDest,Piece[][] tabPieces)
	{
		if(!this.deplacementValide(xDest, yDest, tabPieces)) return false;
 
		tabPieces[this.x][this.y] = null;
		tabPieces[xDest][yDest] = this;
		this.x = xDest;
		this.y = yDest;
		return true;
	}

	public boolean update()
	{
		System.out.println(this.xImg+" "+this.x+" "+this.yImg+" "+this.y);
		if(this.xImg == this.x && this.yImg == this.y) return true;

		if(this.x > this.xImg) this.xImg += this.vitesse;
		if(this.x < this.xImg) this.xImg -= this.vitesse;
		if(this.y > this.yImg) this.yImg += this.vitesse;
		if(this.y < this.yImg) this.yImg -= this.vitesse;

		//this.xImg = Math.round(this.xImg * 100) / 100;
		//this.yImg = Math.round(this.yImg * 100) / 100;

		return false;
	}

	public void draw(Graphics2D g2)
	{
		g2.setStroke(new BasicStroke(2));
		g2.setColor(Color.MAGENTA);
		g2.drawImage(this.imgPieces, this.xImg*80, this.yImg*80, this.xImg*80+80, this.yImg*80+80, (this.num-1)*80, 0, (this.num-1)*80+80, 80, null);
	}
}