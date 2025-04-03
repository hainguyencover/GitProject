// let one = [2, 4, 6];
// let two = new Array(one.length + 1);
// for (let i = 0; i < one.length; i++) {
//     two[i] = one[i];
// }
// // two[one.length] = 7;
// two[two.length - 1] = 7;
// alert(two);


let girls = ["Lan", "Hoa", "Dao", "Huong"];
let boys = ["Ti", "Teo", "Tuat", "Hoi"];
for (let i = 0; i < girls.length; i++) {
    console.log(girls[i] + " " + boys[Math.floor(Math.random() * i)])
}
