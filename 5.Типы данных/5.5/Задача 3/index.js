const filterRangeInPlace = (arr, a, b) => {
arr.forEach((el,i)=>{
    if (el < a || el > b) {
        arr.splice(i, 1);
    }
})
}
const arr = [5, 3, 8, 1]
filterRangeInPlace(arr,1,4);

console.log(arr);