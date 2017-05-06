
const largestDesNums = (array) => {
   let newArray = [];
  array.sort(function(a,b) { return  b - a });

  for (let i = 0; i<3; i++) {
    newArray.push(array[i]);
  }

  return ( 
    newArray  
   );
  };

module.exports = {
  largestDesNums
};








