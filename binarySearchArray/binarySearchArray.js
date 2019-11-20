/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target, indexAdj) {
    // find midpoint of array
    // if midpoint = target, hooray you've won!
    // else if midpoint is less than target
    //   repeat with lower half of array
    // else if midpoint is greater than target
    //   repeat with upper half of array
    // have index adjuster to keep track of location within original array
    var indexAdj = indexAdj || 0;
    if (array.length === 0) {
      return null;
    }
    var midpoint = Math.floor(array.length/2); //midpoint is an index
    if (array[midpoint] === target) {
        return midpoint + indexAdj;
    } else if (array[midpoint] < target) {
        return binarySearch(array.slice(midpoint + 1), target, midpoint + indexAdj + 1);
    } else if (array[midpoint] > target) {
        return binarySearch(array.slice(0, midpoint), target, indexAdj);
    }
};

