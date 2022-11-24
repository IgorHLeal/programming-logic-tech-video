function birthdayCakeCandles(candles) {
  let maxHeight = Math.max(...candles);
  let maxHeightCount = 0;

  for(let index = 0; index < candles.length; index += 1){
    if (candles[index] === maxHeight){
        maxHeightCount += 1;
    }
  }
  console.log(maxHeightCount);
  return maxHeightCount;
}

birthdayCakeCandles([4, 4, 1, 3]);
