let arr = [1, 2, 3, 4, 5, 6, 7];


const inBetween = (a, b) => (el) => el >= a && el <= b

const inArray = nums => (el, i) => el === nums[i]


console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2