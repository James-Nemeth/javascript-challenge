// Create a git repository called javascript-challenges. Add your solutions to that repository to a feature/functions-challenges branch. Once done writing code, open a pull request to main. Add martynakr as a reviewer.

// ## Challenge: Calculating Moon Orbits

// ### MVP

// 1. Write a function that takes in a number of earth days, and returns the
//    number of orbits the moon can perform given days.

// ```js
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359
// ```

function calculateMoonOrbits(earthDays) {
    moonOrbitTime = 27.32 

    let orbits = (earthDays / moonOrbitTime)
    return orbits
}

let earthDays = 365;
let moonOrbits = calculateMoonOrbits(earthDays);
console.log(`Moon can complete ${moonOrbits} orbits around ${earthDays} Earth Days..` )




// ## Challenge: Working with Circles

// ### MVP

// 1. Write a function that takes the radius of a circle and return its area.
// 2. Write a function that takes the radius of a circle and return its perimeter.

// ```js
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83
// ```

function radiusCalculation(diameter) {
    let radius = diameter / 2
    return radius
}

let diameter = 19;
let radiusResult = radiusCalculation(diameter)
console.log(`If the circles Diameter was ${diameter}, it's Radius would be ${radiusResult}`)

function perimeterCalculation(radius) {
    let perimeter = 2 * Math.PI * radius;
    return perimeter
}

let radius = 10;
let perimeterResult = perimeterCalculation(radius)
console.log(`If the circles Radius was ${radius}, it's Perimeter would be ${perimeterResult}`)
    

// ## Challenge: Years to Days & Seconds

// ### MVP

// 1. Create a function that takes your age in years and returns your age in days.
// 1. Create a function that takes your age in years and returns your age in seconds.

// ```js
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000
// ```

function agesToDaysCalculation(age) {
    let ageInDays = age * 365
    
    return ageInDays
}

function ageToSecondsCalculation(age) {
    let ageInSeconds = age * 365 * 24 * 60 * 60

    return ageInSeconds
}

let age = 32;
let ageToDaysResult = agesToDaysCalculation(age)
let ageToSecondsResult = ageToSecondsCalculation(age)
console.log(`I am ${age},so l've been alive for ${ageToDaysResult} days.`)
console.log(`I am ${age},so l've been alive for ${ageToSecondsResult} Seconds.`)

// ## Challenge: Return the Remainder from Two Numbers

// ### MVP

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// ```js
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0
// ```

function remainderCal(num1, num2) {
    remainder = num1 % num2
    return remainder
}

let num1 = 3
let num2 = 4
let remainderResult = remainderCal(num1, num2)
console.log(`The remainder of ${num1} and ${num2} is ${remainderResult}`)


// ## Challenge: Basketball Points

// ### MVP

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function basketBallScoreResult(twoPoints, threePoints) {
    twoPointsAmount = twoPoints * 2
    threePointsAmount = threePoints * 3

    finalPoints = twoPointsAmount + threePointsAmount

    return finalPoints
}

let twoPoints = 2
let threePoints = 3 
let result = basketBallScoreResult(twoPoints, threePoints)
console.log (`There were ${twoPoints} 2-pointers and ${threePoints} 3 -pointers, final score is ${result}!`)

// ## Challenge: Less Than 100?

// ### MVP

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// ```js
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true
// ```

function lessThan100(numberOne, NumberTwo) {
    result = numberOne + NumberTwo

    if (result < 100) {
        console.log("True")
    } else {
        console.log("False")
    }
}



lessThan100(25, 75)