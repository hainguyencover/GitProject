function plusMinus(arr) {
    // Write your code here
    let countChan = 0;
    let countLe = 0;
    let countKhong = 0
    for (const num of arr) {
        if (num > 0) {
            countChan++;
        } else if (num < 0) {
            countLe++;
        } else {
            countKhong++;
        }
    }
    let sumChan = countChan / arr.length;
    let sumLe = countLe / arr.length;
    let sumKhong = countKhong / arr.length;

    console.log(sumChan);
    console.log(sumLe);
    console.log(sumKhong);

}

plusMinus([-4, 3, -9, 0, 4, 1])