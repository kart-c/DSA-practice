/**
 * Node = {
 * 	value: number,
 * 	next: Node | null,
 * }
 */

/**
 * LinkedList
 * {
 * 	head: Node | null,
 * 	tail: Node | null,
 * 	length: number,
 * }
 *
 * Methods: {
 * 	push: Push new Node to end of the linkedList => Tail will be reassigned to this new Node
 * 	pop: Remove last Node from the linkedList => Tail will be reassigned to second last
 *	unshift: Add new Node to start of the linkedList => Head will be reassigned to this new Node
 * 	shift: Remove the first Node from the LL => Head will be reassigned to the second Node
 * 	get: Get a specific Node at given index
 * 	set: Set value of Node at any given index
 * 	insert: Insert a new Node at any given index
 * 	remove: Remove a Node at any given index
 * 	reverse: Reverse the linkedList
 * }
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		let temp = this.head;
		let pre = temp;
		if (this.length === 1) {
			temp = this.head;
			this.head = null;
			this.tail = null;
		} else {
			// need to iterate over the whole list to assign tail to the second last node
			while (temp.next) {
				pre = temp;
				temp = temp.next;
			}
			pre.next = null;
			this.tail = pre;
		}
		this.length--;
		return temp;
	}

	unshift(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (this.length === 0) return undefined;
		let temp = this.head;
		this.head = temp.next;
		temp.next = null;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
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
		let temp = this.get(index);
		if (temp) {
			temp.value = value;
			return this;
		}
		return undefined;
	}

	insert(value, index) {
		if (index < 0 || index > this.length) return undefined;
		const newNode = new Node(value);
		if (index === 0) return this.unshift(value);
		if (index === this.length) return this.push(value);

		let pre = this.get(index);
		newNode.next = pre.next;
		pre.next = newNode;
		this.length++;
		return this;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		// get previous node from node to be removed
		let pre = this.get(index - 1);
		// get next node from node to be removed
		let temp = this.get(index);
		pre.next = temp.next;
		temp.next = null;
		this.length--;
		return temp;
	}

	reverse() {
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		let pre = null;
		let next = temp.next;
		for (let i = 0; i < this.length; i++) {
			next = temp.next;
			temp.next = pre;
			pre = temp;
			temp = next;
		}
		return this;
	}
}

const myLinkedList = new LinkedList(2);
myLinkedList.push(3);
myLinkedList.unshift(1);
myLinkedList.insert(4, 3);
