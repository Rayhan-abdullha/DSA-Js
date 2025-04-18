// class HashTable {
//     constructor(size) {
//         this.data = new Array(size)
//     }
//     _hash(key) {
//         let hash = 0
//         for (let i = 0; i < key.length; i++){
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length
//         }
//         return hash
//     }
//     set(key, value) {
//         let address = this._hash(key)
//         if (!this.data[address]) {
//             this.data[address] = []
//         }
//         this.data[address].push([key, value])
//         return this.data
//     }
//     get(key) {
//         let address = this._hash(key)
         
//         if ()
//         return this.data[address]
//     }
//     print() {
//         console.log(this)
//     }
// }
// const hashTable = new HashTable(50)
// hashTable.set('name', 'rayhan')
// hashTable.set('asdf', 'rayhand')
// console.log(hashTable.get('name'))


class Hash {
    constructor(V) {
        this.BUCKET = V; // No. of buckets
        this.table = new Array(V); // Pointer to an array containing buckets
        for (let i = 0; i < V; i++) {
            this.table[i] = new Array();
        }
    }

    // inserts a key into hash table
    insertItem(x) {
        const index = this.hashFunction(x);
        this.table[index].push(x);
    }

    // deletes a key from hash table
    deleteItem(key) {
        // get the hash index of key
        const index = this.hashFunction(key);

        // find the key in (index)th list
        const i = this.table[index].indexOf(key);

        // if key is found in hash table, remove it
        if (i !== -1) {
            this.table[index].splice(i, 1);
        }
    }

    // hash function to map values to key
    hashFunction(x) {
        return x % this.BUCKET;
    }

    // function to display hash table
    displayHash() {
        for (let i = 0; i < this.BUCKET; i++) {
            let str = `${i}`;
            for (let j = 0; j < this.table[i].length; j++) {
                str += ` --> ${this.table[i][j]}`;
            }
            console.log(str);
        }
    }
}

// Driver program 
const a = [15, 11, 27, 8, 12];
const n = a.length;

// insert the keys into the hash table
const h = new Hash(7);   // 7 is count of buckets in hash table
for (let i = 0; i < n; i++) {
    h.insertItem(a[i]);
}

// display the Hash table
h.displayHash();
