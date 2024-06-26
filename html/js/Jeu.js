import Plateau from "./Plateau.js";
import Piece from "./Piece.js";

export default class Jeu
{
	constructor()
	{
		this.tpsBlanc = 600;
		this.tpsNoir = 600;
		this.tour = "Blanc";
		this.plateau = new Plateau(this);
	}

	update()
	{
		this.plateau.update();
	}

	draw(ctx, ctxBlanc, ctxNoir)
	{
		this.plateau.draw(ctx, ctxBlanc, ctxNoir);
	}

	clickedAt(x, y)
	{
		if(this.plateau.deplacementEnCours) return false;

		let piece = this.plateau.tabPieces[x][y];

		if(this.plateau.pieceSelectionnee === piece)
		{
			this.plateau.pieceSelectionnee = null;
		}
		else if (piece !== null && piece.getCouleur() === this.tour)
		{
			this.plateau.pieceSelectionnee = piece;
		}
		else if (this.plateau.pieceSelectionnee !== null && this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
		{
			this.plateau.deplacementEnCours = true;
			if(piece != null && piece.getCouleur() == "Noir")
			{
				this.plateau.tabPieceNoir.push(piece);
			}else if(piece != null){
				this.plateau.tabPieceBlanche.push(piece);
			}
		}
		
	}

	setTour()
	{
		if( this.tour == "Noir" )
			this.tour = "Blanc";
		else 
			this.tour = "Noir";
	}
}