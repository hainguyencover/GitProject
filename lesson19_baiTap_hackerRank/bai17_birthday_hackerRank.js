function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        const segment = s.slice(i, i + m);
        const sum = segment.reduce((acc, val) => acc + val, 0);
        if (sum === d) {
            count++;
        }
    }
    console.log(count);
    return count;
}

birthday([1, 2, 1, 3, 2], 3, 2)
birthday([1, 1, 1, 1, 1], 3, 2)
birthday([4], 4, 1)

// 1 2 1 3 2
// 3 2


// 1 1 1 1 1 1
// 3 2


// 4
// 4 1