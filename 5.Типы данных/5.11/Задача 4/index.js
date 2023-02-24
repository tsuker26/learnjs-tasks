let date = new Date(2015, 0, 2);

const getDateAgo = (date,days) => {
    const setDay = new Date(date).setDate(new Date(date).getDate() - days)
    return new Date(setDay).getDate()
}


console.log(getDateAgo(date, 1)); // 1
console.log(getDateAgo(date, 2)); // 31
console.log(getDateAgo(date, 365)); // 2