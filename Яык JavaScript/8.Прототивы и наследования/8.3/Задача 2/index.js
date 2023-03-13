function f(a, b, ...args) {
    console.log(a + b + +args);
}

Function.prototype.defer = function (ms) {
    return (...args) => {
        setTimeout(() => {
            this.apply(this, args)
        }, ms)
    }
}

f.defer(1000)(2, 2, 5);