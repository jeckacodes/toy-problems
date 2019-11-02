/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value) {
  return { value: value, next: null, visited: false };
};

var hasCycle = function(linkedList, prevLength) {
  // Recursive solution - not constant space
  // if (linkedList.next === null) {
  //   return false;
  // } else if (linkedList.visited === false) {
  //   linkedList.visited = true;
  //   return hasCycle(linkedList.next);
  // } else if (linkedList.visited === true) {
  //   return true;
  // }

  var currentNode = linkedList;
  while (currentNode.next !== null) {
    if (currentNode.visited === true) {
      return true;
    } else if (currentNode.visited === false) {
      currentNode.visited = true;
    }
    currentNode = currentNode.next;
  }
  return false;

};