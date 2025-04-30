class Stack {
    #items = [];
  
    push(item)       { this.#items.push(item); }
    pop()            { return this.#items.pop(); }
    peek()           { return this.#items[this.#items.length - 1]; }
    isEmpty()        { return this.#items.length === 0; }
    size()           { return this.#items.length; }
  
    // for…of support
    *[Symbol.iterator]() {
      for (let i = this.#items.length - 1; i >= 0; i--) yield this.#items[i];
    }
  }
const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

for (let item of stack) {
    console.log(item);
}