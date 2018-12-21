//Parte 1: creiamo un array di 6 colori, e ad ogni quadrato assegniamo uno dei sei colori. 
//Scegliamo un colore (picked color) e aggiungiamo un eventListener ad ogni quadrato in modo che ogni volta che clicchiamo compariamo il suo colore con quello del colore scelto.

var colors=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
//selezioniamo ogni quadrato
var square = document.querySelectorAll(".square");
//assegniamo un colore ad ogni quadrato
for (var i=0; i<square.length; i++){
    square[i].style.backgroundColor=colors[i];
    square[i].addEventListener("click", function(){
        //alert(this.style.backgroundColor); grab color of clicked square
        var clickedColor = this.style.backgroundColor
        //compare color to pickedColor
        if (clickedColor === pickedColor){
            alert("Guessed!")
        }else{
            alert("Try again")
        }
    });
}
//scegliamo un colore, inizialmente sará il colore che apparirá nell'html (colorDiplay = colorPicked)
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
