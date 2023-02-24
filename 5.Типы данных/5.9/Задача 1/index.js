let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (obj) =>Object.values(obj).reduce((prev,cur)=>prev+cur,0)


console.log( sumSalaries(salaries) ); // 650