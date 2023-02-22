const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

console.log(randomInteger(1, 5));