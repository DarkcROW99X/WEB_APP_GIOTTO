let immagini = [];
let indiceCorrente = -1;

// Elementi della pagina
const img = document.getElementById("immagine");
const titolo = document.getElementById("titolo");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const btnMostra = document.getElementById("mostra");

// Trasforma il nome del file in un titolo leggibile
function titoloDaFile(nomeFile) {
    return nomeFile
        .replace(/\.[^/.]+$/, "")      // toglie l'estensione
        .replace(/[_-]/g, " ")         // _ e - diventano spazi
        .replace(/\b\w/g, c => c.toUpperCase()); // Maiuscole
}

// Mostra un'immagine casuale
function mostraImmagineCasuale() {

    if (immagini.length === 0) return;

    let nuovoIndice;

    do {
        nuovoIndice = Math.floor(Math.random() * immagini.length);
    } while (nuovoIndice === indiceCorrente && immagini.length > 1);

    indiceCorrente = nuovoIndice;

    img.src = "immagini/" + immagini[indiceCorrente];
    titolo.textContent = "";
}

// Mostra/Nasconde il titolo
btnMostra.addEventListener("click", () => {

    if (titolo.textContent === "") {

        titolo.textContent = titoloDaFile(immagini[indiceCorrente]);
        btnMostra.textContent = "Nascondi titolo";

    } else {

        titolo.textContent = "";
        btnMostra.textContent = "Mostra titolo";

    }

});

// Entrambe le frecce mostrano una nuova immagine casuale
btnNext.addEventListener("click", () => {
    btnMostra.textContent = "Mostra titolo";
    mostraImmagineCasuale();
});

btnPrev.addEventListener("click", () => {
    btnMostra.textContent = "Mostra titolo";
    mostraImmagineCasuale();
});

// Supporto ai tasti della tastiera
document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        btnMostra.textContent = "Mostra titolo";
        mostraImmagineCasuale();
    }

    if (event.key === " ") {
        event.preventDefault();
        btnMostra.click();
    }

});

// Carica automaticamente l'elenco delle immagini
fetch("immagini.json")
    .then(response => response.json())
    .then(data => {
        immagini = data;
        mostraImmagineCasuale();
    })
    .catch(error => {
        console.error("Errore nel caricamento di immagini.json:", error);
    });
