let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


const aclean = (arr) => {
    let map = new Map()
    arr.forEach(el => map.set(el.split('').sort().join('').toLowerCase(), el))
  return Array.from(map.values())
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"