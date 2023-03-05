let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// const printReverseList = (list) => {
//     if (list.next) {
//         printReverseList(list.next);
//     }
//
//     console.log(list.value);
// }
const printReverseList = (list) => {
    let current = list;
    let arr = []

    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    arr.reverse().forEach(el=>console.log(el))
}
printReverseList(list)