const invitati =['luca','simone','alessio','edoardo']

const uName = prompt("inserisci il tuo nome e cognome")

for ( let i = 0; i < invitati.length; i++){
    const name = invitati[i]

    if (uName === name){
        console.log("trovato")
    }
    if (uName !== name){
        console.log("non trovato")
    }
}

