"use strict";
/*function reverseString(input: string): string {
    let reversedString = "";
    for (let i = input.length; i >= 0; i--) {
        reversedString += input[i];
    }
    return reversedString;
}

const inputString = "Hello, World!";
const reversed = reverseString(inputString);

console.log("Input:", inputString);
console.log("Reversed:", reversed);*/
const ROLL_ITERATIONS = 1000000000;
function main() {
    let sum = 0;
    for (let iterator = 0; iterator < ROLL_ITERATIONS; iterator++) {
        const rollValue = Math.round(Math.random() * 100);
        sum += rollValue;
    }
    const average = sum / ROLL_ITERATIONS;
    console.log(`average dice roll value: ${average}`);
}
main();
/*const randomArrayLength = 1000;
const randomNumbers: number[] = [];
for (let i = 0; i < randomArrayLength; i++) {
    randomNumbers.push(Math.round(Math.random() * 100));
}

function filterArray(
    array: number[],
    filterFunction: (store: number[]) => void
) {
    console.log(`initial store size:${array.length}`);
    filterFunction(array);
    console.log(`final store size:${array.length}`);
}

filterArray(randomNumbers, (store) => {
    const filterArray = store.filter((item) => item % 2 === 0);
    store.length = 0
    store.push(...filterArray)
});
*/
function StoreAndDeleteWithObject(cleaningFunction) {
    const storeObject = { store: [] };
    console.log(`initial store size:${storeObject.store.length}`);
    for (let i = 0; i < 10000; i++) {
        storeObject.store.push(i);
    }
    console.log(`intermediate store size:${storeObject.store.length}`);
    cleaningFunction(storeObject);
    console.log(`final store size:${storeObject.store.length}`);
}
StoreAndDeleteWithObject((storedObject) => {
    storedObject.store.length = 0;
});
