function Calculator() {
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    };


    this.calculate = (str) => {
        const arr = str.split(' ')
        return this.methods[arr[1]](+arr[0], +arr[2])
    }
    this.addMethod = (name, func) => {
        this.methods[name] = func
    }

}

const calc = new Calculator()

console.log(calc.calculate('3 + 7'));

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate('3 * 7'));
console.log(calc.calculate('3 / 7'));
console.log(calc.calculate('3 ** 7'));