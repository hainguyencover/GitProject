function migratoryBirds(arr) {
    // Write your code here
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count1++;
        } else if (arr[i] === 2) {
            count2++;
        } else if (arr[i] === 3) {
            count3++;
        } else if (arr[i] === 4) {
            count4++;
        } else if (arr[i] === 5) {
            count5++;
        }
    }
    let maxCount = count1;
    let maxType = 1;

    if (count2 > maxCount) {
        maxCount = count2;
        maxType = 2;
    }
    if (count3 > maxCount) {
        maxCount = count3;
        maxType = 3;
    }
    if (count4 > maxCount) {
        maxCount = count4;
        maxType = 4;
    }
    if (count5 > maxCount) {
        maxCount = count5;
        maxType = 5;
    }
    return maxType;
}

migratoryBirds([1, 1, 2, 2, 3])
migratoryBirds([1, 4, 4, 4, 5, 3])
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])

