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

// 1. Generare 16 numeri casuali nello stesso range della difficoltà prescelta..
// 1.2 creare array numeri casuali pc vuota
// 1.3 check numeri generati = numeri già presenti nell array.

// 2. inserire i numeri generati dal pc nella nostra griglia
    // il numero generato, lo sostituisco al suo relativo  i, aggiungo una classe che ne va a definire appunto il suo stato...


// 3. l utente in seguito potrà cliccare su ogni cella
// 3.1 se l utente clicca sulla cella senza bomba, prosegue 
// 3.2 creo variabile somma che tiene conto di quante volte l utente ha cliccato la cella senza bomba
// finchè
// 4 se clicca sulla classe in cui è attiva la classe "bomba", la cella si colora di rosso 
// 4.1 Input relativo alla fine del gioco (hai perso) e del punteggio ottenuto ed eseguo l output su tutte le bombe presenti nel gioco 




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
    // baseClass = "square_easy";  
    generateGrid(100,"square_easy") 

}

// difficoltà 2
if ( sceltaDifficolta === 2 ) {
    numeroBlocchi = 81;
    // baseClass = "square_medium";
    generateGrid(81,"square_medium") 

}

// difficoltà 3 
if ( sceltaDifficolta === 3 ) {
    numeroBlocchi = 49;
    // baseClass = "square_extreme";   
    generateGrid(49,"square_extreme") 
}

while (bombePosition.length !== 16){
    let numeroGenerato = Math.floor(Math.random()*numeroBlocchi)+1 ;
    let duplicato = false;
    for(let i=0; i < bombePosition.length; i++) {
        if (bombePosition[i] === numeroGenerato) {
            duplicato = true;
        }
    }
    if (!duplicato){
        bombePosition.push(numeroGenerato);
    }
    
}


function generateGrid(numeroBlocchi,baseClass){
    for ( let i = 1; i <= numeroBlocchi; i++) {
        squareElement = document.createElement("div");
        squareElement.classList.add(baseClass);
        squareElement.setAttribute("id", i);
        let numeroI = squareElement.getAttribute("id");
        if ( bombePosition.includes(numeroI)){
            // squareElement.classList.add("bomba")
            console.log("vero");
        }
        // console.log(numeroI);

        containerSquare.append(squareElement);
        // 3
        squareElement.addEventListener("click",
            function(){
                this.classList.add("active");
                this.innerHTML = i;
                
            }   
    
        )
    }
}

