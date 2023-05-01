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

    let leftTree = this.buildTree(start, mid - 1);
    let rightTree = this.buildTree(mid + 1, end);

    let root = this.arr[mid];

    let node = new Node(root);
    node.left = leftTree;
    node.right = rightTree;

    return node;
  }
}
