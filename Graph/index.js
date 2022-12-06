class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (this.adjacencyList[vertex]) return false;
		this.adjacencyList[vertex] = [];
		return true;
	}

	addEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1].push(vertex2);
			this.adjacencyList[vertex2].push(vertex1);
			return true;
		}
		return false;
	}

	removeEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((ele) => ele !== vertex2);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((ele) => ele !== vertex1);
			return true;
		}
		return false;
	}

	removeVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			while (this.adjacencyList[vertex].length) {
				const temp = this.adjacencyList[vertex].pop();
				this.removeEdge(vertex, temp);
			}
			delete this.adjacencyList[vertex];
			return true;
		}
		return false;
	}
}

const graph = new Graph();
