import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node containing value to the end of the list
  append(value) {
    // If there is no head, use prepend function to set one
    if (this.head === null) {
      this.prepend(value);
      return this.head;
    }

    // To go down the list, set the initial node to Head Node
    // Then go down through by re-setting the initial node to the next node as long as the next is not null
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    // Once you leave the while loop, you've reached the last node
    currentNode.next = new Node(value);

    return this.head;
  }

  prepend(value) {
    // Add a new node containing value to the start of the list
    if (this.head === null) {
      this.head = new Node(value);
      return this.head;
    }
    // If there is already a head, we need to reassign that to head.next?
    let previousHead = this.head;
    this.head = new Node(value);
    this.head.next = previousHead;
    return this.head;
  }

  size() {
    // Similar to append, drilling down as long as next is not null and counting
    let currentNode = this.head;
    let totalNodes = 0;
    while (currentNode !== null) {
      totalNodes++;
      currentNode = currentNode.next;
    }

    return totalNodes;
  }

  head() {
    // Return the first node in the list
  }

  tail() {
    // Return the last node in the list
  }

  at(index) {
    // Return the node at the given index
  }

  pop() {
    // Removes the last element from the list
  }

  listToString() {
    // Represents LinkedLIst objects as strings to print out in console
  }
}
