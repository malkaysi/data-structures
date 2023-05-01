// Creating LinkedList instance to test out functions and Nodes

import LinkedList from "./LinkedList.js";

let linkedList = new LinkedList();

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

linkedList.tail();
linkedList.at(4);
linkedList.pop();

console.log({ updatedSize: linkedList.size() });
