const food1 = ["Chicken", "Beef"]
const food2 = ["vegetable", "salad", "octopus"]
// const food3 = food1.concat(food2)
const food3 = [...food1, ...food2]
console.log(food3);

const user1 = {
    id: 1,
    name: "User 1"
}
const user2 = {
    email: "email@gmail.com",
    phone: "0123456789"
}
const user3 = { ...user1, ...user2 }
console.log(user3);


const arrayNumber = [1, 2, 3]

function show(...params) {
    console.log(params);
}
show(...arrayNumber)
// arrayNumber -> [1,2,3]
//...arrayNumber -> 1,2,3