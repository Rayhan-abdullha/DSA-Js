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
            const temp = this.data[i]
            if (temp === item) {
                delete this.data[i]
                flag = true
                return
            }
        }
        if (!flag) {
            console.log(item, ' is not found')
        }
    }
    deleteItemByIndex(idx) {
        const item = this.data[idx]
        if (!item) {
            console.log(idx, ' is not available')
            return idx
        }
        delete this.data[idx]
        return idx
    }
    get() {
        console.log(this)
    }
}
const arr = new StaticArray()
arr.append(10)
arr.append(20)
arr.shift()
arr.append(30)
// arr.append(40)
// arr.append(50)
arr.pop()
arr.unshift(1001)
arr.deleteItemByIndex(2)
arr.deleteItem(20)
arr.get()
