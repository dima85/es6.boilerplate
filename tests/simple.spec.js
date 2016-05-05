import Calculator from '../app/calculator';
import AdvancedCalculator, {addNumberToArray, sayHello} from '../app/advancedCalculator';
import chai from 'chai';
const expect = chai.expect;

describe('simple tests', () => {
  describe('When add 2 + 2', () => {
    let calc;
    beforeEach(() => {
       calc = new Calculator(2, 2);
    });
    it('Should return 4', () => {
      expect(calc.plus()).to.equal(4);
    });
    it('Should return "simple calculator" from "toString"', () => {
      expect(calc.toString()).to.equal('simple calculator');
    });
  });
  describe('When mulpiply 2 * 3', () => {
    let calc;
    beforeEach(() => {
      calc = new AdvancedCalculator(2, 3, '2+3');
    });
    it('Should return 6', () => {
      expect(calc.multi()).to.equal(6);
    });
    it('Should have 2+3 as description', () => {
      expect(calc.description).to.equal('2+3');
    });
    it('Should return equation string', () => {
      let str = `This is equation:
      2, 3!`;
      expect(calc.toString()).to.equal(str);
    });
  });
  describe('When init with no description', () => {
    let calc;
    beforeEach(() => {
      calc = new AdvancedCalculator(2, 3);
    });
    it('Should return default equation string', () => {
      let str = `default equation`;
      expect(calc.description).to.equal(str);
    });
  });

  describe('When add number to array', () => {
    let array;
    beforeEach(() => {
      array = addNumberToArray(1, 1, 2, 3);
    });
    it('Should add number', () => {
      expect(array).to.deep.equal([2, 3, 4]);
    });
  });

  describe('When add number to array', () => {
    let array;
    beforeEach(() => {
      array = addNumberToArray(1, ... [1, 2, 3]);
    });
    it('Should add number', () => {
      expect(array).to.deep.equal([2, 3, 4]);
    });
  });

  describe('When call say hello', () => {
    let str;
    beforeEach(() => {
      str = sayHello('Jack');
    });
    it('Should return "Gruss got Jack!"', () => {
      expect(str).to.equal('Gruss got Jack!');
    });
  });
});
