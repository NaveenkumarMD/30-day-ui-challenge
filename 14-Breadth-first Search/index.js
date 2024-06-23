class TreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
  addChild(child) {
    this.children.push(child);
  }
  removeChild(child) {
    const idx = this.children.indexOf(child);
    this.children.splice(idx, 1);
  }
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);

n2.addChild(new TreeNode(4));
n2.addChild(new TreeNode(5));
n2.addChild(new TreeNode(6));

n3.addChild(new TreeNode(7));
n3.addChild(new TreeNode(8));
n3.addChild(new TreeNode(9));

n1.addChild(n2);
n1.addChild(n3);

function bfs(node, elem) {
  var queue = [node];
  while (queue.length > 0) {
    const currNode = queue.shift();
    console.log(currNode.value);
    if (currNode.value === elem) {
      return currNode;
    } else {
      queue = [...queue, ...currNode.children];
    }
  }
}
bfs(n1, 9);
