const expect = require('chai').expect;
const tree = require('../solutions/6');
const Node = tree.node;
const sumNode = tree.sumNode;

describe('tree', () => {
  /*
  it('should return sum of nodes - simple', () => {
    const node2 = new Node(2)
    const node1 = new Node(3, [node2])
    expect(sumNode(node1)).to.equal(5);
  });
  it('should return sum of nodes - hard', () => {
    const node3 = new Node(6)
    const node2 = new Node(2)
    const node1 = new Node(3, [node2, node3])
    expect(sumNode(node1)).to.equal(11);
  });
  */
  it('should return sum of nodes - super-hard', () => {
    const node7 = new Node(3)
    const node6 = new Node(3)
    const node5 = new Node(7)
    const node4 = new Node(4, [node7])
    const node3 = new Node(6, [node6])
    const node2 = new Node(2, [node3, node4, node5])
    expect(sumNode(node2)).to.equal(25);
  });
});
