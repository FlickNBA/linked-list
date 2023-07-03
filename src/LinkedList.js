import { Node } from "./Node";

export class LinkedList {
  constructor() {
    this.listHead = null;
  }

  prepend(value) {
    let temp = null;
    if (this.listHead != null) temp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = temp;
  }

  append(value) {
    if (this.listHead == null) this.prepend(value);
    else {
      let temp = this.listHead;
    }
  }
}
