const imagenes = [
    "slider1.jpg",
    "slider2.jpg",
    "slider3.jpg",
    "slider4.jpg",
    "slider5.jpg"
];

let slider = document.getElementById("slider");
let contador = 0;

function mover(i){
    switch (i) {
        case 1:
            contador++;
            if (contador > imagenes.length -1)contador = 0;
            slider.src = "img/" + imagenes[contador];
            break;
        case -1:
            contador--;
            if (contador < 0) contador = imagenes.length -1;
            slider.src = "img/" + imagenes[contador];
            break;
    
    }
}