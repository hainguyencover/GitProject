function getTotalX(a, b) {
    // Write your code here
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const lcm = (x, y) => (x * y) / gcd(x, y);
    const lcmA = a.reduce((acc, val) => lcm(acc, val));
    const gcdB = b.reduce((acc, val) => gcd(acc, val));
    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0) {
            count++;
        }
    }
    return count;
    // console.log(count)
}

getTotalX([2, 4], [16, 32, 96])
// n:2 m:3
// 2 4
// 16 32 96
