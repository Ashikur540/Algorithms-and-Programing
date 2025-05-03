class CustomNode {

    constructor(data) {
        this.data = data
        this.next = null
    }
}



class SinglyLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    prepend(data) {
        const newNode = new CustomNode(data)
        this.length++;
        //  in empty state
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        //  connect new node next to the previous head
        newNode.next = this.head;
        this.head = newNode;

    }


    append(data) {
        const newNode = new CustomNode(data);
        this.length++
        // empty case
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        this.tail = newNode
    }


    // insert at index
    insertAt(pos, val) {

        if (pos < 0 || pos > this.length) {
            throw new Error(`Invalid position = ${pos} for length = ${this.length}`)
        }

        // insert at first
        if (pos === 0) {
            this.prepend(val);
            return true
        }

        // insert at last means after last element - if length is 4 then last element index is 3 and we need to append after that index which is 4
        if (pos === this.length) {
            this.append(val);
            return true
        }

        // in between
        /* loop until to that position first, then just adjust connections
          suppose: 10 20 30 40 
          insert: 2, 78

          initially : c=10, p=null
          loop i-0 => p=10, c=20
          loop i-1 => p=20, c=30
          loop i-2 => not matched and we reached to the point**
            
          now just adjust connections 
        */
        let current = this.head; //initially
        let previous = null; //initially
        for (let i = 0; i < pos; i++) {
            previous = current
            current = current.next;
        }

        const newNode = new CustomNode(val)
        this.length++
        newNode.next = current
        previous.next = newNode
        return true;
    }

    // remove the first occurrence
    remove(data) {
        // id empty list
        if (!this.head) {
            throw new Error("Empty List! Invalid Operation!");
        }

        // if that data is first node or head
        if (this.head.data === data) {
            // replace the current head with next of the current head 
            this.head = this.head.next;
            this.length--;

            // if removed node was the tail
            if (!this.head.next) this.tail = current;
            return true
        }

        // loop the list to find the data and replace that with its next data
        let current = this.head;
        // last element's next will be null so we are looping until last
        while (current.next) {
            // as we already handled the first(head) we will look from the heads next
            if (current.next.data === data) {
                current.next = current.next.next
                this.length--;
                if (this.length === 0) this.tail = null
                return true
            }
            // if not found then progress
            current = current.next;

        }
        // codes comes here means we didn't find any so return false
        return false

    }


    removeAt(index) {
        // check valid
        if (index < 0 || index >= this.length) {
            throw new Error("Invalid operation!")
        }
        this.length--;

        //  first index
        if (index === 0) {
            this.head = this.head.next
            if (this.length === 1) this.tail = null; // assign tail for empty 
            return true
        }
        // last index or in between in both cases we need to loop to track the previous node
        else {
            let current = this.head;
            let prev = null
            for (let i = 0; i < this.length; i++) {
                prev = current
                current = current.next;
            }
            // connect the prev to current's next node which opts out current
            prev.next = current.next
            if (!current.next) {
                // if there is no element means removing last
                this.tail = prev
            }

        }
    }

    // Get data at specific position
	get(position) {
		if (position < 0 || position >= this.length) {
			return null;
		}

		let current = this.head;
		let index = 0;

		while (index < position) {
			current = current.next;
			index++;
		}

		return current.data;
	}

	// Check if list contains data
	contains(data) {
		let current = this.head;
		while (current) {
			if (current.data === data) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	// Clear the list
	clear() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Get length of list
	getLength() {
		return this.length;
	}

	// Check if list is empty
	isEmpty() {
		return this.length === 0;
	}

	// Convert list to array
	toArray() {
		const array = [];
		let current = this.head;
		while (current) {
			array.push(current.data);
			current = current.next;
		}
		return array;
	}

}


const newLinkList = new SinglyLinkedList()

newLinkList.prepend(10)
newLinkList.prepend(20)
newLinkList.prepend(30)

newLinkList.append(110)

// Linklist structure
// console.log(JSON.stringify(newLinkList, null, 2))

// see head and tail - means its functioning like a linked list
console.log(newLinkList.head.data)
console.log(newLinkList.tail.data)



newLinkList.insertAt(2, 98) // valid
newLinkList.insertAt(5, 78) // // invalid operation cz len is 4
newLinkList.insertAt(6, 88) // invalid operation cz len is 4

// list after insertion
console.log("After insertion ", JSON.stringify(newLinkList, null, 2))

console.log(newLinkList.remove(78))
console.log(newLinkList.remove(20))

console.log("After remove~ ", JSON.stringify(newLinkList, null, 2))
console.log(newLinkList.toArray())

