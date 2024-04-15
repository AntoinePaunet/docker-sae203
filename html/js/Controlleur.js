import Plateau from "./Plateau.js";
import Jeu from "./Jeu.js";
import Interface from "./Interface.js";

export default class Controlleur
{
	constructor(canva)
	{
		this.canva = canva;
		this.ctx = this.canva.getContext('2d');
		this.plateau = new Plateau();
		this.interface = new Interface(this.ctx, this.plateau.plateau, this.plateau);
		this.jeu = new Jeu();
		this.tabPiece = [];
		this.ySouris = 0;
		this.xSouris = 0;
		this.start();
	}

	clickedAt(x, y)
	{
		let piece = this.plateau.getPiece(x, y);

		if(piece.selectionner)
		{
			piece.selectionner = false;
			return;
		}

		if( piece != null )
		{

			for(let i = 0 ; i < this.plateau.tabPieces.length ; i++)
			{
				if(this.plateau.tabPieces[i].selectionner)
				{
					this.plateau.tabPieces[i].selectionner = false;
				}
			}

			piece.selectionner = !piece.selectionner; //On remet la piece dans sa forme inverse
		}
	}


	start()
	{
		setInterval(this.interface.drawMap(), 16.67);
	}

	selectPiece(xSouris, ySouris)
	{
		this.jeu.deplacer(xSouris, ySouris)
	}

}