let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let result = 0
for(let el in salaries){
    result+=salaries[el]
}
console.log(result);