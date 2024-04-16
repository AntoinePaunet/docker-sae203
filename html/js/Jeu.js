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
		//console.log(this.tour);
		this.plateau.update();
		this.finJeu = this.plateau.echecEtMat(this.tour);
	}

	draw(ctx)
	{
		this.plateau.draw(ctx);
	}

	clickedAt(x, y)
	{
		let piece = this.plateau.tabPieces[x][y];
		
		if(this.plateau.pieceSelectionnee === piece)
		{
			this.plateau.pieceSelectionnee = null;
		}
		/*
		else if (this.plateau.pieceSelectionnee === null || piece !== null && piece.getCouleur() === this.tour)
		{
			this.plateau.pieceSelectionnee = piece;
		}
		else if (this.plateau.pieceSelectionnee !== null && this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
		{
			this.plateau.deplacementEnCours = true;
		}
		*/
		

		// mode debuggage (pas de tours)		
		else if (this.plateau.pieceSelectionnee === null || piece !== null && piece.getCouleur() === this.plateau.pieceSelectionnee.getCouleur())
		{
			this.plateau.pieceSelectionnee = piece;
		}
		else if(this.plateau.pieceSelectionnee !== null && this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
		{
			this.plateau.deplacementEnCours = true;
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