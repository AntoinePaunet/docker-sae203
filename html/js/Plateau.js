import Pion from "./Pion.js";
import Tour from "./Tour.js";
import Cavalier from "./Cavalier.js";
import Reine from "./Reine.js";
import Roi from "./Roi.js";
import Fou from "./Fou.js";

export default class Plateau
{
	constructor(jeu)
	{
		this.jeu = jeu;
		/*
		this.initPlateau = [[ 8,  9, 10, 11, 12, 10,  9,  8],
		                    [ 7,  7,  7,  7,  7,  7,  7,  7],
		                    [ 0,  0,  0,  0,  0,  0,  0,  0],
		                    [ 0,  0,  0,  0,  0,  0,  0,  0],
		                    [ 0,  0,  0,  0,  0,  0,  0,  0],
		                    [ 0,  0,  0,  0,  0,  0,  0,  0],
							[ 1,  1,  1,  1,  1,  1,  1,  1],
							[ 2,  3,  4,  5,  6,  4,  3,  2]];*/
		this.initPlateau = [[ 8,  7,  0,  0,  0,  0,  1,  2],
		                    [ 9,  7,  0,  0,  0,  0,  1,  3],
		                    [10,  7,  0,  0,  0,  0,  1,  4],
		                    [11,  7,  0,  0,  0,  0,  1,  5],
		                    [12,  7,  0,  0,  0,  0,  1,  6],
		                    [10,  7,  0,  0,  0,  0,  1,  4],
							[ 9,  7,  0,  0,  0,  0,  1,  3],
							[ 8,  7,  0,  0,  0,  0,  1,  2]];

		this.roiNoir = null;
		this.roiBlanc = null;
		this.tabPieces = [];
		this.genererTabPieces();
		this.deplacementEnCours = false;
		this.pieceSelectionnee = null;
		this.tabPieceBlanche = [];
		this.tabPieceNoir = [];

		this.bg = new Image();
		this.bg.src = "../images/plateau.png";
	}

	genererTabPieces()
	{
		for( let i = 0 ; i < this.initPlateau.length ; i++ )
		{
			let tmp = [];
			for ( let j = 0 ; j < this.initPlateau[0].length ; j++)
			{
				if(this.initPlateau[i][j] !== 0)
				{
					let typePiece = this.initPlateau[i][j];
					if(typePiece > 6) typePiece = typePiece - 6;
					switch(typePiece)
					{
						case 1  : tmp[j] = new Pion     (this.initPlateau[i][j], i, j); break;
						case 2  : tmp[j] = new Tour     (this.initPlateau[i][j], i, j); break;
						case 3  : tmp[j] = new Cavalier (this.initPlateau[i][j], i, j); break;
						case 4  : tmp[j] = new Fou      (this.initPlateau[i][j], i, j); break;
						case 5  : tmp[j] = new Reine    (this.initPlateau[i][j], i, j); break;
						case 6  : 
							tmp[j] = new Roi      (this.initPlateau[i][j], i, j); 
							if(this.initPlateau[i][j] === 6)  this.roiBlanc = tmp[j];
							if(this.initPlateau[i][j] === 12) this.roiNoir  = tmp[j];
							break;
						default : tmp[j] = null; break;
					}
				}
				else tmp[j] = null;
			}
			this.tabPieces.push(tmp);
		}
	}

	echecEtMat(tour)
	{
		let roi = this.roiBlanc;
		if(tour === "Blanc") roi = this.roiNoir;

		return roi.echecEtMat(this.tabPieces);
	}


	update()
	{
		if(this.pieceSelectionnee !== null && this.deplacementEnCours) 
			if(this.pieceSelectionnee.update())
			{ 
				this.pieceSelectionnee = null;
				this.deplacementEnCours = false;
				this.jeu.setTour();
			}
	}

	draw(ctx, ctxBlanc, ctxNoir)
	{
		ctx.drawImage(this.bg, 0, 0);

		for( let i = 0 ; i < this.tabPieces.length ; i++ )
		{	
			for ( let j = 0 ; j < this.tabPieces[0].length ; j++)
			{
				if(!this.deplacementEnCours && this.pieceSelectionnee !== null && this.pieceSelectionnee.deplacementValide(i, j, this.tabPieces))
					this.#drawCercle(ctx, i, j, 'red');
				if(!this.deplacementEnCours && this.tabPieces[i][j] !== null && this.tabPieces[i][j] === this.pieceSelectionnee)
					this.#drawCercle(ctx, i, j, 'green');
				if(this.tabPieces[i][j] !== null) 
					this.tabPieces[i][j].draw(ctx);
			}
		}

		let j = -20;
		let v = 0;
		for(let i = 0 ; i < this.tabPieceBlanche.length ; i++)
		{
			v = i;
			if(i >= 8)
			{
				j = 40;
				v = i - 8;
			}
			ctxBlanc.drawImage(this.tabPieceBlanche[i].imgPiece, (this.tabPieceBlanche[i].num-1) * 80, 0, 80, 80, j, v*87.5, 87.5, 87.5);
		}

		for(let i = 0 ; i < this.tabPieceNoir.length ; i++)
		{
			v = i;
			if(i == 8)
			{
				j = 40;
				v = i - 8;
			}
			ctxNoir.drawImage(this.tabPieceNoir[i].imgPiece, (this.tabPieceNoir[i].num-1) * 80, 0, 80, 80, j, v*87.5, 87.5, 87.5);
		}
	}

	#drawCercle(ctx, x, y, couleur)
	{
		ctx.beginPath();
		ctx.arc(x * 87.5 + 42.5, y * 87.5 + 42.5, 40, 0, Math.PI * 2);
		ctx.fillStyle = couleur;
		ctx.fill();
		ctx.closePath();
	}
}

