// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// document.write("Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.<br>")
// for (let i = 1; i < 100; i++) {
//     if (i !== 99) {
//         alert("Lặp lần: " + i + " => Chưa hoàn thành");
//     } else alert("Lặp lần: " + i + " => Đã hoàn thành");
// }

/*Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ.
Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.*/
// document.write("Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. If > 100, yêu cầu giảm, if < 20, yêu cầu tăng<br>")
// let nhietDo;
// while (true) {
//     nhietDo = prompt("Nhập nhiệt độ hiện tại:");
//     if (isNaN(nhietDo)) {
//         alert("Vui lòng nhập một số hợp lệ!");
//         continue;
//     }
//     if (nhietDo > 100) {
//         alert("Nhiệt độ quá cao! Vui lòng giảm nhiệt độ.");
//     } else if (nhietDo < 20) {
//         alert("Nhiệt độ quá thấp! Vui lòng tăng nhiệt độ.");
//     } else {
//         alert("Nhiệt độ phù hợp!");
//         break;
//     }
// }

// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// document.write("Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.");
// let n = 20;
// let fibonacci = [0, 1];
// for (let i = 2; i < n; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }
// document.write(fibonacci.join(", "));

// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// document.write("Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.")
// let F = 0, F0 = 0, F1 = 0
// let chia5 = ""
// let fibonacci = "";
// for (let i = 0; i < 20; i++) {
//     if (i === 0) {
//         F = 1
//         F1 = 1
//         fibonacci += F + " "
//     } else {
//
//         F = F0 + F1
//         F0 = F1
//         F1 = F
//         fibonacci += F + " "
//         console.log(i + " = " + F)
//         if (F % 5 === 0) {
//             chia5 = F
//             break
//         }
//     }
// }
//
// document.write("Sô chia hết cho 5 trong dãy là " + chia5)

// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// let F = 0, F0 = 0, F1 = 0, tong = 0
// let fibonacci = "";
// for (let i = 0; i < 20; i++) {
//     if (i == 0) {
//         F = 1
//         F1 = 1
//         fibonacci += F + " "
//         tong += F
//     } else {
//         F = F0 + F1
//         F0 = F1
//         F1 = F
//         fibonacci += F + " "
//         tong += F
//         console.log(i + " = " + F)
//     }
// }
// document.write("Dãy Fibonacci là " + fibonacci + "<br>")
// document.write("Tổng của các số = " + tong)

// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// document.write("Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.");
// let count = 0, tong = 0
// let daySo = ""
// for (let i = 1; ; i++) {
//     if (i % 7 === 0) {
//         daySo += i + " "
//         console.log(daySo)
//         tong += i
//         count++
//         if (count === 30) break
//     }
// }
// document.write(daySo + "<br>")
// document.write("Tổng bằng " + tong)

// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
// document.write("Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra \"Fizz\", 5 thì in ra \"Buzz\" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ \"FizzBuzz\".<br>")
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         document.write(i + " FizzBuzz <br>")
//     } else {
//         if (i % 3 === 0) {
//             document.write(i + " Fizz <br>")
//         } else if (i % 5 === 0) {
//             document.write(i + " Buzz <br>")
//         }
//     }
// }

// Bài 8: Game đoán số
// document.write("Game đoán số");
// let phamVi = Number(prompt("Trò chơi đoán số từ 0 - "))
// let nhapSo = Number(prompt("Nhập vào số muốn đoán"))
// let soRamDom
// if (phamVi) {
//     soRamDom = Math.floor(Math.random() * phamVi)
//     if (soRamDom === nhapSo) {
//         alert("Bạn đã đoán đung")
//     } else {
//         while (soRamDom !== nhapSo) {
//             alert("Bạn đoán sai số đúng là " + soRamDom)
//             nhapSo = Number(prompt("Nhập vào số muốn đoán"))
//         }
//         alert("Bạn đoán đúng")
//     }
// }

