const array= []

for ( let i = 0; i < 6; i++){
    const number = parseFloat( prompt("inserisci un numero"))

    if( number % 2 === 1 ){
        array.push(number)
    }
}

console.log(array)
