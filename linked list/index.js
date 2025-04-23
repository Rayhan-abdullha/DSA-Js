class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(val) {
        this.head = {
            value: val,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(val) {
        const node = new Node(val)
        this.tail.next = node
        this.tail = node
        this.length++
        return this
    }
    print() {
       console.log(this.head)
    }
}
const list = new LinkedList(1)
list.append(41)
list.append(42)
// list.print()