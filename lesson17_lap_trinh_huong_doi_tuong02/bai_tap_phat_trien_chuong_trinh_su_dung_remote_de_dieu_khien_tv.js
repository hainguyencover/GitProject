// Lớp Remote (Khai báo trước theo hướng dẫn)
class Remote {
    constructor(id, tv) {
        this.id = id;
        this.tv = tv;
    }

    // Điều khiển chuyển kênh
    changeChannel(channel) {
        if (this.tv.status) {
            this.tv.setChannel(channel);
            console.log(`Remote: Chuyển đến kênh ${channel}`);
        } else {
            console.log("Remote: Không thể chuyển kênh. Tivi đang tắt.");
        }
    }

    // Điều khiển tăng/giảm âm lượng
    changeVolume(value) {
        if (this.tv.status) {
            this.tv.setVolume(this.tv.volume + value);
            console.log(`Remote: Âm lượng hiện tại là ${this.tv.volume}`);
        } else {
            console.log("Remote: Không thể điều chỉnh âm lượng. Tivi đang tắt.");
        }
    }

    // Điều khiển bật/tắt Tivi
    powerSwitch() {
        if (this.tv.status) {
            this.tv.turnOff();
            console.log("Remote: Tivi đã tắt");
        } else {
            this.tv.turnOn();
            console.log("Remote: Tivi đã bật");
        }
    }
}

// Lớp TiVi
class Tivi {
    constructor(channel, volume) {
        this.channel = channel;
        this.volume = volume;
        this.status = false; // Mặc định là tắt
    }

    turnOn() {
        this.status = true;
        console.log("Tivi đã được bật");
    }

    turnOff() {
        this.status = false;
        console.log("Tivi đã được tắt");
    }

    setChannel(channel) {
        this.channel = channel;
    }

    setVolume(volume) {
        this.volume = volume;
    }

    getInfo() {
        console.log(`== Trạng thái Tivi ==`);
        console.log(`Tivi đang ${this.status ? "BẬT" : "TẮT"}`);
        console.log(`Kênh hiện tại: ${this.channel}`);
        console.log(`Âm lượng hiện tại: ${this.volume}`);
    }
}



// 1. Khởi tạo Tivi và Remote
let sonyTV = new Tivi(2, 10);
let remote1 = new Remote("R1", sonyTV);

// 2. Bật Tivi
sonyTV.turnOn();

// 3. Chuyển đến kênh 7 (trực tiếp)
sonyTV.setChannel(7);
console.log(`Tivi: Đã chuyển đến kênh ${sonyTV.channel}`);

// 4. Dùng Remote chuyển đến kênh 3
remote1.changeChannel(3);

// 5. Tăng âm lượng lên 2 đơn vị bằng Remote
remote1.changeVolume(2);

// 6. Dùng Remote tắt Tivi
remote1.powerSwitch();

// 7. In trạng thái cuối cùng
sonyTV.getInfo();