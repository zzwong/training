class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Singularly linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * Traverse over linked list and remove the node if found
   *
   * @param {number} val
   * @return {boolean} - deletion result
   */
  remove(val) {
    if (!this.head) {
      return false;
    }

    // Node to be removed is at the head
    let n = this.head;
    if (n.val === val) {
      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.size--;
      return true;
    }

    while (!!n.next && n.next.val != val) {
      n = n.next;
    }

    if (n.next != null) {
      if (n.next == this.tail) {
        this.tail = n;
      }
      n.next = n.next.next;
      this.size--;
      return true;
    }

    return false;
  }

  /**
   *
   * @param {number} val
   * @returns {boolean} - if val found
   */
  find(val) {
    let n = this.head;

    while (!!n) {
      if (n.val == val) {
        return true;
      }
      n = n.next;
    }
    return false;
  }

  *traverse() {
    let n = this.head;

    while (!!n) {
      yield n.val;
      n = n.next;
    }
  }
}

const assert = require('assert');

const a = new LinkedList();
assert.strictEqual(a.size, 0, 'Testing initial size of linked list - FAILED - should be 0');

// INSERT & REMOVAL  - valid
a.insert(1);
assert.strictEqual(a.size, 1), 'Testing size of linked list - FAILED - should be 1';
a.remove(1);
assert.strictEqual(a.size, 0);
a.insert(3);
a.insert(5);
assert.strictEqual(a.size, 2);

// REMOVAL - invalid
assert.strictEqual(false, a.remove(100));

assert.strictEqual(true, a.find(5));
assert.strictEqual(false, a.find(50));

let aArr = [];
for (let node of a.traverse()) {
  aArr.push(node);
}
assert.deepEqual([3, 5], aArr, 'Testing internal values in linked list - FAILED');

console.log('Hurray! All test cases pass.');

module.exports = LinkedList;
