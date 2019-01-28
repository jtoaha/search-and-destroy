'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  const storage = [];
  if (linkedlist.head === null && linkedlist.tail ===null) {
    return false
  } else if (linkedlist.head === linkedlist.tail) {
    return false
  } else {
    //linkedList

    let currentNode = linkedlist.head
    while (currentNode !== null && currentNode.next !== null) {
      if (!storage.includes(currentNode.next.value)) {
        storage.push(currentNode.next.value)
      } else { //if doesn't include
      return true;
      }
      // if ()
      currentNode = currentNode.next
    }

    return false;
  }


};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
