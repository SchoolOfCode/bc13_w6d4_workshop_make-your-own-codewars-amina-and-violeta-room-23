//👉 Write your tests below here:

import { addNumbers, weeklyAverageProfit, leastSalesDay } from "./main.js"
import { test, expect } from "@jest/globals"

let ones = Math.ceil(Math.random()*5)
let negOnes = Math.ceil(Math.random()*5)*(-1)
let tens = Math.ceil(Math.random()*10)
let negTens = Math.ceil(Math.random()*10)*(-1)
let hundreds = Math.ceil(Math.random()*100)
let negHundreds = Math.ceil(Math.random()*100)*(-1)
let thousands = Math.ceil(Math.random()*10000)
let negThousands = Math.ceil(Math.random()*10000)*(-1)

//TEST FOR FIRST KATA
test.each([
  [ones, ones],
  [tens, tens],
  [hundreds, hundreds],
  [hundreds, tens],
  [ones, tens],
  [hundreds, ones],
  [thousands, hundreds],
  [thousands, ones],
  [thousands, tens],
  [thousands, thousands],
])('Checks that the numbers are added correctly', (a, b) => {
    const actual = addNumbers (a, b);
    const expected = a + b;
    expect(actual).toBe(expected);
});

//TEST FOR KATA TWO 
test.each([
  [ones, ones, thousands, hundreds, hundreds, hundreds, hundreds],
  [negOnes, ones, negTens, negThousands, hundreds, negTens, hundreds],
])('Calculates the correct average', (Mon, Tues, Wed, Thurs, Fri, Sat, Sun) => {
    const actual = weeklyAverageProfit(Mon, Tues, Wed, Thurs, Fri, Sat, Sun);
    const expected = (Mon + Tues + Wed + Thurs + Fri + Sat + Sun)/7;
    console.log(Mon, Tues, Wed, Thurs, Fri, Sat, Sun)
    console.log(expected, actual)
    expect(actual).toBe(expected);
});

//TEST FOR KATA 2.2

test.only.each([
    //This test has to be hardcoded:
    [34, 6934, 3946734, -237246734, 3543465, -234, 1234, "Thursday"],
    [1, -5, -305, 657, 2385, -293, 547, "Wednesday"],
  ])('Finds the day with the lowest number and brings back the name of the day as a string', (Mon, Tues, Wed, Thurs, Fri, Sat, Sun, expected) => {
      const actual = leastSalesDay(Mon, Tues, Wed, Thurs, Fri, Sat, Sun);
      console.log(actual, expected)
      expect(actual).toBe(expected);
  });

  

