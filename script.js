const affreschi = [
{
titolo:"Il Bacio di Giuda",
file:"immagini/bacio_di_giuda.jpg"
},
{
titolo:"Il Compianto sul Cristo morto",
file:"immagini/compianto.jpg"
},
{
titolo:"La Fuga in Egitto",
file:"immagini/fuga_in_egitto.jpg"
}
];

const img = document.getElementById("immagine");
const titolo = document.getElementById("titolo");

let indice = 0;

function casuale() {

let nuovo;

do{
    nuovo = Math.floor(Math.random()*affreschi.length);
}while(nuovo===indice && affreschi.length>1);

indice = nuovo;

img.src = affreschi[indice].file;
titolo.textContent = "";
}

document.getElementById("next").onclick = casuale;
document.getElementById("prev").onclick = casuale;

document.getElementById("mostra").onclick = () => {
    titolo.textContent = affreschi[indice].titolo;
}

casuale();
