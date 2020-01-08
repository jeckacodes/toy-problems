
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function() {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  var node = this;
  var ancestor = node;
  if (child1 === child2) {
    return child1;
  } else if (node.children.includes(child1) || node.children.includes(child2)) {
    return node;
  } else if (!node.isDescendant(child1) || !node.isDescendant(child2)) {
    return null;
  }

  function helper(root) {
    for (let ele of root.children) {
      if (ele.isDescendant(child1) && ele.isDescendant(child2)) {
        ancestor = ele;
        helper(ele);
      }
    }
  }
  helper(node);
  return ancestor;
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(target) {
  // start with THIS node and find a path to target
  var node = this;
  var result = [node];
  debugger;
  if (!this.isDescendant(target)) {
    return null;
  } else if (this === target) {
    return [target];
  }
  function helper(node, target, result) {
    for (let ele of node.children) {
      result.push(ele);
      if (ele === target) {
        return result;
      } else {
        helper(ele, target, result)
      }
    }
  }
  helper(node, target, result);
  return result;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

var grandma = new Tree();
var mom = new Tree();
grandma.addChild(mom);
var me = new Tree();
var potato = new Tree();
mom.addChild(me);
console.log(grandma.getAncestorPath(me)); // => [grandma, mom, me]
console.log(grandma.getAncestorPath(potato)); // => null
console.log(grandma.getClosestCommonAncestor(grandma)); // => grandma
