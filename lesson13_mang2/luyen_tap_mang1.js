// Bài 1: Viết chương trình khởi tạo một mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

document.write("Bài 1: Viết chương trình khởi tạo một mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.<br>");
let numbers = [3, 12, 8, 15, 6, 20, 11, 5, 10, 9];

// Biến đếm số lượng số >= 10
let count = 0;

// Duyệt mảng và đếm số thỏa điều kiện
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
        count++;
    }
}

// Hiển thị kết quả
document.write(
    "Mảng: [" + numbers.join(", ") + "]<br>" +
    "Số lượng phần tử > or = 10 là : " + count);


// Bài 2: Viết chương trình khởi tạo một mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.

document.write("Viết chương trình khởi tạo một mảng số nguyên gồm 10 phần tử khác nhau.Chương trình hiển thị phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.<br>")
let numbers = [3, 12, 8, 15, 6, 20, 11, 5, 10, 9];
let max = numbers[0];
let index = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}
document.write(
    "Mảng: [" + numbers.join(", ") + "]<br>" +
    "Giá trị lớn nhất trong mảng là: " + max + "<br>" +
    "Vị trí của phần tử đó: " + index)


// Bài 3: Viết chương trình khởi tạo một mảng số nguyên.
// Hiển thị giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng.

document.write("Viết chương trình khởi tạo một mảng số nguyên. Hiển thị giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng.<br>")
let numbers = [3, 12, 8, 15, 6, 20, 11, 5, 10, 9];
// Bước 2: Tìm giá trị lớn nhất
let max = numbers[0]; // Giả sử phần tử đầu tiên là lớn nhất
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]; // Cập nhật giá trị lớn nhất
    }
}
// Bước 3: Tính tổng để lấy giá trị trung bình
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum / numbers.length;
document.write(
    "Mảng: [" + numbers.join(", ") + "]<br>" +
    "Giá trị lớn nhất trong mảng là: " + max + "<br>" +
    "Giá trị trung bình: " + average);


// Bài 4: Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng.
document.write("Bài 4: Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng.<br>")
let numbers = [3, 12, 8, 15, 6, 20, 11, 5, 10, 9];
let first = 0;
let last = numbers.length - 1;
document.write(
    "Mảng: [" + numbers.join(", ") + "]<br>")
while (first < last) {
    let myNumber = numbers[first];
    numbers[first] = numbers[last];
    numbers[last] = myNumber;
    first++;
    last--;
}
document.write("Các phần tử được đảo ngược trong mảng là: [" + numbers.join(", ") + "]<br>");


// Bài 5:Viết chương trình đếm số nguyên âm trong một chuỗi.
document.write("Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.<br>");
let numbers = [-3, -2, -1, 0, 1, 2, 3, 10];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        count++;
    }
}
document.write(
    "Mảng: [" + numbers.join(", ") + "]<br>" +
    "Số lượng phần tử < 0 là : " + count);

// Bài 6: Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên gồm 10 phần tử.
// Nhập hoặc tạo một phần tử số nguyên V. Chương trình tìm xem V có nằm trong mảng không.
// Nếu V thuộc mảng, in ra: "V is in the array".
// Nếu không, in ra: "V is not in the array".
document.write("Bài 6: Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên gồm 10 phần tử. " +
    "Nhập hoặc tạo một phần tử số nguyên V. " +
    "Chương trình tìm xem V có nằm trong mảng không.<br>")
let numbers = [3, 12, 8, 15, 6, 20, 11, 5, 10, 9];
document.write("Mảng: [" + numbers.join(", ") + "]<br>")
let soA = +prompt("Nhập vào 1 số bất kì V: ");
let result = false
for (let i = 0; i < numbers.length; i++) {
    if (soA === numbers[i]) {
        result = true;
        break;
    }
}
if (result) {
    document.write(`Số ${soA} có nằm trong mảng`);
} else {
    document.write(`Số ${soA} không nằm trong mảng`);
}

// Bài 7: Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên gồm 10 phần tử.
// Nhập hoặc tạo một phần tử số nguyên V.
// Chương trình kiểm tra xem V có thuộc mảng đã cho không.
// Nếu V thuộc mảng, xóa V khỏi mảng (dịch các phần tử bên phải V sang vị trí của V và gán 0 cho phần tử cuối cùng của mảng).
let numbers = [3, 12, 8, 15, 6, 20, 11, 5, 10, 9];
document.write("Mảng ban đầu: [" + numbers.join(", ") + "]<br>");
// Bước 2: Nhập số cần tìm và xóa
let soA = +prompt("Nhập vào số V cần tìm và xóa: ");
let index = numbers.indexOf(soA); // Tìm vị trí của V trong mảng
// Bước 3: Kiểm tra nếu V có trong mảng
if (index !== -1) {
    // Dịch các phần tử bên phải về bên trái
    for (let i = index; i < numbers.length - 1; i++) {
        numbers[i] = numbers[i + 1];
    }
    // Gán 0 vào phần tử cuối cùng
    numbers[numbers.length - 1] = 0;
    document.write(`Số ${soA} đã được xóa khỏi mảng!<br>`);
} else {
    document.write(`Số ${soA} không có trong mảng!<br>`);
}
// Bước 4: Hiển thị mảng sau khi xóa
document.write("Mảng sau khi xóa: [" + numbers.join(", ") + "]<br>");

// Bài 8: Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị mảng đã được sắp xếp.
document.write("Bài 8: Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị mảng đã được sắp xếp.<br>");
let numbers = [3, 12, 8, 15, 6, 20, 11, 5, 10, 9];
document.write("Mảng: [" + numbers.join(", ") + "]<br>");
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] < numbers[j + 1]) {
            // Hoán đổi giá trị nếu phần tử trước nhỏ hơn phần tử sau
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
document.write("Mảng sau khi sắp xếp giảm dần: [" + numbers.join(", ") + "]<br>");

// Bài 9: Viết chương trình khởi tạo hoặc nhập vào hai mảng số nguyên gồm 10 phần tử (gọi là mảng a và b).
// Tạo mảng c gồm 20 phần tử.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.Hiển thị mảng c.
document.write("Bài 9: Viết chương trình khởi tạo hoặc nhập vào hai mảng số nguyên gồm 10 phần tử (gọi là mảng a và b)." +
    "Tạo mảng c gồm 20 phần tử.\n" +
    "Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.Hiển thị mảng c.<br>");
let arrayA = [3, 12, 8, 15, 6, 20, 11, 5, 10, 9];
let arrayB = [-3, -12, -8, -15, -6, 20, 11, 5, 10, 9];
let arrayC = [];
for (let i = 0; i < arrayB.length; i++) {
    arrayC[i] = arrayB[i];
}
for (let i = 0; i < arrayA.length; i++) {
    arrayC[arrayB.length + i] = arrayA[i];
}
document.write("Mảng A: [" + arrayA.join(", ") + "]<br>" + "Mảng B: [" + arrayB.join(", ") + "]<br>")
document.write("Mảng C: [" + arrayC.join(", ") + "]<br>")
