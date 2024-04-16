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
		this.imgPiece.src = "../images/pieces.png"
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

		
		if(this.xDest > this.x) this.x += this.vitesse;
		if(this.xDest < this.x) this.x -= this.vitesse;
		if(this.yDest > this.y) this.y += this.vitesse;
		if(this.yDest < this.y) this.y -= this.vitesse;
		
		
		//if(Math.abs(this.xDest - this.x) < 0.1) this.x = this.xDest;
		//if(Math.abs(this.yDest - this.y) < 0.1) this.y = this.yDest;
		this.x = this.xDest;
		this.y = this.yDest;

		return false
	}

	draw(ctx)
	{
		ctx.drawImage(this.imgPiece, (this.num-1) * 80, 0, 80, 80, this.x*87.5, this.y*87.5, 87.5, 87.5);
	}
}