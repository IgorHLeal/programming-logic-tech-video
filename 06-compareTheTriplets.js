function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  
  for(let i = 0; i < 3; i += 1) {
    if (a[i] > b[i]) {
      alice += 1;
      console.log(`Alice recebe: ${alice} `);
    };

    if (a[i] < b[i]) {
      bob += 1;
      console.log(`Bob recebe: ${bob}`);
    }; 
  }
  
  let compare = [alice, bob];
  return compare;
}

compareTriplets([1, 2, 3], [3, 2, 1]);