import Calculator from './calculator';

class AdvancedCalculator extends Calculator {
  constructor(a, b, description = 'default equation') {
    super(a, b);
    this.description = description;
  }

  multi() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }

  toString() {
    return `This is equation:
      ${this.a}, ${this.b}!`;
  }
}

export function addNumberToArray(numberToAdd, ...array) {
  return array.map((number) => {
    return number + numberToAdd;
  });
}

export function sayHello(name, greeting = 'Gruss got') {
  return `${greeting} ${name}!`;
}

export default AdvancedCalculator;
