export default class Piece
{
	constructor(num, x, y)
	{
		this.num = num;
		this.x = x;
		this.y = y;
		this.vitesse = 0.2;
		this.xImg = x;
		this.yImg = y;
		
		this.imgPiece = new Image();
		this.imgPiece.src = "../images/pieces.png";
    }

	deplacementValide(xDest, yDest, tabPieces) 
	{
		return    !(xDest === this.x && yDest === this.y)
		       && !this.estMemeCouleur(tabPieces[xDest][yDest]);
	}

	estMemeCouleur(autrePiece)
	{
		if(autrePiece === null) return false;

		return this.getCouleur() === autrePiece.getCouleur();
	}

	getCouleur()
	{
		if (1 <= this.num && this.num <= 6)  return "Blanc";
		if (7 <= this.num && this.num <= 12) return "Noir";
		return "";
	}

	getType()
	{
		let retour = ""
		
		let typePiece = this.num;
		if(typePiece > 6) typePiece -= 6;
		switch(typePiece)
		{
			case 1  : retour = "Pion";     break;
			case 2  : retour = "Tour";     break;
			case 3  : retour = "Cavalier"; break;
			case 4  : retour = "Fou";      break;
			case 5  : retour = "Reine";    break;
			case 6  : retour = "Roi";      break;
		}

		return retour;
	}

	getNum () {return this.num;}
	getX   () {return this.x;}
	getY   () {return this.y;}


	deplacer(xDest, yDest, tabPieces)
	{
		if(!this.deplacementValide(xDest, yDest, tabPieces)) return false;
 
		tabPieces[this.x][this.y] = null;
		tabPieces[xDest][yDest] = this;
		this.x = xDest;
		this.y = yDest;
		return true;
	}

	update()
	{
		if(this.xImg === this.x && this.yImg === this.y) return true;

		if(this.x > this.xImg) this.xImg += this.vitesse;
		if(this.x < this.xImg) this.xImg -= this.vitesse;
		if(this.y > this.yImg) this.yImg += this.vitesse;
		if(this.y < this.yImg) this.yImg -= this.vitesse;

		this.xImg = Math.round(this.xImg * 100) / 100;
		this.yImg = Math.round(this.yImg * 100) / 100;

		return false
	}

	draw(ctx)
	{
		ctx.drawImage(this.imgPiece, (this.num-1) * 80, 0, 80, 80, this.xImg*87.5, this.yImg*87.5, 87.5, 87.5);
	}
}