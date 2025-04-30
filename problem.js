class Node{
    constructor(val) {
        this.value = val
        this.next = null
    }
}
class NodeList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const node = new Node(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }
    unshift(val) {
        const node = new Node(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            const temp = this.head
            node.next = temp
            this.head = node
        }
        this.length++
        return this
    }
    print() {
        let temp = this.head
        while (temp) {
            console.log(temp.value)
            temp = temp.next
        }
    }
    removeVal(val) {
        let temp = this.head
        let flag = false
        while (!flag) {
            if (temp.val === val) {
                flag = true
                this.head = null
                this.tail = null
            } else if (temp.next?.value === val) {
                flag = true
                temp.next = temp.next.next

            }
            temp = temp.next
        }
        if (flag) {
            console.log(val, 'is found!')
        } else {
            console.log(val, 'is not found')
        }
    }
}
const list = new NodeList()
list.push(1)
list.push(2)
list.push(3)
list.unshift(4)
list.removeVal(4)

list.print()

