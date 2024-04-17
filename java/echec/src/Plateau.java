package echec.src;

import java.awt.image.BufferedImage;
import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Graphics2D;
import java.io.IOException;
import javax.imageio.ImageIO;

public class Plateau 
{	
	private PanelEchec panelJeu;
	private Roi roiNoir;
	private Roi roiBlanc;
	private Piece[][] tabPieces = new Piece[8][8];
	private boolean deplacementEnCours = false;
	private Piece pieceSelectionnee;
	private Piece[] tabPiecesBlanches;
	private Piece[] tabPiecesNoires;
	private int nbTabPiecesBlanches, nbTabPiecesNoires;

	private BufferedImage imgBg;
	private String imgBgSrc;

	public Plateau(PanelEchec panelJeu)
	{
		this.panelJeu = panelJeu;
		this.roiNoir = null;
		this.roiBlanc = null;
		this.tabPieces = new Piece[8][8];
		this.deplacementEnCours = false;
		this.pieceSelectionnee = null;
		this.tabPiecesBlanches = new Piece[20];
		this.tabPiecesNoires = new Piece[20];
		this.nbTabPiecesBlanches = this.nbTabPiecesNoires = 0;

		this.imgBgSrc = "../res/plateau.png";

		int[][] initPlateau =  new int[][]{ { 8,  7,  0,  0,  0,  0,  1,  2},
			{ 9,  7,  0,  0,  0,  0,  1,  3},
			{10,  7,  0,  0,  0,  0,  1,  4},
			{11,  7,  0,  0,  0,  0,  1,  5},
			{12,  7,  0,  0,  0,  0,  1,  6},
			{10,  7,  0,  0,  0,  0,  1,  4},
			{ 9,  7,  0,  0,  0,  0,  1,  3},
			{ 8,  7,  0,  0,  0,  0,  1,  2}};

		this.genererTabPieces(initPlateau);
		this.getImgBg();
	}

	private void genererTabPieces(int[][] initPlateau)
	{
		for(int i = 0 ; i < initPlateau.length ; i++ )
		{
			for (int j = 0 ; j < initPlateau[0].length ; j++)
			{
				if(initPlateau[i][j] != 0)
				{
					int typePiece = initPlateau[i][j];
					if(typePiece > 6) typePiece = typePiece - 6;
					switch(typePiece)
					{
						case 1  : this.tabPieces[i][j] = new Pion     (initPlateau[i][j], i, j); break;
						case 2  : this.tabPieces[i][j] = new Tour     (initPlateau[i][j], i, j); break;
						case 3  : this.tabPieces[i][j] = new Cavalier (initPlateau[i][j], i, j); break;
						case 4  : this.tabPieces[i][j] = new Fou      (initPlateau[i][j], i, j); break;
						case 5  : this.tabPieces[i][j] = new Reine    (initPlateau[i][j], i, j); break;
						case 6  : 
							this.tabPieces[i][j] = new Roi (initPlateau[i][j], i, j); 
							if(initPlateau[i][j] == 6)  this.roiBlanc = (Roi)this.tabPieces[i][j];
							if(initPlateau[i][j] == 12) this.roiNoir  = (Roi)this.tabPieces[i][j];
							break;
						default : tabPieces[i][j] = null; break;
					}
				}
				else tabPieces[i][j] = null;
			}
		}
	}

	private void getImgBg(){
        try {
            this.imgBg = ImageIO.read(getClass().getResourceAsStream(this.imgBgSrc));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

	public void update()
	{
		//System.out.println(this.pieceSelectionnee);
		if(this.pieceSelectionnee != null && this.deplacementEnCours) 
			if(this.pieceSelectionnee.update())
			{ 
				this.pieceSelectionnee = null;
				this.deplacementEnCours = false;
				this.panelJeu.setTour();
			}
	}

	public void draw(Graphics2D g2)
	{
		g2.drawImage(this.imgBg, 0, 0, 640, 640, 0, 0, 700, 700, null);

		for( int i = 0 ; i < this.tabPieces.length ; i++ )
		{	
			for ( int j = 0 ; j < this.tabPieces[0].length ; j++)
			{
				if(!this.deplacementEnCours && this.pieceSelectionnee != null && this.pieceSelectionnee.deplacementValide(i, j, this.tabPieces))
					this.drawCercle(g2, i, j, Color.RED);
				if(!this.deplacementEnCours && this.tabPieces[i][j] != null && this.tabPieces[i][j] == this.pieceSelectionnee)
					this.drawCercle(g2, i, j, Color.GREEN);
				if(this.tabPieces[i][j] != null) 
					this.tabPieces[i][j].draw(g2);
			}
		}

		/*
		int j = -20;
		int v = 0;
		for(int i = 0 ; i < this.tabPiecesBlanches.length ; i++)
		{
			v = i;
			if(i >= 8)
			{
				j = 40;
				v = i - 8;
			}
			ctxBlanc.drawImage(this.tabPiecesBlanches[i].imgPiece, (this.tabPiecesBlanches[i].num-1) * 80, 0, 80, 80, j, v*87.5, 87.5, 87.5);
		}

		for(int i = 0 ; i < this.tabPieceNoir.length ; i++)
		{
			v = i;
			if(i >= 8)
			{
				j = 40;
				v = i - 8;
			}
			ctxNoir.drawImage(this.tabPieceNoir[i].imgPiece, (this.tabPieceNoir[i].num-1) * 80, 0, 80, 80, j, v*87.5, 87.5, 87.5);
		}
		*/
	}

	private void drawCercle(Graphics2D g2,int x, int y, Color color)
	{
        g2.setColor(color); 
        g2.fillOval(x*80,y*80, 80,80);
	}

	public boolean getDeplacementEnCours() {return this.deplacementEnCours;}
	public Piece[][] getTabPieces() {return this.tabPieces;}
	public Piece[] getTabPiecesBlanches() {return this.tabPiecesBlanches;}
	public Piece[] getTabPiecesNoires() {return this.tabPiecesNoires;}
	public Piece getPieceSelectionnee() {return this.pieceSelectionnee;}
	
	public void setPieceSelectionnee(Piece pieceSelectionnee) 
	{	
		this.pieceSelectionnee = pieceSelectionnee;
	}

	public void setDeplacementEnCours(boolean b)
	{
		this.deplacementEnCours = b;
	}

	public void pushTabPiecesBlanches(Piece p)
	{
		this.tabPiecesBlanches[this.nbTabPiecesBlanches++] = p;
	}

	public void pushTabPiecesNoires(Piece p)
	{
		this.tabPiecesNoires[this.nbTabPiecesNoires++] = p;
	}
}
	
	
