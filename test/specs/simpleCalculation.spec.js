const Calculator = require('../../app/calculator.js');
const { expect } = require('chai');


describe('Positive scenarios for simple calculation', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should return 6 as a sum of 3 + 3', () => {
        expect(calculator.addNumbers(3, 3)).to.be.equal(6);
    });

    it('should return 9 as a multiplication of 3 * 3', () => {
        expect(calculator.multiplyNumbers(3, 3)).to.be.equal(9);
    });
})

describe('Negative scenarios for simple calculation', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should throw an error when no numbers were passed to addNumbers method', () => {
        let calledWithNoParameters = () => calculator.addNumbers();
        expect(calledWithNoParameters).to.throw('[Parameters] are not passed or one of the arguments is not a number');
    });

    it('should throw an error when one of the passed parameters to addNumbers method is not a number', () => {
        let calledWithNoParameters = () => calculator.addNumbers(1, 2, '3');
        expect(calledWithNoParameters).to.throw('[Parameters] are not passed or one of the arguments is not a number');
    });

    it('should throw an error when no numbers were passed to multiplyNumbers method', () => {
        let calledWithNoParameters = () => calculator.multiplyNumbers();
        expect(calledWithNoParameters).to.throw('[Parameters] are not passed or one of the arguments is not a number');
    });

    it('should throw an error when one of the passed parameters to multiplyNumbers method is not a number', () => {
        let calledWithNoParameters = () => calculator.multiplyNumbers(1, 2, '3');
        expect(calledWithNoParameters).to.throw('[Parameters] are not passed or one of the arguments is not a number');
    });
})