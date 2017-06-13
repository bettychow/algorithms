// Manik Sachdeva: msach22
// create a sorting function that allows you to
// sort numbers or text in accending order

const solution = (array) => {
  if (array.length < 2) {
    return array;
  }
  const middle = parseInt(array.length / 2);
  const firstHalf = array.slice(0, middle);
  const secondHalf = array.slice(middle, array.length);
  return mergeTogether(solution(firstHalf), solution(secondHalf));
};

const mergeTogether = (firstHalf, secondHalf) => {
    let sortedResult = [];
    while (firstHalf.length && secondHalf.length) {
      if (firstHalf[0] <= secondHalf[0]) {
        sortedResult.push(firstHalf.shift());
      } else {
        sortedResult.push(secondHalf.shift());
      }
    }
  while (firstHalf.length) {
    sortedResult.push(firstHalf.shift());
  }
  while (secondHalf.length) {
    sortedResult.push(secondHalf.shift());
  }
  return sortedResult;
};

// Daniel Soper
// sort an array of strings or numbers in ascending order
const solution2 = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  for (i=0; i < arr.length; i++) {
    for (j=i+1; j< arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

// Betty Chow
// sort numbers or strings in an array in ascending order
const solution1 = (arr) => {
    let newArr = [];
    while( arr.length > 0) {
      let smallestNum = arr[0];
      for(let i=0; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
          smallestNum = arr[i];
        }
      }
      let x = arr.indexOf(smallestNum);
      newArr.push(arr.splice(x , 1));
    }
    const finalArr = [].concat.apply([], newArr);
    return finalArr;
}

module.exports = {
  solution,
  solution1,
  solution2,
};




