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

  sort(arr) {
    arr.sort((a, b) => a - b);
    return arr;
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
    value < currentNode.value
      ? (currentNode.left = this.insert(value, currentNode.left))
      : (currentNode.right = this.insert(value, currentNode.right));

    return currentNode;
  }

  // Deleting a node
  delete(value, currentNode = this.root) {
    if (currentNode === null) {
      return null;
    }
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

    // If it has two children, replace it with the right-subtree inorder child
    if (currentNode.left && currentNode.right && currentNode.value === value) {
      // Go to the right sub-tree and find the inorder child
      let replacementNode = this.inOrderNode(currentNode.right);
      this.delete(replacementNode.value, this.root);

      // Replace the node being delete with the new value
      currentNode.value = replacementNode.value;

      return currentNode;
    }

    value < currentNode.value && value !== currentNode.value
      ? (currentNode.left = this.delete(value, currentNode.left))
      : (currentNode.right = this.delete(value, currentNode.right));

    return currentNode;
  }

  inOrderNode(node) {
    // Go down the left sub tree
    if (node.left === null) {
      return node;
    }

    return this.inOrderNode(node.left);
  }

  find(value, currentNode = this.root) {
    if (currentNode === null) {
      return null;
    }

    if (currentNode.value === value) {
      return currentNode;
    }

    return value < currentNode.value
      ? this.find(value, currentNode.left)
      : this.find(value, currentNode.right);
  }

  // Recursive Queue: Traverse the tree in breadth-first level order and provide each node as the argument to callback
  recursiveLevelOrder(callback, q = [this.root], values = []) {
    // When queue is empty, return values
    if (!q) return values;

    // If callback is provided, pass the node as an argument
    let currentNode = q.shift();
    if (callback) callback(currentNode);
    if (!currentNode) return values;

    // Add node value to array
    values.push(currentNode.value);

    // Add sub-trees to queue for breadth-first level order search
    if (currentNode.left) q.push(currentNode.left);
    if (currentNode.right) q.push(currentNode.right);

    // Recursive callback
    this.recursiveLevelOrder(callback, q, values);

    return values;
  }

  // Iterative Breadth-First Level Order
  iterativeLevelOrder(callback) {
    let q = [this.root];
    let values = [];

    while (q.length) {
      let currentNode = q.shift();

      if (currentNode.left) q.push(currentNode.left);
      if (currentNode.right) q.push(currentNode.right);
      if (callback) callback(currentNode);

      values.push(currentNode.value);
    }

    if (!callback) return values;
  }

  // Inorder looks at left, middle, right
  inOrder(callback, currentNode = this.root, values = []) {
    if (!currentNode) return values;

    if (currentNode.left) this.inOrder(callback, currentNode.left, values);

    values.push(currentNode.value);

    if (currentNode.right) this.inOrder(callback, currentNode.right, values);

    if (!callback) return values;
  }

  // Preorder looks at middle, left, right
  preOrder(callback, currentNode = this.root, values = []) {
    if (!currentNode) return values;

    values.push(currentNode.value);
    if (callback) callback(currentNode);
    if (currentNode.left) this.preOrder(callback, currentNode.left, values);
    if (currentNode.right) this.preOrder(callback, currentNode.right, values);

    return values;
  }

  // postOrder looks at left, right, root
  postOrder(callback, currentNode = this.root, values = []) {
    if (!currentNode) return values;

    // Navigate to the left subtree, then right subtree
    if (currentNode.left) this.postOrder(callback, currentNode.left, values);
    if (currentNode.right) this.postOrder(callback, currentNode.right, values);
    values.push(currentNode.value);
    if (callback) callback(currentNode);

    if (!callback) return values;
  }

  // Take a node and return height of it
  height(node = this.root) {
    // Go down a tree, if you hit a node that's null, return -1
    /* if (node === null) return -1;
    // Calculate height of sub-trees
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    // Add the resulting sub-trees height to get total height
    return Math.max(leftHeight, rightHeight) + 1; */

    // ******* ANOTHER WAY *******

    if (node === null) return -1;
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }

  // Take a node and return depth (distance to the root)
  depth(node, currentNode = this.root, depthCounter = 0) {
    // Need to find the node starting from root
    if (!currentNode) {
      return null;
    }

    if (node.value === currentNode.value) return depthCounter;

    return node.value < currentNode.value
      ? this.depth(node, currentNode.left, depthCounter + 1)
      : this.depth(node, currentNode.right, depthCounter + 1);
  }

  // Check if tree is balanced
  isBalanced(node = this.root) {
    // If we've reached the bottom then return true for that node
    // This algoritm is calling another function (height) and is not optimcal
    // *******
    /* if (!node) return true;

    // Compare sub-tree heights
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    // If current node sub-trees are good, check the next two
    return this.isBalanced(node.left) && this.isBalanced(node.right); */
    // *******
    // Another way to do this
    if (node === null) {
      return 0;
    }
    let leftH = this.isBalanced(node.left);
    if (leftH === -1) {
      return -1;
    }
    let rightH = this.isBalanced(node.right);
    if (rightH === -1) {
      return -1;
    }
    if (Math.abs(leftH - rightH) > 1) {
      return -1;
    } else {
      return Math.max(leftH, rightH) + 1;
    }
  }

  isBalancedResult() {
    if (this.isBalanced() === -1) {
      return false;
    }

    return true;
  }

  // Rebalance an unbalanced tree
  rebalance() {
    // Use traversal method to get the array
    // Pass the array to sort method
    // Then pass it to this class constructor and return this.root
    if (this.root === null) return;
    let newArr = this.inOrder();
    let sortedArr = this.sort(newArr);
    this.arr = sortedArr;
    let rebalancedTree = new this.constructor(sortedArr);
    this.root = rebalancedTree.root;
  }
}
