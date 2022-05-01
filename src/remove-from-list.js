const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
l = [3, 1, 2, 3, 4, 5];
k = 3;
function removeKFromList(l, k) {
  let current = l;
  let prev = null;

  while (current) {
    if (current.value === k) {
      prev ? (prev.next = current.next) : (prev = current.next);
      current = prev;
    } else {
      prev = current;
      current = current.next;
    }
  }
  console.log(l);
  console.log(current);
  console.log(prev);
  // return l;
}
removeKFromList(l, k);
// this.remove = function (element) {
//   var currentNode = head;
//   var previousNode;
//   if (currentNode.element === element) {
//     head = currentNode.next;
//   } else {
//     while (currentNode.element !== element) {
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//     }

//     previousNode.next = currentNode.next;
//   }

//   length--;
// };

module.exports = {
  removeKFromList,
};
