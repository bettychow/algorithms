class Node {
  constructor(v, children) {
    this.value = v;
    this.children = children;
  }
}

const sumNode = (node) => {
  let sum = 0;
  if (node) { sum += node.value}

  let remainder = node.children;

while(remainder[0]) {
  sum += remainder[0].value;
  if (remainder[0].children !== undefined) {
remainder = remainder.concat(remainder[0].children)
}
    remainder.splice(0,1);
}

return sum;
};

module.exports = {
  node: Node,
  sumNode: sumNode
};
