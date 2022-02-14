let numero = prompt("inserisci un numero di quattro cifre")

if ( numero.length !== 4){
    console.log("reinserisci il numero")
}

const divisioneNumero = numero.split("")

let somma = 0

for (let i = 0; i < divisioneNumero.length; i++) {
    const num = divisioneNumero[i];
    somma += num   
    console.log(somma ) 
}

