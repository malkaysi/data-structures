import Node from "./Node.js";
import Tree from "./Tree.js";

let array = [1, 3, 4, 5, 6, 7, 8, 11, 16, 25, 27];

let binaryTree = new Tree(array);

// Print out visual of the tree using the initial root Node
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// prettyPrint(binaryTree.root);

binaryTree.insert(2);
binaryTree.insert(10);

prettyPrint(binaryTree.root);

binaryTree.delete(5);

prettyPrint(binaryTree.root);

console.log({ binaryTree: binaryTree.find(3) });

let traversalTree = new Tree([1, 2, 3, 4, 5]);
console.log({ levelOrder: binaryTree.recursiveLevelOrder() });
console.log({ iterativeLevelOrder: binaryTree.iterativeLevelOrder() });

prettyPrint(traversalTree.root);
console.log({ inOrder: traversalTree.inOrder() });
console.log({ preOrder: traversalTree.preOrder() });
console.log({ postOrder: traversalTree.postOrder() });
console.log({ height: traversalTree.height() });
let depthTwo = traversalTree.find(2);
let depthThree = traversalTree.find(1);

console.log(depthTwo);

console.log({ two: traversalTree.depth(depthTwo) });
console.log({ three: traversalTree.depth(depthThree) });

let unBalTree = new Tree([2, 5, 7]);
unBalTree.insert(1);
unBalTree.insert(3);
unBalTree.insert(4);

prettyPrint(unBalTree.root);
console.log({
  balanced: unBalTree.isBalancedResult(),
});

unBalTree.rebalance();
prettyPrint(unBalTree.root);
