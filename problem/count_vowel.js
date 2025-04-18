function countVowels(str) {
    console.time('start');

    let count = 0
    for (let i = 0; i < str.length; i++){
        const char = str[i]
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }
    }
    console.timeEnd('start')
    return count
}
console.log(countVowels('mississios'))

/**
 * 
 * @param {string} str 
 * @returns 
 */

function findVowels1(str) {
    console.time('start');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++
      }
    }
    console.timeEnd('start');
    return count;
  }
  
  // Example usage:
  console.log(findVowels1("mississios"));
