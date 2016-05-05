class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  plus() {
    return this.a + this.b;
  }
  minus() {
    return this.a - this.b;
  }
  toString() {
    return 'simple calculator';
  }
}

export default Calculator;
