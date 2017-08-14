var moment = require('moment');
const chalk = require('chalk');
// moment().format();


// moment(Date);

var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var nth_day_of_year = moment().format("DDDo");
// var seconds_into_the_day = moment().format("DDDo");
// var daylightSavings =
var leapYear = moment().isLeapYear();
var leapYearIs = "";

function leapYearTrueFalse() {
  if (leapYear === true){
    leapYearIs = "is"
  }else{
    leapYearIs = "is not"
  }
  return leapYearIs
}


// var b = moment([2017, 1, 1]);
// var a = moment([2017, 8, 14]);
// var nth_day_of_year = moment().dayOfYear();

// a.diff(b, 'days');


// var day = new Date(2011, 9, 16);
// var dayWrapper = moment(day);


console.log(`It is ${now}.`)
console.log(`It is the ${nth_day_of_year} day of the year.`);
// console.log(`It is ${} seconds into the day.`);
console.log(`It ${leapYearTrueFalse(leapYear)} a leap year.`)
