class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(vals = []) {
    this.root = null;

    if (vals) {
      vals.forEach(v => this.add(v));
    }
  }

  add(val) {
    const n = new TreeNode(val);

    if (!this.root) {
      this.root = n;
      return;
    }

    let curr = this.root;
    while (curr) {
      if (val < curr.val) {
        // left
        if (!curr.left) {
          curr.left = n;
          break;
        } else {
          curr = curr.left;
        }
      } else {
        // right
        if (!curr.right) {
          curr.right = n;
          break;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  remove(val) {
    // traverse tree until node found
  }

  get inorder() {
    if (!this.root) return [];

    let arr = [];

    (function inorder(node) {
      if (node) {
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
      }
    })(this.root);
    return arr;
  }

  get preorder() {
    if (!this.root) return [];
    let arr = [];
    (function preorder(node) {
      if (node) {
        arr.push(node.val);
        preorder(node.left);
        preorder(node.right);
      }
    })(this.root);
    return arr;
  }

  get postorder() {
    if (!this.root) return [];
    let arr = [];
    (function postorder(node) {
      if (node) {
        postorder(node.left);
        postorder(node.right);
        arr.push(node.val);
      }
    })(this.root);
    return arr;
  }

  get height() {
    if (!this.root) return 0;

    function _height(node) {
      if (!node) return 0;
      const leftHeight = _height(node.left);
      const rightHeight = _height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }

    return _height(this.root);
  }
}

const assert = require('assert');
console.log('Running tests....');

// insertion order ( 2, 1, 3) -->
//    2         h = 1
// 1     3      h = 2
const b = new BinarySearchTree();
b.add(2);
b.add(1);
b.add(3);

assert.strictEqual(2, b.height);

/**
 *               10                   h = 1
 *      2                  23         h = 2
 *  1       8         11        33    h = 3
 *             9                      h = 4
 */
const c = new BinarySearchTree([10, 2, 23, 8, 9, 11, 33, 1]);
assert.strictEqual(4, c.height);
assert.deepEqual([1, 2, 8, 9, 10, 11, 23, 33], c.inorder);
assert.deepEqual([10, 2, 1, 8, 9, 23, 11, 33], c.preorder);
assert.deepEqual([1, 9, 8, 2, 11, 33, 23, 10], c.postorder);
// console.log(c.preorder, c.postorder);

console.log('All tests pass');
