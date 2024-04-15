class Controlleur
{
	constructor(canva, plateau, jeu)
	{
		this.canva = canva;
		this.ctx = this.canva.getContext('2d');
		this.plateau = plateau;
		this.jeu = jeu;
		this.ySouris = 0;
		this.xSouris = 0;
	}

	selectPiece(xSouris, ySouris)
	{

	}

}

//Démarrage du jeu

let canva = document.getElementById("plateau");
let plateau = new Plateau();


let ctrl = new Controlleur(canva, new Plateau, new Jeu);



canva.addEventListener('mousedown', function(e)// Permet de lancer une fonction lors d'un clic sur le canvas.
{
	let rect = canva.getBoundingClientRect();
	ctrl.xSouris = e.clientX - rect.left;
	ctrl.ySouris = e.clientY - rect.top;
	console.log("Zone clickée", this.xSouris, this.ySouris);
})