var moment = require('moment');
const chalk = require('chalk');
// moment().format();


// moment(Date);

var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var nth_day_of_year = moment().format("DDDo");


// var b = moment([2017, 1, 1]);
// var a = moment([2017, 8, 14]);
// var nth_day_of_year = moment().dayOfYear();

// a.diff(b, 'days');


// var day = new Date(2011, 9, 16);
// var dayWrapper = moment(day);


console.log(`It is: ${now}.`)
console.log(`It is the: ${nth_day_of_year} day of the year.`);
