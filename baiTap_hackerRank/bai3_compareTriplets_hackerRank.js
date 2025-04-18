function compareTriplets(a, b) {
    let countA = 0;
    let countB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            countA++;
        } else if (a[i] < b[i]) {
            countB++;
        }
    }
    return [countA, countB];
}

console.log(compareTriplets([1, 2, 3], [4, 5, 6]));
console.log(compareTriplets([11, 2, 4], [4, 5, 6]));



