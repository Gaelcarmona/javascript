'use strict';

let trial
let chiffre=Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
console.log(chiffre)
let tentatives= 0
alert("Vous avez 5 tentatives")

do {
    trial=window.prompt("Quel est le juste prix ?")
    tentatives++
    if (tentatives==5) {
        alert("T'es nul")
        break;
    }
    if (trial==null) {
        break;
    }
    if (isNaN(trial)) {
        alert("Ceci "+trial+"n'est pas un nombre")
        continue;
    }
    if (trial<chiffre) {
        alert("c'est plus grand")
    }
    else if (trial>chiffre) {
        alert("c'est plus petit")
    }
    else {
        alert("C'est gagné ! Le juste prix est bien"+chiffre) 
    }
    

} while (trial!=chiffre);

