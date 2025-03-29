// Bài 1: In dãy Fibonaci
// let n;
// let a = 0, b = 1, i = 2;
// // Dùng do-while để yêu cầu nhập lại nếu không hợp lệ
// do {
//     let input = prompt("Nhập số nguyên n ≥ 2 để in dãy Fibonacci:");
//     n = Number(input); // Chuyển đổi sang số
//
//     // Kiểm tra hợp lệ với điều kiện lồng nhau
//     if (isNaN(n)) {
//         alert("Lỗi! Vui lòng nhập một số.");
//     } else {
//         if (!Number.isInteger(n)) {
//             alert("Lỗi! Vui lòng nhập số nguyên.");
//         } else {
//             if (n < 2) {
//                 alert("Lỗi! Vui lòng nhập số ≥ 2.");
//             }
//         }
//     }
// } while (isNaN(n) || !Number.isInteger(n) || n < 2);
// console.log("Dãy Fibonacci:");
// console.log(a);
// console.log(b);
//
// while (i < n) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
//     i++;
// }

// Bài 2: Tính giai thừa của một số nguyên dương
// document.write("Bài 2: Tính giai thừa của một số nguyên dương.");

// Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
// document.write("Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau<br>")
let size = 6;
let output = "";
let i, j;

// Tam giác vuông góc trái trên
i = 1;
while (i <= size) {
    j = 1;
    while (j <= i) {
        output += "*";
        j++;
    }
    output += "\n";
    i++;
}
output += "\n";

// Tam giác vuông góc trái dưới
i = size;
while (i >= 1) {
    j = 1;
    while (j <= i) {
        output += "*";
        j++;
    }
    output += "\n";
    i--;
}
output += "\n";

// Tam giác vuông góc phải trên
i = 1;
while (i <= size) {
    j = 1;
    while (j <= size - i) {
        output += " ";
        j++;
    }
    j = 1;
    while (j <= i) {
        output += "*";
        j++;
    }
    output += "\n";
    i++;
}
output += "\n";

// Tam giác vuông góc phải dưới
i = size;
while (i >= 1) {
    j = 1;
    while (j <= size - i) {
        output += " ";
        j++;
    }
    j = 1;
    while (j <= i) {
        output += "*";
        j++;
    }
    output += "\n";
    i--;
}

console.log(output);

// Bài 4: In hình chữ nhật
// let width = 20;  // Chiều rộng
// let height = 5;  // Chiều cao
//
// for (let i = 0; i < height; i++) {
//     if (i === 0 || i === height - 1) {  // Hàng đầu và hàng cuối
//         document.write("*".repeat(width) + "<br>");
//     } else {  // Các hàng giữa
//         document.write("*" + "&nbsp;".repeat(width + 16) + "*<br>");
//     }
// }

// Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.
// document.write("Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.")
// let P = parseFloat(prompt("Nhập số tiền ban đầu:"));
// let r = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
// let n = parseInt(prompt("Nhập số tháng gửi:"));
//
// let A = P;
// for (let i = 0; i < n; i++) {
//     A += A * r; // Lãi mẹ đẻ lãi con
// }
// document.write(`Tổng số tiền sau ${n} tháng: ${A.toFixed(2)}`);

// Bài 6: In hình trái tim
// let size = 6;
// let heart = "";
//
// for (let i = size / 2; i < size; i += 2) {
//     // In khoảng trống phía trước
//     for (let j = 1; j < size - i; j += 2) {
//         heart += " ";
//     }
//     // In phần trái của trái tim
//     for (let j = 1; j < i + 1; j++) {
//         heart += "*";
//     }
//     // In khoảng trống giữa hai nửa trái tim
//     for (let j = 1; j < size - i + 1; j++) {
//         heart += " ";
//     }
//     // In phần phải của trái tim
//     for (let j = 1; j < i + 1; j++) {
//         heart += "*";
//     }
//     heart += "\n";
// }
//
// // Vẽ phần dưới của trái tim
// for (let i = size; i > 0; i--) {
//     // In khoảng trống phía trước
//     for (let j = 0; j < size - i; j++) {
//         heart += " ";
//     }
//     // In phần dưới của trái tim
//     for (let j = 0; j < i * 2 - 1; j++) {
//         heart += "*";
//     }
//     heart += "\n";
// }
//
// console.log(heart);
