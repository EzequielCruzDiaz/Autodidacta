let deck = [];
import { shuffle } from 'lodash';
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K'] 

const btnpedir = document.querySelector("#btnpedir")
console.log(btnpedir)

const crearDeck = () => {
for (let i = 2; i<=10; i++){
    for (let tipo of tipos){
        deck.push(i + tipo);
    }
}
for (let tipo of tipos){
    for (let esp of especiales){
        deck.push(esp + tipo);
    }
}

    deck = shuffle(deck);
    console.log(deck);
}

crearDeck();


const pedirCarta = () => {
    
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    let carta = deck.pop();
    return carta;
    

}

pedirCarta();

const valorcarta = (carta) => {
    
    const valor = carta.substring(0, carta.length-1 );
     return (isNaN(valor) ) ?
     (valor === "A") ? 11 : 10
     :valor * 1;
}

