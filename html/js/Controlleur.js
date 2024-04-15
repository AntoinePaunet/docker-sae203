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
		this.interface = new Interface(this.ctx, this.plateau.plateau);
		this.jeu = new Jeu();
		this.ySouris = 0;
		this.xSouris = 0;
		setInterval(this.interface.drawMap(), 16.67);
	}

	selectPiece(xSouris, ySouris)
	{
		this.jeu.deplacer(xSouris, ySouris)
	}

}

/*
let canva = document.getElementById("plateau");

let ctrl = new Controlleur(canva);

canva.addEventListener('mousedown', function(e)// Permet de lancer une fonction lors d'un clic sur le canvas.
{
	let rect = canva.getBoundingClientRect();
	ctrl.xSouris = e.clientX - rect.left;
	ctrl.ySouris = e.clientY - rect.top;
	console.log("Zone clickée", this.xSouris, this.ySouris);
})
*/