import Plateau from "./Plateau.js";
import Piece from "./Piece.js";

export default class Jeu
{
	constructor()
	{
		this.plateau = new Plateau();
		this.tpsBlanc = 600;
		this.tpsNoir = 600;
		this.tour = "Blanc";
		this.finJeu = false;
	}

	update(timeStamp)
	{
		this.plateau.update();
		this.finJeu = this.plateau.echecEtMat(this.tour);
	}

	draw(ctx)
	{
		this.plateau.draw(ctx);
	}

	clickedAt(x, y)
	{
		let piece = this.plateau.tabPieces[x][y]

		if(piece !== null && ((piece.getNum() < 7 && this.tour == "Noir") || (piece.getNum() > 6 && this.tour == "blanc")))
		{
			return false;
		}

		
		if(this.plateau.pieceSelectionnee === piece)
		{
			this.plateau.pieceSelectionnee = null;
			return;
		}

		if(this.plateau.pieceSelectionnee !== null && this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
		{
			this.plateau.deplacementEnCours = true;
		}
		else
		{
			this.plateau.pieceSelectionnee = piece;
		}
	}

	getTour()
	{
		return this.tour;
	}


	setTour()
	{
		if( this.tour == "Noir" )
			this.tour == "Blanc";
		else 
			this.tour = "Noir";
	}
}