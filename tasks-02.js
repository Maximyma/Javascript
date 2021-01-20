https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(numbers){
return numbers.map(number => number * 2)
}https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function(list){
    
    return Math.min (...list);
}

const max = function(list){
    
    return Math.max (...list);
}https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U')
}https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive (arr) {
  for (let i=1; i<arr.length; i++) 
    if (arr[i-1] + 1 !== arr[i]) 
      return arr [i]
     return null;
}
