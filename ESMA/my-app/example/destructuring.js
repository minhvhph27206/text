/*
    Destructuring - phân rã
     - array
     - object
*/

// const users = ["datlt", "thienth", "sontv"]
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);

// const [user1, , user3] = users;
// console.log(user1, user3);

/*--- destructuring object ---*/
// const product = {
//     id: 1,
//     prdName: "Product 1",
//     price: 500,
//     description: "Main Content"
// }
// const id = product.id
// const prdName = product.prdName;
// console.log(id);
// console.log(prdName);

// const { id, prdName, price, description = 'Description Content' } = product
// console.log(id);
// console.log(prdName);
// console.log(price);
// console.log(description);


const product = {
    id: 1,
    prdName: "Product 1",
    price: 500,
    description: "Main Content",
    subProduct: {
        prdName: "Sub Product"
    }
}

const { prdName, subProduct: { prdName: subName } } = product
console.log(subName);