// Static Array

class StaticArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    append(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }
    pop() {
        if (!this.length) {
            console.log('Array is empty!')
            return
        }
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    } // o(1)
    shift() {
        const firstItem = this.data['0']
        for (let i = 0; i < this.length; i++){
            const temp = this.data[i + 1]
            this.data[i] = temp
        }
        delete this.data[this.length - 1]
        this.length--
        return firstItem
    }// o(1)
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
    }
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
    }
    deleteItemByIndex(idx) {
        if (idx < 0 || idx >= this.length) {
            console.log('Index is out of range!')
            return
        }
        this.shiftItemByIndex(idx)
    }
    shiftItemByIndex(idx) {
        delete this.data[idx]
        for (let i = idx; i < this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }
    get() {
        console.log(this)
    }
}
const arr = new StaticArray()
arr.append(10)
arr.append(20)
// arr.shift()
arr.append(30)
// arr.append(40)
// arr.append(50)
// arr.pop()
// arr.unshift(1001)
// arr.deleteItemByIndex(0)
arr.deleteItem(20)
arr.get()
