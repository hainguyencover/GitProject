function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let line = " ".repeat(n - i) + "*".repeat(i);
        console.log(line);
    }
    for (let i = n; i >= 1; i--) {
        let line = " ".repeat(n - i) + "*".repeat(i);
        console.log(line);
    }
    for (let i = 1; i <= n; i++) {
        let line = " ".repeat(n) + "*".repeat(i);
        console.log(line);
    }
    for (let i = n; i >= 1; i--) {
        let line = " ".repeat(n) + "*".repeat(i);
        console.log(line);
    }

}

staircase(6)