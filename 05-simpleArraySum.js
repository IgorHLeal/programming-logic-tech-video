function simpleArraySum(arr) {
  let soma = 0;
  for (let index = 0; index < arr.length; index += 1) {
    soma = soma + arr[index];
  }
  return soma;
}

console.log(simpleArraySum([1, 2, 3, 4]));