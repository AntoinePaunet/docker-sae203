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
		this.start()
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