function miniMaxSum(arr) {

  let sum = arr.reduce((prev, curr) => prev + curr);
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);

  console.log((sum - maxValue) + ' ' + (sum - minValue));

  /*
  Tentativa mal sucedida:
  let array = [];
  for (let index = 0; index < arr.length; index += 1) {
    arr.slice(1);
    array.push(sum += arr[index]);
  } */

}

miniMaxSum([1, 2, 3, 4]);