import Jeu from "./Jeu.js";


let canva = document.getElementById("plateau");

let jeu = new Jeu();

canva.addEventListener('mousedown', function(e)// Permet de lancer une fonction lors d'un clic sur le canvas.
{
	let rect = canva.getBoundingClientRect();
	let x = e.clientX - rect.left;
	let y = e.clientY - rect.top;

    jeu.clickedAt(Math.floor(x / 87.5), Math.floor(y / 87.5));
})


window.addEventListener('load',function(){
    const ctx = canva.getContext("2d");

	let lastTime = 0
	function animate(timeStamp){
		const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
		console.log(timeStamp);

		jeu.update(timeStamp)
        jeu.draw(ctx);

        requestAnimationFrame(animate);
    }
    animate(0);
});