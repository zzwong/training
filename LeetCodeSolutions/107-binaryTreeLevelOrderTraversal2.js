// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * A recursive approach to the binary tree level order traversal problem
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = root => {
  if (!root) return [];
  let children = [root.left, root.right].filter(x => !!x);
  let result = [[root.val]];

  // recurse over the children in each row,
  // each time pushing to the beginning of the array (prepend, unshift, push(0, el))
  const levelOrderRow = nodes => {
    if (nodes.length == 0) return result;

    // reduce the values from the current level of nodes
    let vals = nodes.reduce((values, curr) => {
      if (!!curr && curr.hasOwnProperty('val')) {
        values.push(curr.val);
      }
      return values;
    }, []);

    // prepend to the beginning of the result array
    result.unshift(vals);

    // reduce the children of the current level of nodes
    let children = [].concat.apply(
      [],
      nodes.reduce((children, curr) => {
        if (!!curr && !!curr.left) {
          children.push(curr.left);
        }
        if (!!curr && !!curr.right) {
          children.push(curr.right);
        }
        return children;
      }, [])
    );

    // recurse over the children
    return levelOrderRow(children);
  };

  // root children non null
  if (children.length > 0) {
    return levelOrderRow(children);
  }
  return result;
};
