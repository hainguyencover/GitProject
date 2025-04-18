class Mouse {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true; // Mặc định chuột sống
    }

    speak() {
        alert(`${this.name} kêu: chít chít`);
    }

    getStatus() {
        alert(`${this.name} hiện đang ${this.status ? "sống" : "chết"}`);
    }
}

class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    speak() {
        alert(`${this.name} kêu: meo meo`);
    }

    catch(mouse) {
        if (!(mouse instanceof Mouse)) {
            alert("Không phải chuột");
            return false;
        }

        if (!mouse.status) {
            alert(`Chuột ${mouse.name} đã chết, không cần bắt.`);
            return false;
        }

        if (this.maxSpeed > mouse.speed) {
            alert(`${this.name} đã bắt được chuột ${mouse.name}`);
            return true;
        } else {
            alert(`${this.name} không bắt được chuột ${mouse.name} vì chuột quá nhanh.`);
            return false;
        }
    }

    eat(mouse) {
        if (mouse.status) {
            this.weight += mouse.weight;
            mouse.status = false;
            alert(`${this.name} đã ăn chuột ${mouse.name}. Mèo nặng: ${this.weight}`);
        } else {
            alert(`${this.name} không thể ăn chuột ${mouse.name} vì chuột đã chết.`);
        }
    }
}

// ===================
// Mô phỏng chương trình
// ===================

let chuot1 = new Mouse("Jerry", 1.5, 80);
let meo1 = new Cat("Tom", 5.0, 100);

// Hiển thị thông tin ban đầu
chuot1.speak();
chuot1.getStatus();
meo1.speak();

// Mèo cố bắt chuột
if (meo1.catch(chuot1)) {
    meo1.eat(chuot1);
}

// Kiểm tra lại trạng thái
chuot1.getStatus();
alert(`${meo1.name} hiện có khối lượng: ${meo1.weight}`);
