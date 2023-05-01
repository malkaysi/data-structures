/*
 * Class / factory, containing a value property and a link to the nextNode, set both as null by default
 */
export default class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
