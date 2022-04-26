const scores = [
  {
    marks: 32,
    name: 'Yvette Merritt',
  },
  {
    marks: 57,
    name: 'Lillian Ellis',
  },
  {
    marks: 22,
    name: 'Mccall Carter',
  },
  {
    marks: 21,
    name: 'Pate Collier',
  },
  {
    marks: 91,
    name: 'Debra Beard',
  },
  {
    marks: 75,
    name: 'Nettie Hancock',
  },
  {
    marks: 20,
    name: 'Hatfield Hodge',
  },
]

// Task - 1
// Print the name list - As an array
let onlyNames = scores.map((n) => n.name)
console.log(onlyNames)

// Output
// ['Yvette Merritt', 'Lillian Ellis', 'Mccall Carter', 'Pate Collier', 'Debra Beard', 'Nettie Hancock', 'Hatfield Hodge']

// ---------------------------------------------------------------------------------------------------------------------------
// Task - 2
// >=40 pass.. find those student that passed (Use array method)

let onlyMarkgreaterThan40 = scores.filter((n) => n.marks >= 40)
console.log(onlyMarkgreaterThan40)

// Output
//[{marks: 57, name: 'Lillian Ellis'}, {marks: 91, name: 'Debra Beard'}, {marks: 75, name: 'Nettie Hancock'}]

//----------------------------------------------------------------------------------------------------------------------------
// Task - 3
//  Find all the names who failed the exams (Array methods)

let onlyFailNames = scores.filter((n) => n.marks < 40)
let onlyFailNames1 = onlyFailNames.map((n) => n.name)
console.log(onlyFailNames1)

// Output
// ['Yvette Merritt', 'Mccall Carter', 'Pate Collier', 'Hatfield Hodge']

//-----------------------------------------------------------------------------------------------------------------------------
// Task - 4
// Find the Average marks

let average = scores.map((n) => n.marks)
let average1 = average.reduce((a, b) => a + b)
let finalAverage = average1 / scores.length
console.log(finalAverage)

// Output
// average = 45.42

//-----------------------------------------------------------------------------------------------------------------------------
// Task - 5
// Find the topper's name

let topper = scores.filter((n) => n.marks > 90)
let finalTopper = topper.map((n) => n.name)
console.log(finalTopper)

// Output
// ['Debra Beard']
