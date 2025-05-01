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
    insetAt(pos, val) {

        if (pos < 0 || pos > this.length) {
            throw new Error("Invalid position!!")
        }

        // insert at first
        if (pos === 0) {
            this.prepend(val);
            this.length++
            return true
        }

        // insert at last means after last element - if length is 4 then last element index is 3 and we need to append after that index which is 4
        if (pos === this.length) {
            this.append(val);
            this.length++
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


newLinkList.insetAt(2, 78)
// list after insertion
console.log(JSON.stringify(newLinkList, null, 2))

