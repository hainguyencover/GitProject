// Bài 1: Viết chương trình khởi tạo mảng 2 chiều với một bộ phần tử có sẵn, sau đó in ra các phần tử trong mảng.
// Yêu cầu: Sử dụng vòng lặp for lồng nhau.

let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
// // Duyệt qua từng hàng
for (let i = 0; i < a.length; i++) {
    document.write(`"row ${i}"<br>`); // Hiển thị số hàng

    // Duyệt qua từng phần tử trong hàng
    for (let j = 0; j < a[i].length; j++) {
        document.write(`" ${a[i][j]}"<br>`); // Hiển thị giá trị
    }
}

// Bài 2: Viết chương trình in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ: Với mảng [ 'c', 's', 'c', '2', '6', '1' ], sau khi đảo ngược sẽ là: "162csc".
let myText = prompt("Nhập vào 1 chuỗi bất kì: ");
// Chuyển chuỗi thành mảng ký tự
let charArray = myText.split("");
document.write("Mảng: [" + charArray.join(", ") + "]<br>");
for (let i = 0; i < charArray.length - 1; i++) {
    for (let j = 0; j < charArray.length - 1 - i; j++) {
        if (charArray[j] < charArray[j + 1]) {
            // Hoán đổi giá trị nếu phần tử trước nhỏ hơn phần tử sau
            let temp = charArray[j];
            charArray[j] = charArray[j + 1];
            charArray[j + 1] = temp;
        }
    }
}
document.write("Mảng sau khi sắp xếp giảm dần: [" + charArray.join(", ") + "]<br>");

// Bài 3:Viết chương trình khai báo một mảng ký tự và kích thước của mảng.
// Yêu cầu: Đếm số ký tự số (0-9) trong mảng.
// Khai báo mảng ký tự bất kỳ
document.write("Viết chương trình khai báo một mảng ký tự và kích thước của mảng.\n" +
    "Yêu cầu: Đếm số ký tự số (0-9) trong mảng.<br>")
let charArray = ['a', '1', 'b', '3', 'x', '9', '5', 'z', '0', '8', 'p', '2'];
let count = 0; // Biến đếm số ký tự số
// Duyệt mảng để kiểm tra ký tự số
for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] >= '0' && charArray[i] <= '9') {
        count++;
    }
}
// Hiển thị kết quả
document.write("Mảng ký tự: [" + charArray.join(", ") + "]<br>");
document.write("Số ký tự số (0-9) trong mảng: " + count);

// Bài 4: Viết chương trình đếm số từ trong một chuỗi.
document.write("Bài 4: Viết chương trình đếm số từ trong một chuỗi.<br>")
let charArray = ['a', '1', 'b', '3', 'x', '9', '5', 'z', '0', '8', 'p', '2'];
let count = 0; // Biến đếm số tu
// Duyệt mảng để kiểm tra ký tự số
for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] >= 'a' && charArray[i] <= 'z') {
        count++;
    }
}
// Hiển thị kết quả
document.write("Mảng ký tự: [" + charArray.join(", ") + "]<br>");
document.write("Số từ trong chuỗi: " + count);

// // Bài 5: Viết chương trình nhập vào 2 chuỗi, kiểm tra xem hai chuỗi có giống nhau không.
document.write("Bài 5: Viết chương trình nhập vào 2 chuỗi, kiểm tra xem hai chuỗi có giống nhau không.<br>")
let str1 = prompt("Nhập chuỗi thứ nhất:");
let str2 = prompt("Nhập chuỗi thứ hai:");
let charArray1 = str1.split("");
let charArray2 = str2.split("");
document.write("Chuỗi 1: [" + charArray1.join(", ") + "]<br>");
document.write("Chuỗi 2: [" + charArray2.join(", ") + "]<br>");
// Kiểm tra hai chuỗi có giống nhau không
if (str1.toLowerCase() === str2.toLowerCase()) {
    document.write("✅ Hai chuỗi giống nhau.");
} else {
    document.write("❌ Hai chuỗi KHÔNG giống nhau.");
}

// Bài 6: Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự '-' trong mảng và thay thế chúng bằng ký tự '_'.
document.write("Bài 6: Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự '-' trong mảng và thay thế chúng bằng ký tự '_'.<br>");
let myText = prompt("Nhập vào một mảng kí tự: ");
let array = myText.split("");
document.write("Đầu vào: " + array.join("") + "<br>")
let result = myText.replace(/-/g, "_");
document.write("Kết quả: " + result + "<br>");
