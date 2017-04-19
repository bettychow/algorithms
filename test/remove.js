const expect = require('chai').expect;
const remove = require('../remove');
const removeNum = remove.removeNum;

describe('remove', () => {
  it('should return array without 5', () => {
    const arr1 = [];
    expect(removeNum(arr1, 5)).to.equal([]);
  });/*
  it('should return array without 2', () => {
    const arr2 = [2, 7, 3];
    //expect(removeNum(arr2, 2)).to.equal([7, 3]);
  });
  it('should return array without 3', () => {
    const arr3 = [6, 4, 3, 8, 9];
    //expect(removeNum(arr3, 3)).to.equal([6, 4, 8, 9]);
  });
  it('should return array without 8', () => {
    const arr4 = [1, 5, 7, 8];
    //expect(removeNum(arr4, 8)).to.equal([1, 5, 7]);
  });*/
});
