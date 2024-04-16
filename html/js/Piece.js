export default class Piece
{
	constructor(num, x, y)
	{
		this.num = num;
		this.x = x;
		this.y = y;
		this.vitesse = 0.2;
		this.xDest = x;
		this.yDest = y;
			
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

		return (1 <= this.num && this.num <= 6) === (1 <= autrePiece.num && autrePiece.num <= 6) ;
	}
	
	getNum () {return this.num;}
	getX   () {return this.x;}
	getY   () {return this.y;}


	deplacer(xDest, yDest, tabPieces)
	{
		if(!this.deplacementValide(xDest, yDest, tabPieces)) return false;
 
		tabPieces[this.x][this.y] = null;
		tabPieces[xDest][yDest] = this;
		this.xDest = xDest;
		this.yDest = yDest;
		return true;
	}

	update()
	{
		if(this.xDest === this.x && this.yDest === this.y) return true;

		console.log(this)
		if(this.xDest > this.x) this.x += this.vitesse;
		if(this.xDest < this.x) this.x -= this.vitesse;
		if(this.yDest > this.y) this.y += this.vitesse;
		if(this.yDest < this.y) this.y -= this.vitesse;

		this.x = Math.round(this.x * 100) / 100;
		this.y = Math.round(this.y * 100) / 100;

		return false
	}

	draw(ctx)
	{
		ctx.drawImage(this.imgPiece, (this.num-1) * 80, 0, 80, 80, this.x*87.5, this.y*87.5, 87.5, 87.5);
	}
}