/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = root => {
  let result = [];
  if (!root) return result;

  inorder(root.left, result);
  result.push(root.val);
  inorder(root.right, result);

  return result;
};

const inorder = (root, traversed) => {
  if (!root) return;

  inorder(root.left, traversed);
  traversed.push(root.val);
  inorder(root.right, traversed);
};
