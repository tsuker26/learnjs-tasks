
function Accumulator (startingValue){
    this.value = startingValue
    this.read = function (num) {
        this.value+=num
    }
}


let accumulator = new Accumulator(1);
accumulator.read(5);
accumulator.read(5);
console.log(accumulator.value);
