import Controlleur from "./Controlleur.js";


let canva = document.getElementById("plateau");

let ctrl = new Controlleur(canva);

canva.addEventListener('mousedown', function(e)// Permet de lancer une fonction lors d'un clic sur le canvas.
{
	let rect = canva.getBoundingClientRect();
	let x = e.clientX - rect.left;
	let y = e.clientY - rect.top;

    ctrl.clickedAt(Math.floor(x / 87.5), Math.floor(y / 87.5));
})


window.addEventListener('load',function(){
    function animate(){

        ctrl.interface.drawMap();

        requestAnimationFrame(animate);
    }
    animate();
});