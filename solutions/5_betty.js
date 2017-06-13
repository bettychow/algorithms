// Betty Chow

const solution = (arr) => {
  let newArr = [];
  for(let j = 0; j < arr.length; j++) {
    if (typeof arr[j] === 'string') {
      arr[j].toLowerCase();
    }
  }
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
  solution
};
