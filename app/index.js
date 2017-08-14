var moment = require('moment');
const chalk = require('chalk');

// console.log(chalk.blue('Hello world!'));


var now = chalk.blue.bold(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
var nth_day_of_year = chalk.magenta.bold(moment().format("DDDo"));
// var seconds_into_the_day = moment([2017, 7, 14]).toNow(Boolean);

var a = moment();
var b = moment([2017, 7, 14]);
var seconds = chalk.cyanBright.bold(a.diff(b, 'seconds'));


var daylightSavings = moment().isDST();
var daylightIs = "";


function daylightTrueFalse(){
  if (daylightSavings === true){
    daylightIs = "is";
  }else{
    daylightIs = "is not";
  }
  return daylightIs;
}

var leapYear = (moment().isLeapYear());
var leapYearIs = "";


function leapYearTrueFalse() {
  if (leapYear === true){
    leapYearIs = "is"
  }else{
    leapYearIs = "is not"
  }
  return leapYearIs
}



console.log(`It is ${now}.`)
console.log(`It is the ${nth_day_of_year} day of the year.`);
console.log(`It is ${seconds} seconds into the day.`);
// console.log(`It ${daylightTrueFalse(daylightSavings)} during Daylight Savings Time.`);
console.log("It " + chalk.green.bold(daylightTrueFalse(daylightSavings)) + " during Daylight Savings Time.");
console.log("It " + chalk.red.bold(leapYearTrueFalse(leapYear)) + " a leap year.");
