

const removeNum = (arr, x) => {
if( arr.length === 0 ) { return arr; }

  a = arr[0] === x? [] : arr[0];

  return a.concat(removeNum(arr.splice(0,1), x));
};


module.exports = {
  removeNum: removeNum,
};

console.log('hi', removeNum([], 5));
