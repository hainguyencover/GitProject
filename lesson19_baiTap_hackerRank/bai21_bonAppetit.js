function bonAppetit(bill, k, b) {
    // Write your code here
    let sum = 0;
    let x;
    let result;
    for (let i = 0; i < bill.length; i++) {
        if (k !== bill[k]) {
            sum += bill[i];
        }
    }
    x = (sum - bill[k]) / 2;
    if (x === b) {
        result = "Bon Appetit"
    } else {
        result = b - x;
    }
    console.log(result);
}

bonAppetit([3, 10, 2, 9], 1, 12)
bonAppetit([3, 10, 2, 9], 1, 7)

