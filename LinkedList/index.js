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
}

const myLinkedList = new LinkedList(2);
