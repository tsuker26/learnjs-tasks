const sumTo = (num) => num === 1 ? num : num + sumTo(num - 1)
// const sumTo = (num) => num * (num + 1) / 2;

// const sumTo = (num) => {
//     let result = 0
//     for(let i = 0; i<=num;i++){
//         result+=i
//     }
//     return result
// }


console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));
console.log(sumTo(100));