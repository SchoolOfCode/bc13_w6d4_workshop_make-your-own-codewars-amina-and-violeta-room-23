
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
