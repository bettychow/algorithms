// Betty Chow
// Find pais that sum to x

const solution = (arr, x) => {

  let newArr= [];
  for (let i = 0; i < arr.length; i++) {
    for (let j=i+1; j < arr.length; j++ ) {
      if (arr[i] + arr[j] === x) {
        newArr.push([arr[i], arr[j]]);
      }
    }
  }

  return newArr;
};

module.exports = {
  solution
};
