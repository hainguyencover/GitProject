function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles);
    let count = candles.filter(num => num === max).length;
    console.log(count);
}

birthdayCakeCandles([4, 4, 1, 3])