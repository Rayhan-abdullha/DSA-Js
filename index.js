// class HashTable {
//     constructor(len) {
//         this.data = new Array(len)
//     }

//     /**
//      *
//      * @param {string} key
//      */
//     _has(key) {
//         let s = 0
//         for (let i = 0; i < key.length; i++){
//             s = (s + key.codePointAt(i) * i) % this.data.length
//         }
//         return s
//     }
//     set(key, val) {
//         const a = this._has(key)
//         this.data.push([a, val])
//     }
//     print() {
//         console.log(this.data)
//     }
// }

// const hasT = new HashTable(10)
// hasT.set('name', 'rayhan')
// hasT.print()


