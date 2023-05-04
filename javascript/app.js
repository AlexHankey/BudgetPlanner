function getDate(){
    var today = new Date();
    var date = today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear();
    document.getElementById("currentDate").innerHTML = date;
}
function getTime(){
    var today = new Date();
    var time = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
    document.getElementById("clock").innerHTML = time;
}

// Table calculations 
var v = document.getElementById("yearlyWage_Input").value;
function getYearlyWageValue(val){
    document.getElementById("Yearly").innerHTML = val;
}
function getMonthlyWageValue(val){
    var monthlyValue = val / 12;
    document.getElementById("Monthly").innerHTML = monthlyValue;
}
function getWeeklyWageValue(val){
    var weeklyValue = (val * 12) / 52;
    document.getElementById("Weekly").innerHTML = weeklyValue;
}
function getDailyWageValue(val){
    var dailyValue = val / 5;
    document.getElementById("Daily").innerHTML = dailyValue;
}
function getHourlyWageValue(val){
    var hourlyValue = val / 8;
    document.getElementById("Hourly").innerHTML = hourlyValue;
}

function displayTableContents(v){
    var userInputValue = v
    getYearlyWageValue(userInputValue);
    getMonthlyWageValue(userInputValue);
    getWeeklyWageValue(userInputValue);
    getDailyWageValue(userInputValue);
    getHourlyWageValue(userInputValue);
}

getTime();
getDate();
displayTableContents(v);

