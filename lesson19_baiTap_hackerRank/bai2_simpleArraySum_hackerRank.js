function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for (const num of ar) {
        sum += num;
    }
    return sum;
}

console.log(simpleArraySum([1,2,3]))
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))