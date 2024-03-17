const heroes = ["Superman", "Batman", "wonderwoman", "aquaman"];

console.warn("//////FOR TRADICIONAL//////");
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}



console.warn("//////FOR IN///////");
for (let i in heroes) {
    console.log(heroes[i]);
}

console.warn("///// For of/////");
for (let heroe of heroes) {
    console.log(heroe);
}