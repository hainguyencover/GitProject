// Dữ liệu câu hỏi theo chủ đề
const questionsByTopic = {
    "Lý thuyết": {
        "Chủ đề 1: Tổng quan về lập trình JavaScript(JavaScript Overview)": [
            {
                question: "JavaScript là ngôn ngữ lập trình chạy ở đâu?",
                options: ["A. Trình biên dịch", "B. Hệ điều hành", "C. Trình duyệt và máy chủ", "D. Chỉ ở máy chủ"],
                answer: "C. Trình duyệt và máy chủ",
                explanation: "👉 JavaScript có thể chạy trong trình duyệt (client) và trên server (Node.js).",
            },
            {
                question: "JavaScript có phải là Java không?",
                options: ["A. Có, chỉ khác cú pháp", "B. Không, là hai ngôn ngữ khác nhau", "C. JavaScript là phiên bản rút gọn của Java", "D. JavaScript được viết lại từ Java"],
                answer: "B. Không, là hai ngôn ngữ khác nhau",
                explanation: "👉 Chỉ trùng tên, còn lại khác hoàn toàn. Java là ngôn ngữ biên dịch, JS là thông dịch.",
            },
            {
                question: "DOM là viết tắt của từ gì?",
                options: ["A. Document Object Model", "B. Data Object Management", "C. Direct Output Module", "D. Document Over Method"],
                answer: "A. Document Object Model",
                explanation: "👉 DOM là mô hình đối tượng tài liệu, đại diện cho cấu trúc trang HTML.",
            },
            {
                question: "JavaScript có phải là ngôn ngữ bậc cao không? Vì sao?",
                options: ["A. Không, vì nó không biên dịch", "B. Có, vì nó gần với ngôn ngữ con người", "C. Không, vì nó chỉ chạy trên web", "D. Có, vì nó được viết bằng tiếng Anh"],
                answer: "B. Có, vì nó gần với ngôn ngữ con người",
                explanation: "👉 JavaScript là ngôn ngữ bậc cao vì cú pháp rõ ràng, gần gũi với ngôn ngữ tự nhiên.",
            },
            {
                question: "ECMAScript là gì?",
                options: ["A. Một thư viện của JavaScript", "B. Một trình duyệt", "C. Chuẩn ngôn ngữ của JavaScrip", "D. Một framework"],
                answer: "C. Chuẩn ngôn ngữ của JavaScrip",
                explanation: "👉 ECMAScript là chuẩn chính thức mà JavaScript tuân theo.",
            },
            {
                question: "JavaScript có thể chạy ở server không? Nếu có thì bằng gì?",
                options: ["A. Không, chỉ dùng ở trình duyệt", "B. Có, bằng Apache", "C. Có, bằng Node.js", "  D. Có, bằng Java"],
                answer: "C. Có, bằng Node.js",
                explanation: "👉 Node.js cho phép chạy JavaScript ở phía server.",
            },
            {
                question: "Trình duyệt nào đầu tiên hỗ trợ JavaScript?",
                options: ["A. Chrome", "B. Internet Explorer", "C. Netscape Navigator", "  D. Firefox"],
                answer: "C. Netscape Navigator",
                explanation: "👉 JavaScript ra đời lần đầu trong trình duyệt Netscape Navigator.",
            },
            {
                question: "JavaScript có cần biên dịch không?",
                options: ["A. Có, giống C++", "B. Không, nó là ngôn ngữ thông dịch", "C. Có, chạy bằng JVM", "  D. Không, chạy bằng C#"],
                answer: "B. Không, nó là ngôn ngữ thông dịch",
                explanation: "👉 JavaScript được thông dịch trực tiếp bởi trình duyệt, không cần biên dịch trước.",
            },
            {
                question: "JavaScript được phát triển bởi ai?",
                options: ["A. Bill Gates", "B. Brendan Eich", "C. Elon Musk", "  D. Mark Zuckerberg"],
                answer: "B. Brendan Eich",
                explanation: "👉 Brendan Eich phát triển JavaScript trong 10 ngày tại Netscape vào năm 1995.",
            },
            {
                question: "JavaScript ban đầu có tên gọi là gì?",
                options: ["A. ECMAScript", "B. JScript", "C. LiveScript", "  D. NetScript"],
                answer: "C. LiveScript",
                explanation: "👉 Tên gốc của JavaScript là LiveScript, sau đó được đổi tên để thu hút người dùng Java.",
            },
        ],
        "Chủ đề 2: Biến, kiểu dữ liệu và toán(Variable and Data Types)": [
            {
                question: "Từ khóa let, const, var khác nhau thế nào?",
                options: ["A. Chúng giống nhau hoàn toàn", "B. const không thể thay đổi giá trị sau khi khai báo", "C. var không tồn tại trong ES6", "D. let dùng để khai báo hằng số"],
                answer: "B. const không thể thay đổi giá trị sau khi khai báo",
                explanation: "👉 const là hằng số, không thể gán lại giá trị. let và var thì có thể.",
            },
            {
                question: "typeof null trả về kết quả gì?",
                options: ["A. \"null\"", "B.  \"undefined\"", "C. \"object\"", "D. \"null object\""],
                answer: "C. \"object\"",
                explanation: "👉 Đây là “bug lịch sử” của JavaScript, typeof null trả về \"object\".",
            },
            {
                question: "JavaScript có những kiểu dữ liệu nguyên thủy nào?",
                options: ["A. string, object, array, boolean", "B. string, number, boolean, undefined, null, symbol, bigint", "C. string, array, boolean, function", "D. number, float, object, boolean"],
                answer: "B. string, number, boolean, undefined, null, symbol, bigint",
                explanation: "👉 Đây là các kiểu dữ liệu nguyên thủy chính trong JavaScript.",
            },
            {
                question: "Biến undefined và null khác gì nhau?",
                options: ["A. Không khác gì", "B. null là chưa định nghĩa, undefined là không có giá trị", "C. undefined là chưa gán, null là giá trị rỗng có chủ đích", "D. undefined dành cho object, null dành cho string"],
                answer: "C. undefined là chưa gán, null là giá trị rỗng có chủ đích",
                explanation: "👉 undefined xảy ra khi chưa gán giá trị, còn null là cố tình gán rỗng.",
            },
            {
                question: "Phép == và === khác nhau thế nào?",
                options: ["A. Không khác gì", "B. === kiểm tra giá trị, == kiểm tra kiểu dữ liệu", "C. == kiểm tra giá trị, === kiểm tra cả giá trị và kiểu", "D. == dành cho số, === dành cho chuỗi"],
                answer: "C. == kiểm tra giá trị, === kiểm tra cả giá trị và kiểu",
                explanation: "👉 == thực hiện ép kiểu, còn === thì so sánh nghiêm ngặt cả kiểu lẫn giá trị.",
            },
            {
                question: "Làm sao để ép kiểu một chuỗi thành số nguyên?",
                options: ["A. parseString()", "B. toInt()", "C. parseInt()", "  D. castNumber()"],
                answer: "C. parseInt()",
                explanation: "👉 Hàm parseInt() dùng để chuyển chuỗi sang số nguyên.",
            },
            {
                question: "isNaN(\"123abc\") trả về gì?",
                options: ["A. true", "B. false", "C. \"NaN\"", "  D. undefined"],
                answer: "C. true",
                explanation: "👉 \"123abc\" không thể chuyển thành số nên isNaN trả về true.",
            },
            {
                question: "Toán tử % dùng để làm gì?",
                options: ["A. Lấy phần nguyên của phép chia", "B. Lấy phần dư của phép chia", "C. Lấy số âm", "  D. Phân biệt số chẵn và lẻ"],
                answer: "B. Lấy phần dư của phép chia",
                explanation: "👉 % là toán tử chia lấy dư, thường dùng để kiểm tra chẵn/lẻ.",
            },
            {
                question: "const có thể dùng để khai báo mảng không?",
                options: ["A. Không bao giờ", "B. Có, nhưng không được thay đổi phần tử", "C. Có, và có thể thay đổi phần tử", "  D. Chỉ dùng để khai báo chuỗi"],
                answer: "C. Có, và có thể thay đổi phần tử",
                explanation: "👉 const không cho phép gán lại biến, nhưng mảng/đối tượng vẫn có thể thay đổi nội dung.",
            },
            {
                question: "typeof [] cho kết quả gì?",
                options: ["A. \"array\"", "B. \"object\"", "C. \"list\"", "  D. \"collection\""],
                answer: "B. \"object\"",
                explanation: "👉 Mảng trong JavaScript là một kiểu object, nên typeof [] trả về \"object\".",
            },
        ],
        "Chủ đề 3: Cấu trúc điều kiện(Conditional Statements)": [
            {
                question: "Cấu trúc if...else dùng để làm gì?",
                options: ["Duyệt mảng", "B. Thực hiện lặp", "C. So sánh và rẽ nhánh theo điều kiện", "D. Định nghĩa hàm"],
                answer: "C. So sánh và rẽ nhánh theo điều kiện",
                explanation: "👉 if...else dùng để kiểm tra điều kiện và thực hiện các nhánh logic tương ứng.",
            },
            {
                question: "switch...case hoạt động như thế nào?",
                options: ["A. So sánh điều kiện bằng >", "B. So sánh giá trị với nhiều trường hợp cụ thể", "C. Duyệt qua từng phần tử của mảng", "D. Kiểm tra boolean"],
                answer: "B. So sánh giá trị với nhiều trường hợp cụ thể",
                explanation: "👉 switch so sánh giá trị đầu vào với các case cụ thể.",
            },
            {
                question: "Có thể viết if không có else không?",
                options: ["A. Không được", "B. Chỉ khi có switch", "C. Được, else là tùy chọn", "D. Chỉ với const"],
                answer: "A. Được, else là tùy chọn",
                explanation: "👉 else là phần mở rộng, if có thể đứng một mình.",
            },
            {
                question: "So sánh if (x) và if (x === true) có gì khác nhau?",
                options: ["A. Không khác gì", "B. x sẽ được ép kiểu trong if(x)", "C. x === true sẽ luôn đúng", "D. if(x) chỉ đúng với số"],
                answer: "B. x sẽ được ép kiểu trong if(x)",
                explanation: "👉 if(x) kiểm tra \"truthy\", còn x === true bắt buộc phải là true kiểu boolean.",
            },
            {
                question: "Giá trị nào sau đây là falsy trong JavaScript?",
                options: ["A. \"false\"", "B. []", "C. 0", "D. {}"],
                answer: "C. 0",
                explanation: "👉 0 là giá trị falsy. \"false\" là chuỗi nên vẫn là truthy.",
            },
            {
                question: "Toán tử ba ngôi (? :) có mục đích gì?",
                options: ["A. Dùng để lặp mảng", "B. Dùng thay thế cho if...else đơn giản", "C. Tạo functions", "D. Kiểm tra typeof"],
                answer: "C. Tạo functions",
                explanation: "👉 Toán tử ba ngôi giúp viết điều kiện đơn giản gọn gàng hơn if...else.",
            },
            {
                question: "!!x có nghĩa là gì trong điều kiện?",
                options: ["A. Chuyển x về số", "B. So sánh x với undefined", "C. Ép x thành boolean", "D. Đảo ngược x 2 lần"],
                answer: "C. Ép x thành boolean",
                explanation: "👉 !!x là cách phổ biến để ép một giá trị thành kiểu boolean.",
            },
            {
                question: "Đâu là kết quả của if (\"0\")?",
                options: ["A. Sai (false)", "B. Đúng (true)", "C. Lỗi cú pháp", "  D. Null"],
                answer: "B. Đúng (true)",
                explanation: "👉 \"0\" là chuỗi không rỗng => truthy",
            },
            {
                question: "So sánh if (x) và if (!!x)?",
                options: ["A. Không khác gì", "B. !!x kiểm tra kiểu số", "C. !!x là cú pháp sai", "D. !!x trả về giá trị boolean, x có thể là bất kỳ"],
                answer: "D. !!x trả về giá trị boolean, x có thể là bất kỳ",
                explanation: "👉 !!x luôn trả về boolean thực sự (true hoặc false), còn if(x) đánh giá theo truthy/falsy.",
            },
            {
                question: "Điều gì xảy ra nếu không có break trong switch?",
                options: ["A. Lỗi", "B. Chỉ chạy 1 case", "C. Chạy luôn tất cả các case phía dưới", "D. Không ảnh hưởng gì"],
                answer: "C. Chạy luôn tất cả các case phía dưới",
                explanation: "👉 Thiếu break dẫn đến fall-through – chạy tiếp các case sau.",
            },
        ],
        "Chủ đề 4: Cấu trúc lặp(Loop Statements)": [
            {
                question: "JavaScript hỗ trợ những loại vòng lặp nào sau đây?",
                options: ["A. for, while, loop", "B. loop, forEach, count", "C. for, while, do...while, for...in, for...of", "D. foreach, loop, repeat"],
                answer: "C. for, while, do...while, for...in, for...of",
                explanation: "👉 JavaScript có nhiều loại vòng lặp: for, while, do...while, for...in, for...of.",
            },
            {
                question: "Sự khác biệt giữa for và while là gì?",
                options: ["A. for dùng cho object, while dùng cho array", "B. for lặp có điều kiện rõ ràng, while dùng khi không biết số vòng lặp", "C. for là vòng lặp vô hạn", "D. Không có gì khác"],
                answer: "B. for lặp có điều kiện rõ ràng, while dùng khi không biết số vòng lặp",
                explanation: "👉 for thường dùng khi biết rõ số lần lặp; while linh hoạt hơn cho điều kiện không xác định trước.",
            },
            {
                question: "do...while khác while chỗ nào?",
                options: ["A. do...while chạy ít nhất 1 lần dù điều kiện sai", "B. do...while chỉ lặp khi sai điều kiện", "C. do...while là vòng lặp vô hạn", "D. while chạy nhanh hơn"],
                answer: "A. do...while chạy ít nhất 1 lần dù điều kiện sai",
                explanation: "👉 do...while chạy thân vòng lặp trước, kiểm tra điều kiện sau.",
            },
            {
                question: "Lệnh break dùng để làm gì trong vòng lặp?",
                options: ["A. Kết thúc vòng lặp sớm", "B. Bắt đầu vòng lặp mới", "C. Lặp lại bước trước đó", "D. Tạm dừng vòng lặp"],
                answer: "A. Kết thúc vòng lặp sớm",
                explanation: "👉 break dùng để thoát khỏi vòng lặp ngay lập tức.",
            },
            {
                question: "continue khác gì với break?",
                options: ["A. continue dừng vòng lặp, break lặp tiếp", "B. continue bỏ qua bước hiện tại và sang bước kế tiếp", "C. continue chỉ áp dụng với for, break chỉ dùng trong while", "D. Không có gì khác nhau"],
                answer: "B. continue bỏ qua bước hiện tại và sang bước kế tiếp",
                explanation: "👉 continue bỏ qua phần còn lại trong vòng lặp hiện tại, rồi chạy bước tiếp theo.",
            },
            {
                question: "for...in dùng để lặp cái gì?",
                options: ["A. Duyệt số nguyên", "B. Duyệt mảng", "C. Duyệt thuộc tính của đối tượng", "D. Duyệt function"],
                answer: "C. Duyệt thuộc tính của đối tượng",
                explanation: "👉 for...in duyệt qua các key trong object.",
            },
            {
                question: "for...of dùng để làm gì?",
                options: ["A. Duyệt thuộc tính trong object", "B. Duyệt qua index của array", "C. Duyệt qua giá trị trong iterable (mảng, chuỗi, v.v.)", "  D. Lặp lại vô hạn"],
                answer: "C. Duyệt qua giá trị trong iterable (mảng, chuỗi, v.v.)",
                explanation: "👉 for...of dùng để lấy giá trị trong các đối tượng iterable như array, string, Map, Set.",
            },
            {
                question: "Điều gì xảy ra nếu vòng lặp không có điều kiện dừng?",
                options: ["A. Lỗi biên dịch", "B. Chạy đúng 1 lần", "C. Chạy vô hạn", "  D. Trình duyệt tự động dừng"],
                answer: "C. Chạy vô hạn",
                explanation: "👉 Nếu không có điều kiện dừng hợp lệ, vòng lặp sẽ chạy mãi ⇒ gây treo.",
            },
            {
                question: "Đâu là cú pháp đúng của vòng lặp for cơ bản?",
                options: ["A. for (i = 0; i < 10; i++)", "for (i < 10; i++)", "C. for i = 0 to 10", "  D. for i < 10 {}"],
                answer: "A. for (i = 0; i < 10; i++)",
                explanation: "👉 Cú pháp chuẩn là for (khởi tạo; điều kiện; cập nhật).",
            },
            {
                question: "Điều nào đúng khi so sánh forEach và for?",
                options: ["A. forEach không thể dùng break", "B. forEach nhanh hơn for", "C. for không dùng cho mảng", "D. forEach dùng để duyệt object"],
                answer: "A. forEach không thể dùng break",
                explanation: "👉 forEach không thể dùng break, return cũng không kết thúc vòng lặp như for.",
            },
        ],
        "Chủ đề 5: Mảng(Arrays)": [
            {
                question: "Mảng trong JavaScript là kiểu gì?",
                options: ["A. Kiểu riêng biệt", "B. Kiểu object", "C. Kiểu primitive", "D. Không được hỗ trợ"],
                answer: "B. Kiểu object",
                explanation: "👉 Trong JavaScript, mảng là một dạng đặc biệt của object.",
            },
            {
                question: "Cách khai báo mảng nào dưới đây là đúng?",
                options: ["A. let arr = array(1,2,3)", "B. let arr = [1, 2, 3];", "C. let arr = {1,2,3}", "D. let arr = <1,2,3>"],
                answer: "B. let arr = [1, 2, 3];",
                explanation: "👉 Dấu [] là cú pháp đúng để tạo mảng.",
            },
            {
                question: "Phương thức push() trong mảng có chức năng gì?",
                options: ["A. Thêm phần tử vào đầu mảng", "B. Xóa phần tử cuối mảng", "C. Thêm phần tử vào cuối mảng", "D. Sắp xếp mảng tăng dần"],
                answer: "C. Thêm phần tử vào cuối mảng",
                explanation: "👉 push() thêm phần tử vào cuối mảng.",
            },
            {
                question: "pop() làm gì trong mảng?",
                options: ["A. Thêm phần tử vào đầu mảng", "B. Xóa phần tử cuối mảng", "C. Xóa phần tử đầu", "D. Sắp xếp mảng tăng dần"],
                answer: "B. Xóa phần tử cuối mảng",
                explanation: "👉 pop() xóa và trả về phần tử cuối cùng của mảng.",
            },
            {
                question: "Phương thức nào trả về số lượng phần tử của mảng?",
                options: ["A. count()", "B. length()", "C. size()", "D. length"],
                answer: "D. length",
                explanation: "👉 length là thuộc tính trả về số lượng phần tử, không phải là hàm.",
            },
            {
                question: "Sự khác biệt giữa .slice() và .splice() là gì?",
                options: ["A. .slice() chỉnh sửa mảng gốc", "B. .splice() trả về mảng mới", "C. .splice() thay đổi mảng gốc, .slice() thì không", "D. Cả hai đều không làm gì"],
                answer: "C. .splice() thay đổi mảng gốc, .slice() thì không",
                explanation: "👉 .splice() thay đổi mảng gốc, còn .slice() không làm thay đổi mảng gốc.",
            },
            {
                question: "Array.isArray(arr) dùng để làm gì?",
                options: ["A. Sao chép mảng", "B. Kiểm tra arr có phải mảng không", "C. Tạo mảng mới", "  D. Biến đổi mảng thành object"],
                answer: "C. Kiểm tra arr có phải mảng không",
                explanation: "👉 Đây là cách chính xác để kiểm tra xem một biến có phải là mảng không.",
            },
            {
                question: "Mảng trong JavaScript có thể chứa kiểu dữ liệu gì?",
                options: ["A. Chỉ số", "B. Chỉ string", "C. Chỉ number", "D. Bất kỳ kiểu dữ liệu nào"],
                answer: "D. Bất kỳ kiểu dữ liệu nào",
                explanation: "👉 Mảng trong JavaScript có thể chứa mọi loại dữ liệu – số, chuỗi, boolean, object, function,...",
            },
            {
                question: "indexOf() dùng để làm gì?",
                options: ["A. Trả về phần tử đầu tiên", "B. Trả về chỉ số đầu tiên tìm thấy của giá trị", "C. Xóa phần tử trong mảng", "  D. Đếm phần tử"],
                answer: "B. Trả về chỉ số đầu tiên tìm thấy của giá trị",
                explanation: "👉 indexOf() trả về vị trí (index) của phần tử nếu có, nếu không có trả về -1.",
            },
            {
                question: "includes() khác gì indexOf()?",
                options: ["A. includes() trả về true/false, indexOf() trả về số", "B. includes() nhanh hơn", "C. indexOf() chỉ dùng cho chuỗi", "  D. Không có gì khác"],
                answer: "A. includes() trả về true/false, indexOf() trả về số",
                explanation: "👉 includes() trả về giá trị boolean (true/false), còn indexOf() trả về số index.",
            },
        ],
        "Chủ đề 6: Hàm(Function)": [
            {
                question: "Hàm (function) trong JavaScript dùng để làm gì?",
                options: ["A. Tạo biến mới", "B. Lưu trữ dữ liệu", "C. Tập hợp các câu lệnh thực thi khi được gọi", "D. Tạo đối tượng"],
                answer: "C. Tập hợp các câu lệnh thực thi khi được gọi",
                explanation: "👉 Hàm giúp gom nhiều câu lệnh lại và tái sử dụng khi cần.",
            },
            {
                question: "Đâu là cú pháp khai báo hàm đúng?",
                options: ["A. function = myFunc() {}", "B. myFunc() => {}", "C. function myFunc() {}", "D. func myFunc()"],
                answer: "C. function myFunc() {}",
                explanation: "👉 Đây là cú pháp khai báo hàm theo chuẩn truyền thống.",
            },
            {
                question: "Hàm có thể có bao nhiêu tham số?",
                options: ["A. Chỉ 1", "B. Tối đa 2", "C. Tùy ý, không giới hạn", "D. Không có tham số"],
                answer: "C. Tùy ý, không giới hạn",
                explanation: "👉 Một hàm có thể nhận bao nhiêu tham số tùy ý, tuỳ cách gọi.",
            },
            {
                question: "Hàm có thể trả về giá trị bằng từ khóa nào?",
                options: ["A. return", "B. yield", "C. result", "D. output"],
                answer: "A. return",
                explanation: "👉 return là từ khóa để trả kết quả ra ngoài khi hàm được gọi.",
            },
            {
                question: "Hàm arrow function có cú pháp như thế nào?",
                options: ["A. function() => {}", "B. () => {}", "C. => function()", "D. arrow() {}"],
                answer: "B. () => {}",
                explanation: "👉 Cú pháp chuẩn là () => {}, giúp viết hàm gọn hơn.",
            },
            {
                question: "Sự khác biệt giữa function declaration và function expression?",
                options: ["A. Không có gì khác", "B. Function expression có thể hoisting", "C. Function declaration được hoisting, expression thì không", "  D. Expression chạy nhanh hơn"],
                answer: "C. Function declaration được hoisting, expression thì không",
                explanation: "👉 Declaration được hoisting (kéo lên đầu), còn expression thì không..",
            },
            {
                question: "arguments là gì trong hàm?",
                options: ["A. Một biến lưu kết quả trả về", "B. Một object chứa tất cả tham số truyền vào hàm", "C. Một keyword để return giá trị", "  D. Một phương thức lặp"],
                answer: "B. Một object chứa tất cả tham số truyền vào hàm",
                explanation: "👉 arguments là một object giống mảng chứa tất cả đối số truyền vào hàm thường.",
            },
            {
                question: "Hàm có thể được khai báo bên trong hàm khác không?",
                options: ["A. Không, đó là cú pháp sai", "B. Có, gọi là nested function", "C. Có, nhưng không được dùng", "  D. Không, chỉ dùng trong class"],
                answer: "B. Có, gọi là nested function",
                explanation: "👉 JavaScript cho phép khai báo hàm lồng trong hàm.",
            },
            {
                question: "Hàm callback là gì?",
                options: ["A. Hàm chạy lỗi", "B. Hàm trả về lỗi", "C. Hàm được truyền như tham số và gọi lại sau", "  D. Hàm nằm ngoài hàm chính"],
                answer: "C. Hàm được truyền như tham số và gọi lại sau",
                explanation: "👉 Callback là hàm được truyền vào hàm khác như đối số và được gọi lại sau.",
            },
            {
                question: "Hàm không có tên được gọi là gì?",
                options: ["A. Lambda", "B. Anonymous function", "C. Ghost function", "  D. Inline function"],
                answer: "B. Anonymous function",
                explanation: "👉 Anonymous function là hàm không có tên, dùng nhiều trong callback và biểu thức.",
            },
        ],
        "Chủ đề 7: Lập trình hướng đối tượng(Introduction OOP)": [
            {
                question: "Lập trình hướng đối tượng (OOP) là gì?",
                options: ["A. Cách viết code theo kiểu thủ tục", "B. Phong cách thiết kế dữ liệu theo bảng", "C. Phương pháp tổ chức chương trình theo đối tượng", "D. Viết code không cần biến"],
                answer: "C. Phương pháp tổ chức chương trình theo đối tượng",
                explanation: "👉 OOP giúp mô hình hóa mọi thứ bằng đối tượng với thuộc tính và hành vi.",
            },
            {
                question: "class trong JavaScript là gì?",
                options: ["A. Một biến đặc biệt", "B. Một kiểu dữ liệu mới", "C. Một cách để định nghĩa đối tượng", "D. Một hàm logic"],
                answer: "C. Một cách để định nghĩa đối tượng",
                explanation: "👉 class là cách viết tắt để tạo constructor function và prototype trong ES6.",
            },
            {
                question: "Hàm constructor() dùng để làm gì?",
                options: ["A. Chạy vòng lặp", "B. Gán giá trị mặc định cho thuộc tính khi tạo object", "C. Khai báo biến toàn cục", "D. Duyệt mảng trong class"],
                answer: "B. Gán giá trị mặc định cho thuộc tính khi tạo object",
                explanation: "👉 constructor() chạy khi đối tượng được tạo ra, dùng để khởi tạo giá trị.",
            },
            {
                question: "Từ khóa this trong class tham chiếu tới đâu?",
                options: ["A. Class cha", "B. Biến toàn cục", "C. Đối tượng đang được tạo từ class", "D. Hàm gọi bên ngoài"],
                answer: "C. Đối tượng đang được tạo từ class",
                explanation: "👉 this tham chiếu đến instance hiện tại đang làm việc.",
            },
            {
                question: "Sự khác biệt giữa class và function constructor là gì?",
                options: ["A. Không có gì khác", "class không thể kế thừa", "C. class là cú pháp mới dễ đọc hơn", "D. function constructor nhanh hơn"],
                answer: "C. class là cú pháp mới dễ đọc hơn",
                explanation: "👉 class là cú pháp \"sugar\" (ngọt ngào) của function constructor cũ, nhưng ngắn gọn và dễ hiểu hơn.",
            },
            {
                question: "Kế thừa trong OOP nghĩa là gì?",
                options: ["A. Một biến dùng lại được nhiều lần", "B. Một hàm gọi lại chính nó", "C. Một class có thể sử dụng lại thuộc tính và phương thức của class khác", "  D. Một function được viết bằng nhiều cách"],
                answer: "C. Một class có thể sử dụng lại thuộc tính và phương thức của class khác",
                explanation: "👉 Kế thừa giúp class con nhận được toàn bộ đặc điểm từ class cha.",
            },
            {
                question: "Từ khóa super dùng để làm gì?",
                options: ["A. Gọi biến toàn cục", "B. Gọi constructor hoặc phương thức từ class cha", "C. Định nghĩa function mới", "  D. Gọi hàm bất kỳ trong object"],
                answer: "B. Gọi constructor hoặc phương thức từ class cha",
                explanation: "👉 super() được dùng trong constructor của class con để gọi constructor class cha.",
            },
            {
                question: "encapsulation nghĩa là gì?",
                options: ["A. Đóng gói logic để dễ sao chép", "B. Đóng gói dữ liệu và chức năng bên trong object, hạn chế truy cập trực tiếp", "C. Mã hóa dữ liệu", "  D. Sử dụng các vòng lặp lồng nhau"],
                answer: "B. Đóng gói dữ liệu và chức năng bên trong object, hạn chế truy cập trực tiếp",
                explanation: "👉 Encapsulation giúp bảo vệ dữ liệu bằng cách ẩn đi và chỉ cho truy cập qua method.",
            },
            {
                question: "polymorphism là gì?",
                options: ["A. Gọi nhiều class cùng một tên", "B. Đa hình – nhiều đối tượng có thể dùng cùng một interface/method theo cách riêng", "C. Khai báo biến nhiều lần", "  D. Tạo ra nhiều mảng từ 1 class"],
                answer: "B. Đa hình – nhiều đối tượng có thể dùng cùng một interface/method theo cách riêng",
                explanation: "👉 Đa hình giúp nhiều đối tượng xử lý hành vi theo cách riêng, dù dùng cùng tên hàm.",
            },
            {
                question: "Tại sao nên dùng OOP trong lập trình?",
                options: ["A. Để code nhanh hơn", "B. Để chia sẻ dữ liệu nhanh hơn", "C. Để tổ chức mã nguồn rõ ràng, dễ bảo trì, tái sử dụng", "  D. Để dùng ít vòng lặp"],
                answer: "C. Để tổ chức mã nguồn rõ ràng, dễ bảo trì, tái sử dụng",
                explanation: "👉 OOP giúp tổ chức code tốt, mở rộng dễ, đặc biệt trong dự án lớn.",
            },
        ],
    },
    "Bài tập": {
        "Chủ đề 1: Cấu trúc điều kiện(Conditional Statements)": [
            {
                question: "Kết quả in ra?",
                options: ["A. Equal", "B. Not Equal", "C. Lỗi cú pháp", "D. Không in gì"],
                answer: "A. Equal",
                explanation: "👉 == so sánh giá trị, không quan tâm đến kiểu dữ liệu ⇒ \"5\" == 5 là true.",
                image: "assets/img1.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. In ra \"A\"", "B. Lỗi cú pháp", "C. Không in gì", "D. In ra undefined"],
                answer: "A. In ra \"A\"",
                explanation: "👉 Điều kiện đúng vì score = 90 nằm trong khoảng 85–100 ⇒ in ra \"A\".",
                image: "assets/img2.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. Truthy", "B. Falsy", "C. Lỗi khi chạy", "D. In ra 0"],
                answer: "B. Falsy",
                explanation: "👉 0 là falsy trong JavaScript ⇒ vào nhánh else.",
                image: "assets/img3.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. Long string", "B. Short string", "C. undefined", "D. Lỗi cú pháp"],
                answer: "B. Short string",
                explanation: "👉 \"Hello\" có độ dài 5 ký tự ⇒ nhỏ hơn 10 ⇒ \"Short string\".",
                image: "assets/img4.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. Adult", "B. Minor", "C. 18", "D. Không in gì"],
                answer: "B. Không – vì sai điều kiện",
                explanation: "👉 Toán tử ba ngôi (? :) kiểm tra age >= 18 ⇒ đúng ⇒ in \"Adult\".",
                image: "assets/img5.png"
            },
        ],
        "Chủ đề 2: Cấu trúc lặp(Loop Statements)": [
            {
                question: "Kết quả in ra?",
                options: ["A. 1 2 3", "B. 0 1 2", "C. 0 1 2 3", "D. Không in gì"],
                answer: "A. 0 1 2",
                explanation: "👉 Lặp từ i = 0 đến i < 3 ⇒ in 0 1 2.",
                image: "assets/img6.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. In \"Loop\" 1 lần", "B. In \"Loop\" 2 lần", "C. Vòng lặp vô hạn", "D. Không in gì"],
                answer: "A. In \"Loop\" 2 lần",
                explanation: "👉  count bắt đầu từ 0 ⇒ điều kiện đúng 2 lần: 0 và 1.",
                image: "assets/img7.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. In ra 1 lần", "B. In ra 0 và 1", "C. Không in gì", "D. Lỗi cú pháp"],
                answer: "B. In ra 0 và 1",
                explanation: "👉 do...while chạy ít nhất 1 lần ⇒ in 0 và 1.",
                image: "assets/img8.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. 0 1 2", "B. 1 2 3", "C. 0 1 2 3 4", "D. Không in gì"],
                answer: "A. 0 1 2",
                explanation: "👉 A. 0 1 2",
                image: "assets/img9.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. 0 1 2", "B. 0 2", "C. 1 2", "D. 0 1 3"],
                answer: "B. 0 2",
                explanation: "👉 Khi i === 1 thì continue bỏ qua console.log, còn lại in 0 và 2.",
                image: "assets/img10.png"
            },
        ],
        "Chủ đề 3: Hàm(Arrays)": [
            {
                question: "Kết quả in ra?",
                options: ["A. Hello undefined", "B. Hello Guest", "C. Hello null", "D. Error"],
                answer: "B. Hello Guest",
                explanation: "👉 Hàm có tham số mặc định là \"Guest\", nên nếu không truyền gì vào thì sẽ in \"Hello Guest\".",
                image: "assets/img11.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. Normal function", "B. Arrow function", "C. Anonymous function", "D. Recursive function"],
                answer: "B. Arrow function",
                explanation: "👉 Cú pháp => là hàm mũi tên (arrow function) – cú pháp rút gọn trong ES6.",
                image: "assets/img12.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. 0", "B. 3", "C. undefined", "D. Error"],
                answer: "B. 3",
                explanation: "👉 arguments là đối tượng chứa tất cả tham số truyền vào, nên length = 3.",
                image: "assets/img13.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. Hàm lồng nhau (nested function)", "B. Closure", "C. Arrow function", "D. IIFE"],
                answer: "A. Hàm lồng nhau (nested function)",
                explanation: "👉 Hàm inner() được khai báo bên trong outer() → đây là nested function.",
                image: "assets/img14.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. 2", "B. 5", "C. Error", "D. undefined"],
                answer: "B. 5",
                explanation: "👉 calc được gán cho result, và result(2, 3) tương đương calc(2, 3).",
                image: "assets/img15.png"
            },

        ],
        "Chủ đề 4: Mảng(Function)": [
            {
                question: "Kết quả in ra?",
                options: ["A. [1, 2, 3]", "B. [1, 2, 3, 4]", "C. [4, 1, 2, 3]", "D. [1, 2, 4]"],
                answer: "B. [1, 2, 3, 4]",
                explanation: "👉 push() thêm phần tử vào cuối mảng.",
                image: "assets/img16.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. \"a\"", "B. \"b\"", "C. \"c\"", "D. undefined"],
                answer: "B. \"b\"",
                explanation: "👉 Truy cập phần tử qua chỉ số. arr[1] là phần tử thứ 2 – \"b\".",
                image: "assets/img17.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. [10, 20, 30]", "B. [10, 30]", "C. [20, 30]", "D. [10, 30, 40]"],
                answer: "B. [10, 30]",
                explanation: "👉 splice(1, 1) xóa 1 phần tử tại chỉ số 1 ⇒ xóa 20.",
                image: "assets/img18.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. [2, 4, 6]", "B. [1, 2, 3]", "C. [3, 6, 9]", "D. undefined"],
                answer: "A. [2, 4, 6]",
                explanation: "👉 map() trả về mảng mới, mỗi phần tử nhân 2.",
                image: "assets/img19.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. [\"banana\", \"apple\", \"mango\"]", "B. [\"mango\", \"apple\", \"banana\"]", "C. [\"apple\", \"banana\", \"mango\"]", "D. [\"apple\", \"mango\", \"banana\"]"],
                answer: "B. [\"mango\", \"apple\", \"banana\"]",
                explanation: "👉 unshift() thêm phần tử vào đầu mảng.",
                image: "assets/img20.png"
            },

        ],
        "Chủ đề 5: Lập trình hướng đối tượng(Introduction OOP)": [
            {
                question: "Kết quả in ra?",
                options: ["A. Person", "B. \"John\"", "C. undefined", "D. name"],
                answer: "B. \"John\"",
                explanation: "👉 this.name = name gán giá trị khi tạo object ⇒ p.name là \"John\".",
                image: "assets/img21.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. \"generic sound\"", "B. \"woof\"", "C. undefined", "D. Error"],
                answer: "B. \"woof\"",
                explanation: "👉 Hàm speak() được override trong class Dog.",
                image: "assets/img22.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. 1", "B. 0", "C. undefined", "D. Error"],
                answer: "A. 1",
                explanation: "👉 static thuộc tính được gắn vào chính class ⇒ gọi trực tiếp.",
                image: "assets/img23.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. \"v8\"", "B. undefined", "C. Error", "D. null"],
                answer: "A. \"v8\"",
                explanation: "👉 #engine là biến private, truy cập được qua method getEngine().",
                image: "assets/img24.png"
            },
            {
                question: "Kết quả in ra?",
                options: ["A. Error", "B. \"Hello from B\"", "C. \"Hello from A\"", "D. undefined"],
                answer: "C. \"Hello from A\"",
                explanation: "👉 Class B kế thừa từ A, nên sử dụng được method hello() của A.",
                image: "assets/img25.png"
            },
        ],
    }
};


