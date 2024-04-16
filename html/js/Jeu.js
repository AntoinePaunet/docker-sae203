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
	}

	update()
	{
		this.plateau.update();
	}

	draw(ctx)
	{
		this.plateau.draw(ctx);
	}

	clickedAt(x, y)
	{
		if(this.plateau.pieceSelectionnee == this.plateau.tabPieces[x][y])
		{
			console.log(this.plateau.pieceSelectionnee == this.plateau.tabPieces[x][y])
			this.plateau.pieceSelectionnee = null;
			return;
		}

		if(this.plateau.pieceSelectionnee !== null && this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
		{
			this.plateau.deplacementEnCours = true;
		}
		else
		{
			this.plateau.pieceSelectionnee = this.plateau.tabPieces[x][y];
		}
		

		/*
		if(this.plateau.pieceSelectionnee === null)
			this.plateau.pieceSelectionnee = this.plateau.tabPieces[x][y];
		else if (this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
			this.plateau.deplacementEnCours = true;
		*/
		/*
		if(this.plateau.pieceSelectionnee === null || !this.plateau.pieceSelectionnee.deplacer(x, y, this.plateau.tabPieces))
			this.plateau.pieceSelectionnee = this.plateau.tabPieces[x][y];
		else
		{
			this.plateau.deplacementEnCours = true;
		}
		*/
	}

	tempsTour()
	{
		if( this.tour === "Noir" )
		{
			while( this.tour === "Noir" )
			{
				this.tpsNoir--;
				setTimeout(1000);
			}
		}
		else
		{
			while( this.tour === "Blanc" )
			{
				this.tpsBlanc--;
				setTimeout(1000);
			}
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