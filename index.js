class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class NodeList {
    constructor(val) {
        this.head = new Node(val)
        this.tail = this.head
        this.length = 1
    }
    push(val) {
        const newNode = new Node(val)
        this.tail.next = newNode
        this.tail = this.tail.next
        this.length++
        return this
    }
    reverseList() { 
        let prev = null;
        let curr = this.head;

        while (curr !== null) {
            let nextTemp = curr.next; // Save next node
            curr.next = prev;         // Reverse current pointer
            prev = curr;              // Move prev forward
            curr = nextTemp;          // Move curr forward
        }
    
        console.log(prev)
    }
    print() {
        console.log(this)
    }
    printList() {
        let temp = this.head
        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }
}
const list = new NodeList(1)
list.push(2)
list.push(3)
// list.printList()
list.reverseList()