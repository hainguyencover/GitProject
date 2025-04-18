function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    }

    let n = (x2 - x1) / (v1 - v2);
    if (n >= 0 && Number.isInteger(n)) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(2, 1, 1, 2))
// int x1, int v1 : vị trí bắt đầu và khoảng cách nhảy của kangaroo 1
// int x2, int v2 : vị trí bắt đầu và khoảng cách nhảy của kangaroo 2


// x1:0 v1:2 x2:5 v2:3
// x1:0 v1:3 x2:4 v2:2