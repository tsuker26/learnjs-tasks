let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
const topSalary = (obj) => {
    let name = ''
    let salary = 0
    Object.entries(obj).forEach(el => {
        if (el[1] > salary) {
            salary = el[1]
            name = el[0]
        }
    })
    return name
}

console.log(topSalary(salaries));
