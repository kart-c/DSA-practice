/**
 * Full tree - every Node points to either 0 or 2 Nodes
 * Perfect tree - Tree is full tree and both LHS and RHS have same number of trees
 * Parent Node - Every parent will have Nodes
 * Child Node - Every child Node has a single parent. Can have a sibling Node
 * Leaf Node - Node without children is called a leaf Node
 * Root Node - Topmost level parent Node
 */

/**
 * Node = {
 *  value: number,
 *  left: Node | null,
 *  right: Node | null,
 * }
 */

/**
 * Insert - Insert a Node in the binary tree
 * Contains - Return true or false whether a Node value exists
 * Minimum - Return the Node with minimum value
 */

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let temp = this.root;
		while (true) {
			// Not considering repeated values in this example, can keep a count value in Node class if want to consider repeated Node value
			if (temp.value === value) return undefined;
			if (value < temp.value) {
				if (!temp.left) {
					temp.left = newNode;
					return this;
				}
				temp = temp.left;
			} else {
				if (!temp.right) {
					temp.right = newNode;
					return this;
				}
				temp = temp.right;
			}
		}
	}

	contains(value) {
		if (!this.root) return false;
		let temp = this.root;
		while (true) {
			if (temp.value === value) return true;
			if (value < temp.value) {
				if (!temp.left) return false;
				if (temp.left.value === value) return true;
				temp = temp.left;
			} else {
				if (!temp.right) return false;
				if (temp.right.value === value) return true;
				temp = temp.right;
			}
		}
	}

	minimum(currentNode) {
		while (!currentNode.left) {
			currentNode = currentNode.left;
		}
		return currentNode;
	}
}

const myBST = new BST();
myBST.insert(48);
