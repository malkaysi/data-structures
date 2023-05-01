/*
 * Class creates a LinkedList by creating new nodes from the Node class
 */

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

  // Add a new node containing value to the start of the list
  prepend(value) {
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

  // Similar to append, drilling down as long as next is not null and counting
  size() {
    let currentNode = this.head;
    let totalNodes = 0;
    while (currentNode !== null) {
      totalNodes++;
      currentNode = currentNode.next;
    }

    return totalNodes;
  }

  // Return the first node in the list
  header() {
    if (this.head === null) {
      return console.log("Error: No node has been created");
    }
    return console.log({ headerNode: this.head });
  }

  // Return the last node in the list
  tail() {
    if (this.head === null) {
      return console.log("Error: No node has been created");
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return console.log({ tailNode: currentNode });
  }

  // Return the node at the given index
  at(index) {
    if (this.head === null) {
      return console.log("Error: No node has been created");
    }

    // Check if inputted index is larger than the list
    if (this.size() <= index) {
      return console.log("Error: Inputted index is larger than Linked List");
    }

    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return console.log({ currentNode });
  }

  // Removes the last element from the list
  pop() {
    if (this.head === null) {
      return console.log("Error: No node has been created");
    }

    // Select the second to last node when value is not equal to null (last node will point ot null)
    let lastNode = this.head;
    while (lastNode.next.next !== null) {
      lastNode = lastNode.next;
    }

    // Replace next with null
    lastNode.next = null;

    return console.log({ pop: lastNode });
  }

  // Represents LinkedList objects as strings to print out in console
  toString() {}
}
