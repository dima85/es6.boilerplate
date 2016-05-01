import Calculator from '../app/calculator';
import chai from 'chai';
let expect = chai.expect;


describe('simple tests', () => {
  describe('When add 2 + 2', () => {
    let calc;
    beforeEach(() => {
       calc = new Calculator(2, 2);
    });
    it('Should return 4', () => {
      expect(calc.plus()).to.equal(4);
    });
  });
});
