// Betty Chow

const expect = require('chai').expect;
let solution = require('../5_betty').solution;

describe('sort array', () => {
  it('should generate numbers in ascending order', () => {
    const input = [3,1,2,4];
    const output = [1,2,3,4];
    expect(solution(input)).eql(output);
  });
  it('should generate numbers in ascending order', () => {
    const input = ['betty', 'amy', 'grace', 'naomi', 'rose'];
    const output = ['amy', 'betty', 'grace', 'naomi', 'rose'];
    expect(solution(input)).eql(output);
  });
  it('should generate numbers in ascending order', () => {
    const input = ['Thomas', 'Pikachu', 'Superman', 'Batman', 'Pingu' ];
    const output = ['Batman', 'Pikachu', 'Pingu', 'Superman', 'Thomas'];
    expect(solution(input)).eql(output);
  });
});
