class Stack {
    constructor(size) {
        this.size = size
        this.arr = []
        this.top = -1
    }
    peek() {
        return this.arr[this.top]
    }
    push(item) {
        if (this.isFull()) {
            console.log('stack is full')
            return
        }
        this.top++
        this.arr[this.top] = item
        return item
    }
    pop() {
        if (this.isEmpty()) {
            console.log('stack is empty')
            return
        }
        const item = this.arr[this.top]
        this.arr.length--
        this.top--
        return item
    }
    size1() {
        return this.arr.length
    }
    isEmpty() {
        return this.arr.length === 0
    }
    isFull() {
        return this.arr.length === this.size       
    }
    print() {
        console.log(this.arr)
    }
}
const s = new Stack(5)
s.push(10)
s.push(20)
s.push(30)
s.push(8)
// s.pop()
console.log(s.peek())
s.print()
