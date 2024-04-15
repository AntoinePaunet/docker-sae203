class Controlleur
{
	constructor()
	{
		this.canva = document.getElementById("plateau");
		this.ctx = this.canva.getContext('2d');
		this.ySouris = 0;
		this.xSouris = 0;
		this.game();
	}


	game()
	{
		while(true)
		{
			this.getClickedZone();
		}
	}



	getClickedZone()
	{
		this.canva.addEventListener('mousedown', function(e)// Permet de lancer une fonction lors d'un clic sur le canvas.
		{
			let rect = canvas.getBoundingClientRect();
    		xSouris = PostionCurseurX(canvas, e);
    		ySouris = PostionCurseurY(canvas, e);
			this.xSouris = e.clientX - rect.left;
			this.ySouris = e.clientY - rect.top;
			console.log("Zone clickée", this.xSouris, this.ySouris);
		})

	}
}


let ctrl = new Controlleur;
