package echec.src;

import java.awt.*;
import java.awt.event.*;

public class GereSouris extends MouseAdapter
{
	private PanelEchec panelEchec;
	private int x, y;
	
	public GereSouris(PanelEchec panelEchec)
	{
		this.panelEchec = panelEchec;
		this.x = this.y = -1;
	}

	public void mouseClicked(MouseEvent e)
	{
		this.x = (int)(e.getX() / 80);
		this.y = (int)(e.getY() / 80);

		this.clickedAt(this.x, this.y);
	}

	public boolean clickedAt(int x, int y)
	{
		if(x > 8 || y > 8 || x < 0 || y < 0) return false; 
		System.out.println(x+" "+y);

		Piece piece = this.panelEchec.getPlateau().getTabPieces()[x][y];

		if(this.panelEchec.getPlateau().getPieceSelectionnee() == piece)
		{
			this.panelEchec.getPlateau().setPieceSelectionnee(null);
		}
		else if (piece != null && this.panelEchec.getTour().equals(piece.getCouleur()))
		{
			this.panelEchec.getPlateau().setPieceSelectionnee(piece);
		}
		else if (this.panelEchec.getPlateau().getPieceSelectionnee() != null && this.panelEchec.getPlateau().getPieceSelectionnee().deplacer(x, y, this.panelEchec.getPlateau().getTabPieces()))
		{
			this.panelEchec.getPlateau().setDeplacementEnCours(true);
			if(piece != null && "Noir".equals(piece.getCouleur()))
			{
				this.panelEchec.getPlateau().pushTabPiecesNoires(piece);
			}else if(piece != null){
				this.panelEchec.getPlateau().pushTabPiecesBlanches(piece);
			}
		}
		
		this.x = this.y = -1;

		return true;
	}

	public int getX() {return this.x;}
	public int getY() {return this.y;}
}

