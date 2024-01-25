"use strict";
/*

Problem statement: Program that calculates the average roll of
a D100 for ROLL_ITERATIONS crashes for 1000000000 iterations; please
fix.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const ROLL_ITERATIONS = 100000;
function main() {
    let DiceRolls = [];
    for (let iterator = 0; iterator < ROLL_ITERATIONS; iterator = iterator + 1) {
        const roll = { diceValue: Math.round(Math.random() * 100) };
        DiceRolls.push(roll);
        if (iterator % 100 === 0) {
            DiceRolls = [];
        }
    }
    const average = DiceRolls.reduce((sum, current) => sum + current.diceValue, 0) /
        DiceRolls.length;
    console.log(`average dice roll value: ${average}`);
}
main();
