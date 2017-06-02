const expect = require('chai').expect;
let solution = require('../solutions/19').solution;

describe('Pairs sum to x', () => {
  it('should return pairs of number that sum to x', () => {
    const result = solution([1,2,3,4,5], 6);
    expect(result).eql([[1,5],[2,4]]);
  });
  it('should return pairs of number that sum to x', () => {
    const result = solution([3,5], 8);
    expect(result).eql([[3,5]]);
  });
  it('should return pairs of number that sum to x', () => {
    const result = solution([4,2,9,3,8,6,7], 11);
    expect(result).eql([[4,7],[2,9],[3,8]]);
  });
});
