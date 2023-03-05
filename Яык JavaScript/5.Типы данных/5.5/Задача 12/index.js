const unique = (arr) => arr.filter((el, i, array) => array.indexOf(el) === i)


let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O