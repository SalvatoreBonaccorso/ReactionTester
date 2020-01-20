var start = new Date().getTime();  // calcolo il tempo iniziale
    
function getRandomColor() { // funzione di colore random
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear(){ // mi creo la funzione "appare figura"per il riuso del codice
    
    var top = Math.random()*400;// la nuova figura apparirà in una nuova posizione relativa random compreso tra 0 e 400 pixel da sopra ( nel css la posizione dell'elemento l'ho dovuta mettere relative)    
    var left = Math.random()*400;// faccio spostare in maniera random la figura da sinistra
    var width = (Math.random()*200)+100;// faccio allargare in maniera random la figura da 100 a 200 px
    if (Math.random() > 0.5) { // condizione che mettiamo per far spuntare in modo random cerchio     
        document.getElementById("square").style.borderRadius = "50%";    
    } else {    // condizione per far levare cerchio e spuntare di nuovo quadrato    
        document.getElementById("square").style.borderRadius = "0";    
    }
    
    document.getElementById("square").style.backgroundColor=getRandomColor();// mi richiamo la funzione colorRandom per cambiare ogni volta il colore della figura
    document.getElementById("square").style.top=top + "px";
    document.getElementById("square").style.left=left + "px";
    document.getElementById("square").style.width=width + "px";
    document.getElementById("square").style.height=width + "px";// fisso anche l'altezza uguale alla nuova larghezza per mantenere la forma del quadrato
    document.getElementById("square").style.display="block"; // faccio apparire la figura dato che di default l'ho impostata su display=none
    start = new Date().getTime(); // faccio ripartire il tempo
}

function appearAfterDelay() { // mi creo la funzione "appare dopo il ritardo"per il riuso del codice
    setTimeout(makeShapeAppear, Math.random() * 2000); // la nuova figura apparirà in un tempo random compreso tra 0 e 2 secondi    
}

appearAfterDelay(); // mi richiamo la funzione

// funzione che mi calcola il tempo di reazione nel premere la figura che compare
document.getElementById("square").onclick = function() {
    document.getElementById("square").style.display = "none";  // quando clicco sulla figura lei scompare
    var end = new Date().getTime();  // calcolo il tempo finale
    var time = (end - start)/1000;  // differenza tra il tempo iniziale e quello finale diviso per mille 
    // cosi ottengo il tempo in secondi..dato che di default è in millisecondi
    document.getElementById("TimeTaken").innerHTML=time+" sec";    
    appearAfterDelay(); // mi richiamo la funzione
}
