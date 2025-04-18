function breakingRecords(scores) {
    // Write your code here
    let high = scores[0];
    let low = scores[0];
    let countHigh = 0;
    let countLow = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > high) {
            high = scores[i];
            countHigh++;
        } else if (scores[i] < low) {
            low = scores[i];
            countLow++;
        }
    }
    console.log(countHigh, countLow);
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])
