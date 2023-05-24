/*
-- in lập qua index
-- of lập qua giá trị
--forech là tổng hợp của in và of  có thể lấy ra giá trị và in indexs 
    có thể đổi chỗ cho nhau mà ko bị thay đổi giá trị và biến
 */

// const users = ["datlt", "thienth", "sontv"];
// for (let i in users) {
//     console.log(users[i]);
// }

// for (let item of users) {
//     console.log(item);
// }
/*
    v1: item - datlt
    v2: item - thienth
    v3: item - sontv
*/

// users.forEach((index, item) => {
//     console.log(index);
// })

const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
]
// map
// const result = products.map(function (item) {
//     // console.log(item);
//     return `
//         <div>${item.name}</div>
//         <div>${item.price}</div>
//     `
// })
// console.log(result);
// const app = document.querySelector("#app")
// app.innerHTML = result.join("");

// find
// const result = products.find(function (item) {
//     // console.log(item.id);
//     return item.id == 3
// })
// console.log(result);

// filter
const result = products.filter(function (item) {
    return item.id != 1
})
console.log(result);