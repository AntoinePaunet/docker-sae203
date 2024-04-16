import Jeu from "./Jeu.js";


let canva = document.getElementById("plateau");
let canvaBlanc = document.getElementById("canvaBlanc");
let canvaNoir = document.getElementById("canvaNoir");
const ctxBlanc = canvaBlanc.getContext("2d");
const ctxNoir = canvaNoir.getContext("2d");



document.getElementById('mapPlateau').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
      const content = e.target.result;
      console.log(content)
      document.getElementById('fileContent').textContent = content;
    };

    reader.readAsText(file);
});



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

	function animate(){
;
		jeu.update()
        jeu.draw(ctx, ctxBlanc, ctxNoir);

        requestAnimationFrame(animate);
    }
    animate(0);

    const intervalId = setInterval(function() 
    {
        if(jeu.tour == "Noir")
        {
            let tpsNoirDoc = document.getElementById("chronoNoir");
            jeu.tpsNoir--;
            tpsNoirDoc.textContent = jeu.tpsNoir + "Seconde(s)";
        }else{
            let tpsBlancDoc = document.getElementById("chronoBlanc");
            jeu.tpsBlanc--;
            tpsBlancDoc.textContent = jeu.tpsBlanc + " Seconde(s)";
        }
  
      }, 1000);


});