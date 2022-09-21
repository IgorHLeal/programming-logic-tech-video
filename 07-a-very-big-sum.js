const array = [1, 2, 3, 4, 5];

// Reduce
function aVeryBigSum(ar) {
  // Write your code here
  let sum = ar.reduce((prev, curr) => prev + curr)
  return sum;
}

// Loop For
/* function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let index = 0; index < ar.length; index += 1) {
    sum += ar[index];
  }
  return sum;
} */

console.log(aVeryBigSum(array));