function romanToInt(roman) {
    if (roman.length === 0)
        return "La cadena de entrada está vacía";

    const romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        let currentValue = romanNumerals[roman[i]];
        let nextValue = (i + 1 < roman.length) ? romanNumerals[roman[i + 1]] : 0;

        if (currentValue < nextValue) {
            result += nextValue - currentValue;
            i++;
        } else {
            result += currentValue;
        }
    }

    return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
