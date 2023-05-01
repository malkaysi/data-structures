// LinkedList will contain multiple Nodes
// When you create a LinkedList, you'll add a Node to it
// The Node will have a value and next

import LinkedList from "./LinkedList.js";

let linkedList = new LinkedList();

linkedList.prepend("1");
linkedList.append("2");
linkedList.append("6");
linkedList.append("3");
linkedList.prepend("5)");
linkedList.header();
console.log({ size: linkedList.size() });
linkedList.tail();
linkedList.at(4);
linkedList.pop();
console.log({ size: linkedList.size() });

// console.log(linkedList);
// console.log(linkedList.size());
