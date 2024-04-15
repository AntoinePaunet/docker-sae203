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

/*
canva.addEventListener('load',function(){
    const ctx = canva.getContext("2d");

    let lastTime = 0
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

		ctrl.update();
        ctrl.draw(ctx);

        requestAnimationFrame(animate);
    }
    animate(0);
});
*/