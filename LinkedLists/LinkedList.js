/*
 * Class creates a LinkedList by creating new nodes from the Node class
 */

import { checkHeader } from "./errorHandling.js";
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
    checkHeader(this.head);
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
    checkHeader(this.head);
    return this.head;
  }

  // Return the last node in the list
  tail() {
    checkHeader(this.head);

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return console.log({ tailNode: currentNode });
  }

  // Return the node at the given index
  at(index) {
    checkHeader(this.head);

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

    return currentNode;
  }

  // Removes the last element from the list
  pop() {
    checkHeader(this.head);

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
  toString(nextNode) {
    checkHeader(this.head);

    if (!nextNode) {
      return null;
    }

    // Using a recursive algorithm starting with the head being passed in
    return `${nextNode.value} > ${this.toString(nextNode.next)}`;
  }

  // Insert a new node with provided value at given index
  insertAt(value, index) {
    checkHeader(this.head);

    if (this.size() < index) {
      return console.log("Error: Inputted index is larger than Linked List");
    }
    // Need to change the node before the index to point to the new node
    // Need to point the new index next to the current node
    let previousNode;
    let initialNode;
    let newNode;

    if (index === 0) {
      previousNode = this.head;
      initialNode = this.head;

      this.head = new Node(value, initialNode);
      previousNode = this.head;

      return previousNode;
    }

    previousNode = this.at(index - 1);
    initialNode = previousNode.next;

    newNode = new Node(value, initialNode);
    previousNode.next = newNode;
    return newNode;
  }

  // Remove a node at given index
  removeAt(index) {
    // Similar to insertAt, change previous index to point to one after deleted node
    checkHeader(this.head);
    let previousNode;
    let nextNode;

    // If the head is being deleted, just replace it with its next node
    if (index === 0 && this.head.next !== null) {
      this.head = this.head.next;
      return this.head;
    }

    // If only head exists, delete it
    if (index === 0 && this.head.next === null) {
      this.head = null;
      return "Deleted linked list";
    }

    if (this.size() <= index) {
      return console.log("Error: Inputted index is larger than Linked List");
    }

    // If they choose the last node, use existing pop function
    if (this.size() === index) {
      this.pop();
    }

    previousNode = this.at(index - 1);
    nextNode = this.at(index + 1);
    previousNode.next = nextNode;
  }
}
