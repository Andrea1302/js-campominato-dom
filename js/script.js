/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
(come detto sull’effetiva interfaccia fate voi, non ci son specifiche vincolanti, ma partite semplici)
La partita termina quando il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato un quadratino con un numero consentito. (quindi se ci pensate dovrete tenere traccia del punteggio). */

/*


1 leggiamo il prompt
2 creare una griglia in base al numero di celle da usare => funzione
3 creare un array con le bombe => funzione
4 intercettare il click dell'utente su una cella => listener
4.1 se l'indice della cella è presente all'interno dell'array => for / if
4.2 hai perso => console.log


*/




// Variabili globali 
const containerSquare = document.getElementById("container_square");
const bottonEasy = document.getElementById("easy");
const bottonMedium = document.getElementById("medium");
const bottonHard = document.getElementById("hard");
let bombePosition = [];


// 1.
let sceltaDifficolta = parseInt(prompt("inserisci il livello di difficoltà ( '1' = Facile), ( '2' = Medio), ( '3' = Difficile)")) ;
while (sceltaDifficolta !== 1 && sceltaDifficolta !== 2 && sceltaDifficolta !== 3 ){
    // sceltaDifficolta = parseInt(prompt("inserisci il livello di difficoltà ( '1' = Facile), ( '2' = Medio), ( '3' = Difficile)")) ;
    alert("Scegli 1, 2 o 3");
    sceltaDifficolta = parseInt(prompt("inserisci il livello di difficoltà ( '1' = Facile), ( '2' = Medio), ( '3' = Difficile)")) ;
}

// 2.
// 2.1

// difficoltà 1 
if ( sceltaDifficolta === 1 ) {
    numeroBlocchi = 100;
    bombePosition = numRandom(numeroBlocchi);
    // baseClass = "square_easy";  
    generateGrid(100,"square_easy", bombePosition) 

}

// difficoltà 2
if ( sceltaDifficolta === 2 ) {
    numeroBlocchi = 81;
    bombePosition = numRandom(numeroBlocchi);
    // baseClass = "square_medium";
    generateGrid(81,"square_medium", bombePosition) 

}

// difficoltà 3 
if ( sceltaDifficolta === 3 ) {
    numeroBlocchi = 49;
    bombePosition = numRandom(numeroBlocchi);
    // baseClass = "square_extreme";   
    generateGrid(49,"square_extreme", bombePosition) 
}



function numRandom(numeroBlocchi){


    let bombePosition = [];
    while (bombePosition.length !== 16){
        let numeroGenerato = Math.floor(Math.random()*numeroBlocchi) + 1;
        if (bombePosition.includes(numeroGenerato) !== true) {
            bombePosition.push(numeroGenerato);
        }
        
    }

    return bombePosition;
}


function generateGrid(numeroBlocchi,baseClass, bombePosition){

 
    for ( let i = 1; i <= numeroBlocchi; i++) {
        squareElement = document.createElement("div");
        squareElement.classList.add(baseClass);
        squareElement.id = i;

   
        // console.log(prova);
        if (bombePosition.includes(i)){
            squareElement.classList.add("bomba")
        }

        
        // console.log(numeroI);

        containerSquare.append(squareElement);

        // 3
        // let bombs = document.getElementsByClassName("bomba")
        // console.log(bombs);
       

        squareElement.addEventListener("click", function() {
            let punteggio = 
            this.classList.add("active");
            let id = parseInt(this.id);
            this.innerHTML = id;
            if (bombePosition.includes(id)) {
                this.classList.add("active_bomba");
                alert("hai perso!")
            }
                
        });
    }
}
