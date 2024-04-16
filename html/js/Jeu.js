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
		this.finJeu = this.plateau.echecMat(this.tour);
	}

	draw(ctx, ctxBlanc, ctxNoir)
	{
		this.plateau.draw(ctx, ctxBlanc, ctxNoir);
	}

	clickedAt(x, y)
	{
		let piece = this.plateau.tabPieces[x][y];

		if(this.plateau.pieceSelectionnee === piece)
		{
			this.plateau.pieceSelectionnee = null;
		}
<<<<<<< HEAD
		/*
		else if (this.plateau.pieceSelectionnee === null || piece !== null && piece.getCouleur() === this.tour)
=======
		else if (piece !== null && piece.getCouleur() === this.tour)
>>>>>>> ccb27164347eba1c18a97af48b18eb7d30338f6d
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
		*/
		
		

		// mode debuggage (pas de tours)		
<<<<<<< HEAD
		else if (this.plateau.pieceSelectionnee === null || piece !== null && piece.getCouleur() === this.plateau.pieceSelectionnee.getCouleur())
		{
			this.plateau.pieceSelectionnee = piece;
		}
		else if(this.plateau.pieceSelectionnee !== null && this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
		{
			if(piece != null && piece.getCouleur() == "Noir")
			{
				this.plateau.tabPieceNoir.push(piece);
			}else if(piece != null){
				this.plateau.tabPieceBlanche.push(piece);
			}

			this.plateau.deplacementEnCours = true;
			console.log(this.plateau.tabPieceBlanche)
		}
=======
	// 	else if (this.plateau.pieceSelectionnee === null || piece !== null && piece.getCouleur() === this.plateau.pieceSelectionnee.getCouleur())
	// 	{
	// 		this.plateau.pieceSelectionnee = piece;
	// 	}
	// 	else if(this.plateau.pieceSelectionnee !== null && this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
	// 	{
	// 		this.plateau.deplacementEnCours = true;
	// 	}
>>>>>>> ccb27164347eba1c18a97af48b18eb7d30338f6d
	}

	setTour()
	{
		if( this.tour == "Noir" )
			this.tour = "Blanc";
		else 
			this.tour = "Noir";
	}
}