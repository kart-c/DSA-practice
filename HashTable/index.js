/**
 * HashTable following Seperate Chaining
 * HashTable = {
 *  dataMap: Array
 * }
 *
 */

class HashTable {
	constructor(length = 7) {
		this.dataMap = new Array(length);
	}

	// underscore indicates other developers, this function is to be used only by other functions and not to be invoked directly
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			// create a hash ranging from 0 - length
			// e.g. if length is seven hash will be from 0 to 6
			hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
		}
		return hash;
	}

	set(key, value) {
		const index = this._hash(key);
		if (this.dataMap[index]) {
			this.dataMap[index].push([key, value]);
		} else {
			this.dataMap[index] = [[key, value]];
		}
		return this;
	}

	get(key) {
		const index = this._hash(key);
		const currentAddress = this.dataMap[index];
		if (currentAddress) {
			for (let i = 0; i < currentAddress.length; i++) {
				if (currentAddress[i][0] === key) {
					return currentAddress[i][1];
				}
			}
		}
		return undefined;
	}

	keys() {
		const result = [];
		for (let i = 0; i < this.dataMap.length; i++) {
			const currentAddress = this.dataMap[i];
			if (currentAddress) {
				for (let j = 0; j < currentAddress.length; j++) {
					result.push(currentAddress[j][0]);
				}
			}
		}
		return result;
	}
}

const myHT = new HashTable();
