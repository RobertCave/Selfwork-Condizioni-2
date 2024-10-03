// Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:
    
//         se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
//         se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
//         se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
//         se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
//         se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
//             Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case.


// Chiediamo all'utente di inserire una temperatura
let temperatura = parseFloat(prompt("Inserisci una temperatura in gradi Celsius:"));

if (temperatura < -10) {
    console.log("copriti...ancora ti raffreddi");

} else if (temperatura < 0) {
    console.log("non è tanto il freddo quanto l’umidità");

} else if (temperatura < 20) {
    console.log("non ci sono più le mezze stagioni");

} else if (temperatura < 30) {
    console.log("mi dia una Peroni sudata");
    
} else {
    console.log("lu mare, lu sole, lu ientu ");
}


// Switch 

switch (true) {
    case (temperatura < -10):
        console.log("copriti...ancora ti raffreddi");
        break;

    case (temperatura < 0):
        console.log("non è tanto il freddo quanto l’umidità");
        break;

    case (temperatura < 20):
        console.log("non ci sono più le mezze stagioni");
        break;

    case (temperatura < 30):
        console.log("mi dia una Peroni sudata");
        break;

    case (temperatura >= 30):
        console.log("lu mare, lu sole, lu ientu ");
        break;

    default:
        console.log("C'è un problema con la temperatura");
        break;
}