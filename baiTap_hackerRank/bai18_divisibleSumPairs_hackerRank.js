function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            sum = ar[i] + ar[j];
            if (sum % k === 0) {
                count++;
            }
        }
    }
    console.log(count);
    return count;
}

divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])
divisibleSumPairs(6, 3, [1,3,2,6,1,2])


// [1,3,2,6,1,2]
// 3