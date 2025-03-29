// Bài 1: Chuyển từ độ C sang độ F: °C  x  9/5 + 32 = °F
// function doiNhietDo() {
//     let amount = parseFloat(document.getElementById("nhietDo").value);
//     let fromTemperature = document.getElementById("fromTemperature").value;
//     let toTemperature = document.getElementById("toTemperature").value;
//     let convertedAmount = 0;
//     // Kiểm tra nếu người dùng không nhập số
//     if (isNaN(amount) || amount <= 0) {
//         document.getElementById("ketQua").innerHTML = "Vui lòng nhập số nhiệt độ hợp lệ!";
//         return;
//     }
//
//     // Xử lý chuyển đổi tiền tệ
//     if (fromTemperature === "C" && toTemperature === "F") {
//         convertedAmount = amount * 9 / 5 + 32; // 1 &deg;C = 33.8 &deg;F
//     } else if (fromTemperature === "F" && toTemperature === "C") {
//         convertedAmount = (amount - 32) / (9 / 5); // 1 &deg;F = 23,000 &deg;C
//     } else {
//         convertedAmount = amount; // Trường hợp chọn cùng một loại tiền tệ
//     }
//
//     document.getElementById("ketQua").innerHTML = `Kết quả: ${convertedAmount} &deg;${toTemperature}`;
// }

// Bài 2: Chuyển từ mét sang feet: ft =m * 3.2808
// function doiDonVi() {
//     let amount = parseFloat(document.getElementById("donVi").value);
//     let fromUnit = document.getElementById("fromUnit").value;
//     let toUnit = document.getElementById("toUnit").value;
//     let convertedAmount = 0;
//     // Kiểm tra nếu người dùng không nhập số
//     if (isNaN(amount) || amount <= 0) {
//         document.getElementById("ketQua").innerHTML = "Vui lòng nhập số nhiệt độ hợp lệ!";
//         return;
//     }
//
//     // Xử lý chuyển đổi tiền tệ
//     if (fromUnit === "Meter" && toUnit === "Feet") {
//         convertedAmount = amount * 3.2808; // 1m = 3.2808ft
//     } else if (fromUnit === "Feet" && toUnit === "Meter") {
//         convertedAmount = amount / 3.2808; // 1f = 1/3.2808m
//     } else {
//         convertedAmount = amount; // Trường hợp chọn cùng một loại tiền tệ
//     }
//
//     document.getElementById("ketQua").innerHTML = `Kết quả: ${convertedAmount} ${toUnit}`;
// }

// Bài 3: Tính diện tích hình vuông khi biết cạnh a.
// document.write("Bài 3: Tính diện tích hình vuông khi biết cạnh a.<br>")
// let canh = prompt("Nhập cạnh hình vuông a: ").trim();
// let dienTich = canh * canh;
// if (canh.length == 0) {
//     alert("Vui lòng nhập vào 1 số bất kì");
// } else if (isNaN(canh) || Number(canh) <= 0) {
//     alert("Vui lòng nhập đúng. Cạnh phải là số và lớn hơn 0.")
// } else {
//     document.write("Diện tích của hình vuông với cạnh a = " + canh + " ==> " + canh + " x " + canh + " = " + dienTich);
// }

// Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
//
// document.write("<br>Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.<br>")
// let chieuDai = prompt("Nhập chiều dài hcn a: ").trim();
// let chieuRong = prompt("Nhập chiều rộng hcn b: ").trim();
// let dienTichHCN = chieuDai * chieuRong;
// if (chieuDai.length == 0 || chieuRong.length == 0) {
//     alert("Vui lòng nhập vào đầy đủ thông tin");
// } else if (isNaN(chieuDai) || isNaN(chieuRong) || Number(chieuDai) <= 0 || Number(chieuRong) <= 0) {
//     alert("Vui lòng nhập đúng. Cạnh phải là số và lớn hơn 0.")
// } else {
//     document.write("Diện tích của hình chữ nhật với cạnh a,b lần lượt là: " + chieuDai + " , " + chieuRong + " ==> " + chieuDai + " x " + chieuRong + " = " + dienTichHCN);
// }

// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
// document.write("<br>Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.<br>")
// let canh1 = parseFloat(prompt("Nhập cạnh kề a: ").trim());
// let canh2 = parseFloat(prompt("Nhập cạnh kề b: ").trim());
// let dienTichTG = 1 / 2 * canh1 * canh2;
// if (canh1.length == 0 || canh2.length == 0) {
//     alert("Vui lòng nhập vào đầy đủ thông tin");
// } else if (isNaN(canh1) || isNaN(canh2) || Number(canh1) <= 0 || Number(canh2) <= 0) {
//     alert("Vui lòng nhập đúng. Cạnh phải là số và lớn hơn 0.")
// } else {
//     document.write("Diện tích của hình tam giác vuông với cạnh a,b lần lượt là: " + canh1 + " , " + canh2 + " ==> " + "1/2" + " x " + canh1 + " x " + canh2 + " = " + dienTichTG);
// }

// Bài 6: Giải phương trình bậc 1.
// document.write("<br>Bài 6: Giải phương trình bậc 1. AX+B=0<br>")
// let number1 = parseFloat(prompt("Nhập số a: ").trim());
// let number2 = parseFloat(prompt("Nhập số b: ").trim());
// if (number1.length === 0 || number2.length === 0) {
//     alert("Vui lòng nhập vào đầy đủ thông tin!");
// } else if (isNaN(number1) || isNaN(number2)) {
//     alert("Vui lòng nhập số hợp lệ!")
// } else {
//     if (number1 === 0) {
//         if (number2 === 0) {
//             alert("Phương trình vô sô nghiệm");
//         } else {
//             alert("Phương trình vô nghiệm");
//         }
//     } else {
//         document.write("Phương trình bậc 1: " + number1 + "X" + "+" + number2 + "=" + "0" + "=>" + "X" + " = " + -number2 / number1);
//     }
// }

// Bài 7: Giải phương trình bậc 2.
// document.write("<br>Bài 7: Giải phương trình bậc 2. Ax&sup2;+Bx+C=0<br>")
// let number1 = prompt("Nhập số a: ").trim();
// let number2 = prompt("Nhập số b: ").trim();
// let number3 = prompt("Nhập số c: ").trim();
// if (number1 === "" || number2 === "" || number3 === "") {
//     alert("Vui lòng nhập vào đầy đủ thông tin!");
// } else {
//     let so1 = parseFloat(number1);
//     let so2 = parseFloat(number2);
//     let so3 = parseFloat(number3);
//     if (isNaN(so1) || isNaN(so2) || isNaN(so3)) {
//         alert("Vui lòng nhập số hợp lệ!")
//     } else {
//         document.write(`Phương trình của bạn: <b>${so1}x&sup2; + ${so2}x + ${so3} = 0</b><br>`);
//         if (so1 === 0) {
//             if (so2 === 0) {
//                 if (so3 === 0) {
//                     document.write("Phương trình có vô số nghiệm.<br>");
//                 } else {
//                     document.write("Phương trình vô nghiệm.<br>");
//                 }
//             } else {
//                 document.write(`Phương trình có nghiệm: <b>x = ${-so3 / so2}</b><br>`);
//             }
//         } else {
//             let denTa = (so2 * so2) - (4 * so1 * so3);
//             if (denTa < 0) {
//                 document.write("Phương trình vô nghiệm.<br>");
//             } else if (denTa === 0) {
//                 let x = -so2 / (2 * so1);
//                 document.write(`Phương trình có nghiệm kép: <b>x = ${x}</b><br>`);
//             } else {
//                 let x1 = (-so2 + Math.sqrt(denTa)) / (2 * so1);
//                 let x2 = (-so2 - Math.sqrt(denTa)) / (2 * so1);
//                 document.write(`Phương trình có 2 nghiệm phân biệt: <b>x&#8321; = ${x1}, x&#8322; = ${x2}</b><br>`);
//             }
//         }
//     }
// }

// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
// document.write("<br>Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.<br>")
// let age = prompt("Nhập số tuổi của bạn: ");
// if (age === "") {
//     alert("Vui lòng nhập vào số tuổi của bạn!")
// } else {
//     let soTuoi = parseFloat(age);
//     let message = (isNaN(soTuoi) || !Number.isInteger(soTuoi) || soTuoi <= 0 || soTuoi >= 120)
//         ? "Số tuổi không hợp lệ. Vui lòng nhập lại!"
//         : "Số nguyên " + soTuoi + " là số tuổi hợp lệ!";
//
//     alert(message);
// }

// Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là: a,b,c > 0, a + b > c, b + c > a, a + c > b
// document.write("<br>Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là:<br>")
// let canh1 = prompt("Nhập số thứ nhất: ");
// let canh2 = prompt("Nhập số thứ hai: ");
// let canh3 = prompt("Nhập số thứ ba: ");
// if (canh1 === "" || canh2 === "" || canh3 === "") {
//     alert("Vui lòng nhập đầy đủ thông tin!")
// } else {
//     let so1 = parseFloat(canh1);
//     let so2 = parseFloat(canh2);
//     let so3 = parseFloat(canh3);
//     if (isNaN(so1) || isNaN(so2) || isNaN(so3)) {
//         alert("Vui lòng nhập số hợp lệ!")
//     } else if (so1 <= 0 || so2 <= 0 || so3 <= 0) {
//         alert("Số phải lớn hơn 0");
//     } else {
//         let isTriangle = (so1 + so2 > so3) && (so2 + so3 > so1) && (so1 + so3 > so2);
//         let message = isTriangle ?
//             "3 số bạn vừa nhập " + `<b>${so1}</b>` + "," + `<b>${so2}</b>` + "," + `<b>${so3}</b>` + " là cạnh của một tam giác" :
//             "Số bạn vừa nhập không đúng cạnh của tam giác"
//         document.write(message);
//     }
// }

// Bài 10: Viết chương trình tính giá điện.
// document.write("<br>Bài 10: Viết chương trình tính giá điện.<br>")
// let soKwh = parseFloat(prompt("Nhập số kWh điện tiêu thụ trong tháng:"));
// if (isNaN(soKwh) || soKwh < 0) {
//     alert("Vui lòng nhập số kWh hợp lệ.");
// }
// let tienDien = 0;
// if (soKwh <= 50) {
//     tienDien = soKwh * 1728;
// } else if (soKwh <= 100) {
//     tienDien = (50 * 1728) + ((soKwh - 50) * 1786);
// } else if (soKwh <= 200) {
//     tienDien = (50 * 1728) + (50 * 1786) + ((soKwh - 100) * 2074);
// } else if (soKwh <= 300) {
//     tienDien = (50 * 1728) + (50 * 1786) + (100 * 2074) + ((soKwh - 200) * 2612);
// } else if (soKwh <= 400) {
//     tienDien = (50 * 1728) + (50 * 1786) + (100 * 2074) + (100 * 2612) + ((soKwh - 300) * 2919);
// } else {
//     tienDien = (50 * 1728) + (50 * 1786) + (100 * 2074) + (100 * 2612) + (100 * 2919) + ((soKwh - 400) * 3015);
// }
// document.write(`Tiền điện phải trả: ${tienDien.toLocaleString()} VND`);

// Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
// document.write("<br>Bài 11: Viết chương trình tính thuế thu nhập cá nhân.<br>")
// let thuNhap = parseFloat(prompt("Nhập thu nhập hàng tháng (VND):"));
// let soNguoiPhuThuoc = parseInt(prompt("Nhập số người phụ thuộc:"));
// // Giảm trừ gia cảnh
// let giamTruBanThan = 11000000;
// let giamTruNguoiPhuThuoc = 4400000 * soNguoiPhuThuoc;
// // Tính thu nhập tính thuế
// let thuNhapTinhThue = thuNhap - giamTruBanThan - giamTruNguoiPhuThuoc;
// if (thuNhapTinhThue <= 0) {
//     alert("Bạn không phải nộp thuế thu nhập cá nhân.");
// }
// let thuePhaiNop = 0;
// // Áp dụng biểu thuế lũy tiến với cấu trúc điều kiện
// if (thuNhapTinhThue <= 5000000) {
//     thuePhaiNop = thuNhapTinhThue * 0.05;
// } else if (thuNhapTinhThue <= 10000000) {
//     thuePhaiNop = (5000000 * 0.05) + ((thuNhapTinhThue - 5000000) * 0.10);
// } else if (thuNhapTinhThue <= 18000000) {
//     thuePhaiNop = (5000000 * 0.05) + (5000000 * 0.10) + ((thuNhapTinhThue - 10000000) * 0.15);
// } else if (thuNhapTinhThue <= 32000000) {
//     thuePhaiNop = (5000000 * 0.05) + (5000000 * 0.10) + (8000000 * 0.15) + ((thuNhapTinhThue - 18000000) * 0.20);
// } else if (thuNhapTinhThue <= 52000000) {
//     thuePhaiNop = (5000000 * 0.05) + (5000000 * 0.10) + (8000000 * 0.15) + (14000000 * 0.20) + ((thuNhapTinhThue - 32000000) * 0.25);
// } else if (thuNhapTinhThue <= 80000000) {
//     thuePhaiNop = (5000000 * 0.05) + (5000000 * 0.10) + (8000000 * 0.15) + (14000000 * 0.20) + (20000000 * 0.25) + ((thuNhapTinhThue - 52000000) * 0.30);
// } else {
//     thuePhaiNop = (5000000 * 0.05) + (5000000 * 0.10) + (8000000 * 0.15) + (14000000 * 0.20) + (20000000 * 0.25) + (28000000 * 0.30) + ((thuNhapTinhThue - 80000000) * 0.35);
// }
// document.write(`Thuế thu nhập cá nhân phải nộp: ${thuePhaiNop.toFixed(2)} VND`);

// Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.
// document.write("<br>Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.<br>")
// let p = parseFloat(prompt("Nhập số tiền ban đầu (VNĐ): "));
// let r = parseFloat(prompt("Nhập lãi suất hàng tháng (%): ")) / 100;
// let n = parseInt(prompt("Nhập số tháng gửi: "));
//
// if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r <= 0 || n <= 0) {
//     alert("Dữ liệu không hợp lệ. Vui lòng nhập lại");
// } else {
//     let A = p * Math.pow((1 + r), n);
//     document.write(`Số tiền nhận được sau ${n} tháng là: ${A.toFixed(2)} VNĐ`)
// }