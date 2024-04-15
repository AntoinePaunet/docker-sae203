import Controlleur from "./Controlleur.js";


let canva = document.getElementById("plateau");

let ctrl = new Controlleur(canva);

canva.addEventListener('mousedown', function(e)// Permet de lancer une fonction lors d'un clic sur le canvas.
{
	let rect = canva.getBoundingClientRect();
	ctrl.xSouris = e.clientX - rect.left;
	ctrl.ySouris = e.clientY - rect.top;
	console.log("Zone clickée", this.xSouris, this.ySouris);
})


window.addEventListener('load',function(){
    function animate(){

        ctrl.interface.drawMap();

        requestAnimationFrame(animate);
    }
    animate();
});