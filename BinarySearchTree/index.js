import Node from "./Node.js";
import Tree from "./Tree.js";

let array = [1, 2, 3, 4, 5, 6, 7];

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

prettyPrint(binaryTree.root);

// console.log(binaryTree);
