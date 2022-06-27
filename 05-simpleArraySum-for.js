const array = [1, 2, 3];

function simpleArraySum(ar) {
  // Write your code here
  let sum = 0;
  for (let index = 0; index < ar.length; index += 1) {
    sum = sum + ar[index];
  }
  return sum;
}

console.log(simpleArraySum(array));