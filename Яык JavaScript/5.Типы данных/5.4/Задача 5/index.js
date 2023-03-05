const getMaxSubSum = (arr) => {
    let sum = 0
    let result = 0

    for (let item of arr) {
        sum += item

        result = Math.max(sum, result)
        if(sum<0){
            sum=0
        }
    }
    return result
}


console.log(getMaxSubSum([-1, 2, 3, -9]));//5
console.log(getMaxSubSum([2, -1, 2, 3, -9]));//6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));//11
console.log(getMaxSubSum([-2, -1, 1, 2]));//3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));//100
console.log(getMaxSubSum([1, 2, 3]));//6