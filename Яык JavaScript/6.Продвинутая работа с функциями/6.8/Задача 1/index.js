const printNumbers = (from, to) => {
    let num = from
    let timerId = setInterval(() => {
        console.log(num++)
    }, 1000)
    setTimeout(() => {
        clearInterval(timerId);
    }, (to + 1) * 1000);
}
// printNumbers(1, 5)

const printNumberTimeOut = (from, to) => {
    let num = from

    let timerId = setTimeout(function tick() {
        console.log(num++)
        timerId = setTimeout(tick, 1000)
    }, 1000)
    setTimeout(() => {
        clearTimeout(timerId);
    }, (to + 1) * 1000);

}
printNumberTimeOut(1, 5)
