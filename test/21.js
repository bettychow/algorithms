
const expect = require('chai').expect;
let largestDesNums = require('../solutions/21').largestDesNums

describe('Largest Three Numbers', () => {
  it('should return the 3 largest numbers in descending order', () => {
    const result = largestDesNums([1,9,8,7]);
    expect(result).to.deep.equal([9,8,7]);
  });
  
  it('should return the 3 largest numbers in descending order', () => {
    const result = largestDesNums([11,34,29,76]);
    expect(result).to.deep.equal([76,34,29]);
  });

  it('should return the 3 largest numbers in descending order', () => {
    const result = largestDesNums([234,123,456,345,897]);
    expect(result).to.deep.equal([897,456,345]);
  });
});


