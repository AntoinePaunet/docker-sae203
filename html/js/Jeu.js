import Plateau from "./Plateau.js";
import Piece from "./Piece.js";

export default class Jeu
{
	constructor()
	{
		this.tpsBlanc = 600;
		this.tpsNoir = 600;
		this.tour = "Blanc";
		this.finJeu = false;
		this.plateau = new Plateau(this);
	}

	update()
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

		// if(piece != null && ((piece.getNum() < 7 && this.tour == "Noir") || (piece.getNum() > 6 && this.tour == "Blanc")))
		// {
		// 	console.log(false)
		// 	return false;
		// }
		if(this.plateau.pieceSelectionnee == null && piece == null)
		{
			return;
		}

		if(this.plateau.pieceSelectionnee === piece)
		{
			this.plateau.pieceSelectionnee = null;
			return;
		}


		this.plateau.pieceSelectionnee = piece;

		if(this.plateau.pieceSelectionnee.num < 7 && this.tour == "Noir" || this.plateau.pieceSelectionnee.num > 6 && this.tour == "Blanc")
		{
			return;
		}

		if(piece != null && this.plateau.pieceSelectionnee.num % 7 == piece.num % 7)
		{
			return;
		}

	
		if(this.plateau.pieceSelectionnee !== null && this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
		{
			this.plateau.deplacementEnCours = true;
			this.setTour();
			return;
		}
	}

	getTour()
	{
		return this.tour;
	}


	setTour()
	{
		if( this.tour == "Noir" )
			this.tour = "Blanc";
		else 
			this.tour = "Noir";
	}
}