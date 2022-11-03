//👉 Write your tests below here:

import { addNumbers } from "./main.js"
import { test, expect } from "@jest/globals"

test('a + b should be positive integer', () => {
    let randomNumber = Math.ceil(Math.random()*5)
    let a = randomNumber
    let b = randomNumber
    let c = a + b
    const actual = addNumbers (a, b);
    const expected = c;
    console.log(a, b, c, actual)
    expect(actual).toBe(expected);
  });


