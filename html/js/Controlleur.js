class Controlleur
{
	constructor()
	{
		this.canva = document.getElementById("plateau");
		this.ctx = this.canva.getContext('2d');
		this.ySouris = 0;
		this.xSouris = 0;
	}


	getClickedZone()
	{
		let rect = canvas.getBoundingClientRect();

		this.canva.addEventListener('mousedown', function(e)// Permet de lancer une fonction lors d'un clic sur le canvas.
		{
    		xSouris = PostionCurseurX(canvas, e)
    		ySouris = PostionCurseurY(canvas, e)
			this.xSouris = e.clientX - rect.left;
			this.ySouris = e.clientY - rect.top;
		})

	}
}