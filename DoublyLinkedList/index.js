/**
 * Node {
 *  value: number,
 *  next: Node | null,
 *  prev: Node | null,
 * }
 */

/**
 * Doubly LinkedList
 * {
 *  this.head = Node | null,
 *  this.tail = Node | null,
 *  this.length = Node | null,
 * }
 */

/**
 * push - push a new Node at the end of the list
 * pop - remove last Node from the list - Unlike LL pop here is O(1), in LL it's O(n)
 * shift - remove first Node from the list
 * unshift - add a new Node at the start of the list
 * get: Get a specific Node at given index
 * set: Set value of Node at any given index
 * insert: Insert a new Node at any given index
 * remove: Remove a Node at any given index
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		const temp = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}
		temp.next = null;
		temp.prev = null;
		this.length--;
		return temp;
	}

	unshift(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (this.length === 0) return undefined;
		const temp = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
		}
		temp.next = null;
		temp.prev = null;
		this.length--;
		return temp;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}
		return temp;
	}

	set(value, index) {
		if (index < 0 || index >= this.length) return undefined;
		const temp = this.get(index);
		temp.value = value;
		return this;
	}

	insert(value, index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return this.unshift(value);
		if (index === this.length) return this.push(value);

		const newNode = new Node(value);

		const pre = this.get(index - 1);
		const temp = this.get(index);

		pre.next = newNode;
		newNode.prev = pre;
		temp.pre = newNode;
		newNode.next = temp;
		this.length++;
		return this;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift(value);
		if (index === this.length - 1) return this.pop(value);

		const temp = this.get(index);
		const prev = this.get(index - 1);

		prev.next = temp.next;
		temp.next.prev = temp.prev;
		temp.next = null;
		temp.prev = null;

		this.length--;
		return temp;
	}
}

const myDoublyLinkedList = new DoublyLinkedList(1);
