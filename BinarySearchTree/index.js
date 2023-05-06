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

let traversalTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
console.log({ levelOrder: binaryTree.recursiveLevelOrder() });
console.log({ iterativeLevelOrder: binaryTree.iterativeLevelOrder() });

prettyPrint(traversalTree.root);
console.log({ inOrder: traversalTree.inOrder() });
console.log({ preOrder: traversalTree.preOrder() });
console.log({ postOrder: traversalTree.postOrder() });
