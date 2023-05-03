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
function getYearlyWageValue(){
    var value = document.getElementById("yearlyWage_Input").value;
    document.getElementById("output-yearly").innerHTML = "Annual Salary: " + value;
}
function calculateMonthly_preTax(){
    var value = document.getElementById("yearlyWage_Input").value / 12;
    document.getElementById("output-monthly").innerHTML = "Month Salary (Pre-Tax): " + value
}


getTime();
getDate();

function outputValues(){
    getYearlyWageValue();
    calculateMonthly_preTax();
}
outputValues();
