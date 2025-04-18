function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
        console.log(str.charCodeAt(i))
    }
    return hash;
  }
  
//   console.log(simpleHash("abc")); // 294
  

const m = new Map()
const a = { id: 1 }
const b = { id: 2 }
m.set(a, 1)
m.set(b, 10)
