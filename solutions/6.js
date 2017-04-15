class Node {
  constructor(v, children) {
    this.value = v;
    this.children = children;
  }
}

const sumNode = (node) => {
  let sum = 0;
  if (node) { sum += node.value}
  console.log(sum);

  let remainder = node.children;

while(remainder[0]) {
  console.log('Kona', remainder);
  sum += remainder[0].value;
  console.log('kkk', sum);
  if (remainder[0].children !== undefined) {
remainder = remainder.concat(remainder[0].children)
}
    remainder.splice(0,1);
    console.log(remainder);

    console.log('hi', sum);
}

return sum;
};

module.exports = {
  node: Node,
  sumNode: sumNode
};
