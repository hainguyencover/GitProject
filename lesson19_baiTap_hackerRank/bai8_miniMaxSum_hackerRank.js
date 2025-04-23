function miniMaxSum(arr) {
    // Write your code here
    let total = arr.reduce((num, acc) => num + acc, 0);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let minSum = total - min;
    let maxSum = total - max;
    console.log(`${maxSum} ${minSum}` )
}

miniMaxSum([1, 2, 3, 4, 5]);

