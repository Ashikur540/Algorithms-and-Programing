class CustomNode {

    constructor(data) {
        this.data = data
        this.next = null
    }
}



class CircularLinkedList {

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
            this.tail.next = this.head; // connect tail to head for circular
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
            this.tail.next = this.head; // connect tail to head for circular
            return
        }
        newNode.next = this.head // connect tail to head for circular
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
        // Case: only one node
        if (this.head === this.tail && this.head.data === data) {
            this.head = null;
            this.tail = null;
            this.length--;
            return true;
        }

        // Case: head needs to be removed
        if (this.head.data === data) {
            this.head = this.head.next;
            this.tail.next = this.head;
            this.length--;
            return true;
        }

        // loop the list to find the data and replace that with its next data
        let current = this.head;
        // last element's next will be null so we are looping until last

        do {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.length--;

                if (this.length === 0) {
                    this.head = null;
                    this.tail = null;
                } else if (this.tail.data === data) {
                    this.tail = current;
                    this.tail.next = this.head;
                }

                return true;
            }

            current = current.next;
        } while (current.next !== this.head);

        return false;

    }


    removeAt(index) {
        // check valid index
        if (index < 0 || index >= this.length) {
            throw new Error("Invalid operation!");
        }

        this.length--;
        // if first element
        if (index === 0) {
            this.head = this.head.next;
            this.tail.next = this.head;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return true;
        }

        let current = this.head;
        let prev = null;

        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
        }

        prev.next = current.next;

        if (current === this.tail) {
            this.tail = prev;
        }

        return true;
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
        if (!this.head) return false;

        let current = this.head;
        do {
            if (current.data === data) return true;
            current = current.next;
        } while (current !== this.head);

        return false;
    }


    // Clear the list
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Get length of list
    getlength() {
        return this.length;
    }

    // Check if list is empty
    isEmpty() {
        return this.length === 0;
    }

    // Convert list to array
    toArray() {
        const array = [];
        if (!this.head) return array;

        let current = this.head;
        // push the head first
        do {
            array.push(current.data);
            current = current.next;
        } while (current !== this.head); // then stop if visit again

        return array;
    }


}


const newLinkList = new CircularLinkedList()

newLinkList.prepend(10)
newLinkList.prepend(20)
newLinkList.prepend(30)

newLinkList.append(5)
newLinkList.append(2)

// Linklist structure
// console.log(JSON.stringify(newLinkList, null, 2)) // directly it will not possible cz it creates infinite loop
console.log(JSON.stringify(newLinkList.toArray(), null, 2));


// see head and tail - means its functioning like a linked list
console.log(newLinkList.head.data)
console.log(newLinkList.tail.data)



newLinkList.insertAt(2, 40)
newLinkList.insertAt(6, 88)
newLinkList.insertAt(5, 50)

// // list after insertion
console.log("After insertion ", JSON.stringify(newLinkList.toArray(), null, 2))

// console.log(newLinkList.remove(78))
console.log(newLinkList.remove(30))
console.log(newLinkList.remove(88))

console.log("After remove~ ", JSON.stringify(newLinkList.toArray(), null, 2))
// console.log(newLinkList.toArray())

