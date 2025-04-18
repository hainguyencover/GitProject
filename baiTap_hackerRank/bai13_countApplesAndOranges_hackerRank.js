function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let countApples = 0;
    let countOranges = 0;
    for (let i = 0; i < apples.length; i++) {
        let x = a + apples[i]
        if (x >= s && x <= t) {
            countApples++;
        }
    }
    console.log(countApples);
    for (let i = 0; i < oranges.length; i++) {
        let y = b + oranges[i]
        if (y >= s && y <= t) {
            countOranges++;
        }
    }
    console.log(countOranges);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
countApplesAndOranges(7, 10,4,12,[2, 3, -4],[3, -2, -4])

// s: điểm bắt đầu của vị trí ngôi nhà của Sam
// t : điểm kết thúc ngôi nhà của Sam
// a: vị trí cây táo
// b: vị trí cây cam
// apples: khoảng cách mà mỗi quả táo rơi khỏi cây
// oranges: khoảng cách mà mỗi quả cam rơi khỏi cây

// s:7 t:11
// a:5 b:15
// m:3 n:2
// apples:[-2,2,1]  oranges:[5,-6]

// s:7 t:10
// a:4 b:12
// m:3 n:3
// apples[2, 3, -4]  oranges[3, -2, -4]
