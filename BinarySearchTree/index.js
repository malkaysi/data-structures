import Node from "./Node.js";
import Tree from "./Tree.js";

let array = [1, 3, 4, 5, 7, 8, 11];

let binaryTree = new Tree(array);

// Print out visual of the tree using the initial root Node
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.root}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// prettyPrint(binaryTree.root);

binaryTree.insert(2);
binaryTree.insert(10);

prettyPrint(binaryTree.root);

binaryTree.delete(11);

prettyPrint(binaryTree.root);

// console.log(binaryTree);
