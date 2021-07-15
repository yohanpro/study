class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let curNode = this.head;
    while (curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  insertLast(value) {
    const newNode = new Node(value);
    let current;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      while (current.next) {
        current = current.next;
        current.next = newNode;
      }
    }
  }
  display() {
    let curNode = this.head;
    const displayStringArr = [];

    while (curNode) {
      displayStringArr.push(curNode.value);
      curNode = curNode.next;
    }
    console.log(displayStringArr);
  }

  size() {
    let curNode = this.head;
    let size = 0;

    while (curNode) {
      size += 1;
      curNode = curNode.next;
    }
    console.log('size: ',);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

linkedList.display();
linkedList.size();
