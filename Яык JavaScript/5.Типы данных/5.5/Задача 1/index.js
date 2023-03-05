const camelize = (str) => {
    return str.split('-').filter(el => el !== '').map((el, i) => {
        if (i > 0) {
            return el[0].toUpperCase() + el.slice(1)
        }
        return el
    }).join('')
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));