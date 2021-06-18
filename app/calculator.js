class Calculator {
    constructor() {}

    addNumbers(...passedParameters) {
        if (passedParameters.length > 1 && passedParameters.every(parameter => typeof parameter === 'number')) {
            return passedParameters.reduce((currentNumber, nextNumber) => currentNumber + nextNumber);
        } else {
            throw new Error('[Parameters] are not passed or one of the arguments is not a number');
        }
    }

    multiplyNumbers(...passedParameters) {
        if (passedParameters.length > 1 && passedParameters.every(parameter => typeof parameter === 'number')) {
            return passedParameters.reduce((currentNumber, nextNumber) => currentNumber * nextNumber);
        } else {
            throw new Error('[Parameters] are not passed or one of the arguments is not a number');
        }
    }
}

module.exports = Calculator;