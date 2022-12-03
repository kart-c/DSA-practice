// Queue is FIFO - Added elements go to end, while the start one is removed first

/**
 * Node {
 *  value: number,
 *  next: Node | null,
 * }
 */

/**
 * Queue {
 *  end: Node | null,
 *  start: Node | null,
 *  length: number,
 * }
 */

/**
 * enqueue - push an element at the end the Queue
 * dequeue - pop an element from the end of the Queue
 * isEmpty - return boolean - if the stack is empty or not
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(value) {
		const newNode = new Node(value);
		this.end = newNode;
		this.start = newNode;
		this.length = 1;
	}

	enqueue(value) {
		const newNode = new Node(value);
		if (!this.end) {
			this.end = newNode;
			this.start = newNode;
		} else {
			this.end.next = newNode;
			this.end = newNode;
		}
		this.length++;
		return this;
	}

	dequeue() {
		if (!this.start) return undefined;
		const temp = this.start;
		if (this.length === 1) {
			this.end = null;
			this.start = null;
		} else {
			this.start = this.start.next;
			temp.next = null;
		}
		this.length--;
		return temp;
	}

	isEmpty() {
		if (this.length === 0) return true;
		return false;
	}
}

const myQueue = new Queue(2);
