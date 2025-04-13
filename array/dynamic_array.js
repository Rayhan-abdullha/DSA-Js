// Static Array

class StaticArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    } // O(1)
    pop() {
        if (!this.length) {
            console.log('Array is empty!')
            return
        }
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }// O(1)
    shift() {
        const firstItem = this.data['0']
        for (let i = 0; i < this.length; i++){
            const temp = this.data[i + 1]
            this.data[i] = temp
        }
        delete this.data[this.length - 1]
        this.length--
        return firstItem
    }// O(1)
    unshift(item) {
        if (!item) {
            console.log('item is required!')
            return
        }
        if (this.length === 0) {
            this.data['0'] = item
            this.length++
            return item
        }
        for (let i = this.length-1; i >= 0; i--){
            const temp = this.data[i]
            this.data[i+1] = temp
        }
        this.length++
        this.data['0'] = item
        return item
    } // O(n)
    deleteItem(item) {
        let flag = false
        for (let i = 0; i < this.length; i++){
            if (this.data[i] === item) {
                this.shiftItemByIndex(i)
                flag = true
                break
            }
        }
        if (!flag) {
            console.log('Item not found!')
            return item
        }
    } // O(n)
    deleteItemByIndex(idx) {
        if (idx < 0 || idx >= this.length) {
            console.log('Index is out of range!')
            return
        }
        this.shiftItemByIndex(idx)
    } // O(n)
    shiftItemByIndex(idx) {
        delete this.data[idx]
        for (let i = idx; i < this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    } // O(n)
    get() {
        console.log(this)
    } // O(1)
    print() {
        if (this.length === 0) {
            console.log('Array is empty!')
            return
        }
        for (let i = 0; i < this.length; i++){
            console.log(this.data[i])
        }
    }
}
const arr = new StaticArray()
// arr.push(10)
// arr.push(20)
// arr.shift()
// arr.push(30)
// arr.push(40)
// arr.push(50)
// arr.pop()
// arr.unshift(1001)
// arr.deleteItemByIndex(0)
// arr.deleteItem(20)
arr.print()
arr.get()
