// Stack is LIFO - last element to get on top will be the first which gets removed

/**
 * Node {
 *  value: number,
 *  next: Node | null,
 * }
 */

/**
 * Stack {
 *  top: Node | null,
 *  length: number
 * }
 */

/**
 * push - push an element at the top the Stack
 * pop - pop an element from the top of the Stack
 * peek - return the topmost element from the Stack without removing it
 * clear - remove all elements from the Stack
 * isEmpty - return boolean - if the stack is empty or not
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		const newNode = new Node(value);
		this.top = newNode;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;
		this.length++;
		return this;
	}

	pop() {
		if (!this.top) return undefined;
		const temp = this.top;
		this.top = temp.next;
		temp.next = null;
		this.length--;
		return temp;
	}

	peek() {
		const temp = this.top;
		return temp;
	}

	clear() {
		this.top = null;
		this.length = 0;
		return this;
	}

	isEmpty() {
		if (this.length === 0) return true;
		return false;
	}
}

const myStack = new Stack(2);
