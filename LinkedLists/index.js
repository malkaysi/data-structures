// Creating LinkedList instance to test out functions and Nodes

import LinkedList from "./LinkedList.js";

let linkedList = new LinkedList();
linkedList.size();
linkedList.prepend("1");
linkedList.append("2");
linkedList.append("6");
linkedList.append("3");
linkedList.prepend("5");

let headerNode = linkedList.header();
console.log({ headerNode });

// Recursive function to display linked list values
console.log(linkedList.toString(headerNode));
console.log({ size: linkedList.size() });

// Tail node
linkedList.tail();

// Finding a node at a specific index of 4 (array sizing)
let indexNode = linkedList.at(4);
console.log({ indexNode });

// Deleting last node
linkedList.pop();

console.log({ updatedSize: linkedList.size() });

// Inserting a new node
linkedList.insertAt("555", 2);
