//👉 Write your tests below here:

import { addNumbers, weeklyAverageProfit } from "./main.js"
import { test, expect } from "@jest/globals"

let ones = Math.ceil(Math.random()*5)
let tens = Math.ceil(Math.random()*10)
let hundreds = Math.ceil(Math.random()*100)
let thousands = Math.ceil(Math.random()*10000)

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
])('Calculates the correct average', (Mon, Tues, Wed, Thurs, Fri, Sat, Sun) => {
    const actual = weeklyAverageProfit(Mon, Tues, Wed, Thurs, Fri, Sat, Sun);
    const expected = (Mon + Tues + Wed + Thurs + Fri + Sat + Sun)/7;
    console.log(Mon, Tues, Wed, Thurs, Fri, Sat, Sun)
    console.log(expected, actual)
    expect(actual).toBe(expected);
});

// test('a + b should be positive integer', () => {
//     let randomNumber = Math.ceil(Math.random()*5)
//     let a = randomNumber
//     let b = randomNumber
//     let c = a + b
//     const actual = addNumbers (a, b);
//     const expected = c;
//     console.log(a, b, c, actual)
//     expect(actual).toBe(expected);
//   });


