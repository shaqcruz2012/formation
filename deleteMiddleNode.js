// Prompt
// Given a linked list, delete the middle node. If the list is even length, 
// delete the node at the start of the second half of the list.

/*
  * You may assume the node class is:
  * class LLNode {
  *   constructor(value, next = null) {
  *     this.value = value;
  *     this.next = next;
  *   }
  * }
  */
function deleteMiddleNode(head) {
  if (!head || !head.next) {
    return;
  }

  let slow = head;
  let fast = head;
  let prev;

  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (fast) {
    prev.next = slow.next;
  } else {
    prev.next = slow;
  }
}

// This algorithm uses two pointers, a slow pointer and a fast pointer. The fast pointer moves twice as fast as the slow pointer. This means that when the fast pointer reaches the end of the list, the slow pointer will be at the middle of the list.

// If the fast pointer reaches the end of the list, it means the list has an even number of elements and the node at the start of the second half of the list is deleted, otherwise, the node at the middle of the list is deleted.

// It's important to note that in this implementation, the head node is not deleted, as it does not have a previous node. If the head node needs to be deleted, a separate case for it should be handled.