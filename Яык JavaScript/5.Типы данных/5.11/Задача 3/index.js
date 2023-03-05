let date = new Date(2012, 0, 3);

const getLocalDay = (date) => date.getDay() ? date.getDay() : 7



console.log(getLocalDay(date));