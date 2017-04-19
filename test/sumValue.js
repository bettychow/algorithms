const expect = require('chai').expect;
const sumValue = require('../sumValue');
const sumVal = sumValue.sumVal;

describe('sumValue', () => {
  it('should return array without 5', () => {
    const arr1 = [{value: 1}, {value: 2}];
    expect(sumVal(arr1)).to.equal(3);
  });
});
