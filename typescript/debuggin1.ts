
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

/*const leastCommonMultiple = (a: number, b: number) =>
    (a * b) / greatestCommonDivisor(a, b);

const greatestCommonDivisor = (a: number, b: number): number => {
    const remainder = a % b;
    if (remainder === 0) return b;
    return greatestCommonDivisor(b, remainder);
};

const num1 = 5;
const num2 = 8;

const lcd = leastCommonMultiple(num1, num2);

console.log(`The LCM of ${num1} and ${num2} is:`, lcd);*/

/*function simpleInsertionSort(values: number[]): number[] {
    if (values.length <= 1) {
        return values;
    }

    const result: number[] = [];
    values.forEach((value) => {
        if (result.length === 0) {
            result.push(value);
        } else {
            let insertionIndex = result.findIndex(
                (resultValue) => resultValue > value
            );

            insertionIndex = insertionIndex === -1 ? result.length : insertionIndex;

            result.splice(insertionIndex, 0, value);
        }

    });

    return result;
}

const sequence = [3, 7, 4, 9, 5, 2, 6, 1];
const sorted = simpleInsertionSort(sequence);
console.log(sorted);*/

/*function calculateLetterFrequency(input: string) {
    const frequencyMap = new Map<string, number>();

    for (const letter of input) {
        if (frequencyMap.has(letter)) {
            let mapValue = frequencyMap.get(letter) ?? 0;
            frequencyMap.set(letter, mapValue + 1);
        } else {
            frequencyMap.set(letter, 1);
        }
    }
    return frequencyMap;

}


function printLetterFrequency(frequencyMap: Map<string, number>) {
    console.log("Letter Frequency:");

    for (const [letter, frequency] of frequencyMap) {
        console.log(`${letter}: ${frequency}`);
    }
}

const inputString = "Hello, World!";
const frequencyMap = calculateLetterFrequency(inputString);
printLetterFrequency(frequencyMap)*/



/*

Problem statement: Program that calculates the average roll of 
a D100 for ROLL_ITERATIONS crashes for 1000000000 iterations; please
fix.

*/

type DiceRoll = {
    diceValue: number;
};

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


function StoreAndDeleteWithObject(
    cleaningFunction: (object: { store: number[] }) => void
) {
    const storeObject: { store: number[] } = { store: [] };
    console.log(`initial store size:${storeObject.store.length}`);
    for (let i = 0; i < 10000; i++) {
        storeObject.store.push(i);
    }
    console.log(`intermediate store size:${storeObject.store.length}`);
    cleaningFunction(storeObject);
    console.log(`final store size:${storeObject.store.length}`);
}

StoreAndDeleteWithObject((storedObject) => {
    storedObject.store.length = 0
});