
//KATA - 1 (ADD TWO POSITIVE INTEGERS)
export function addNumbers(a, b) {
    //Write a function that add a and b, returns the result
    //a and b will always be positive integers
    return a + b

};


//KATA 2 - (FIND THE AVERAGE): 
//You work at a shop and are trying to find the average profit for your shop for the week
//Write a function that takes in the daily sales for the shop, which can be either a positive
//or negative integer.


export function weeklyAverageProfit(Mon, Tues, Wed, Thurs, Fri, Sat, Sun){
 let averageSales = (Mon + Tues + Wed + Thurs + Fri + Sat + Sun)/7
 return averageSales
}


//KATA 2.2 - (FIND THE DAY WITH THE LEAST SALES):
//You own a shop and you want to close one day a week. You need to find which day is the one that you have the least sales to make it your day off. 
//Your function should return the day of the week that you plan on closing. 
// It should return a string starting with a capital letter and the full name of the day: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
export function leastSalesDay(Mon, Tues, Wed, Thurs, Fri, Sat, Sun){
    let daysOfTheWeekArr = [ 
        {day: "Tuesday", earnings: Tues}, 
        {day: "Wednesday", earnings: Wed}, 
        {day: "Thursday", earnings: Thurs}, 
        {day: "Friday", earnings: Fri}, 
        {day: "Saturday", earnings: Sat},
        {day: "Sunday", earnings: Sun}]
    let lowestDaySales = {day: "Monday", earnings: Mon}
    for (let i = 0; i < daysOfTheWeekArr.length; i++){
        if(daysOfTheWeekArr[i].earnings < lowestDaySales.earnings){
            lowestDaySales = daysOfTheWeekArr[i]
        } 
    } 
    return lowestDaySales.day;
}
