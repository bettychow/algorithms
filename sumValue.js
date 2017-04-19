

const sumVal = (arr) => {

   if (arr.length === 0){ return 0}
console.log('kkk', arr[1].value);
   return arr[0].value + sumVal(arr.splice(0,1));
};

module.exports = {
  sumVal: sumVal,
};
