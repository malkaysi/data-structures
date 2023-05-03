// Accepts an array when initialized of data and returns a balanced binary tree of Node objects

import Node from "./Node.js";

export default class Tree {
  constructor(arr) {
    this.arr = arr;
    this.start = 0;
    this.end = this.arr.length - 1;
    this.root = this.buildTree(this.start, this.end);
  }

  // Takes an array of data and turns it into a balanced binary tree
  buildTree(start, end) {
    if (start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);

    // Run buildTree for each sub-tree by selecting left and right ranges from original array
    let leftTree = this.buildTree(start, mid - 1);
    let rightTree = this.buildTree(mid + 1, end);

    let root = this.arr[mid];

    let node = new Node(root);
    node.left = leftTree;
    node.right = rightTree;

    return node;
  }

  // Insert a new node
  insert(value, currentNode = this.root) {
    // If we have moved down to a null node, create it there
    if (currentNode === null) {
      currentNode = new Node(value);
      return currentNode;
    }

    // Compare value to the current node value
    // If it is less, we move to the left and doing a left search on the next node first
    value < currentNode.root
      ? (currentNode.left = this.insert(value, currentNode.left))
      : (currentNode.right = this.insert(value, currentNode.right));

    return currentNode;
  }

  // Deleting a node
  delete(value, currentNode = this.root) {
    let previousNode;

    // Check and delete leaf nodes
    if (currentNode.left === null && currentNode.right === null) {
      currentNode = null;
      return currentNode;
    }

    // If it has one child
    // copy the child node as the current node, delete the child
    if (currentNode.left === null) {
      previousNode = currentNode.right;
      currentNode.right = null;
      currentNode = previousNode;
      return currentNode;
    } else if (currentNode.right === null) {
      previousNode = currentNode.left;
      currentNode.left = null;
      currentNode = previousNode;
      return currentNode;
    }

    value < currentNode.root
      ? (currentNode.left = this.delete(value, currentNode.left))
      : (currentNode.right = this.delete(value, currentNode.right));

    return currentNode;
  }
}
