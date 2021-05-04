//a
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

// Hier komt jouw functie
const findSpiderMan = superheroes.find((superheroes) => {
    return superheroes.name == 'Spiderman'
})

console.log(findSpiderMan)
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


//b
const doubleArrayValues = [1, 2, 3]
doubleArrayValues.forEach(dubbel)

function dubbel(item, index, arr) {
    arr[index] = item * 2
}

console.log(doubleArrayValues)
// result should be [2, 4, 6]



//c
const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11]

const biggerThan10 = containsNumberBiggerThan10.some((containsNumberBiggerThan10) => {
    return containsNumberBiggerThan10 >= 10;
})

console.log(biggerThan10)


// result should be true
const containsNumberSmallerThan10 = [1, 2, 1, 2, 1, 2]
const smallerThan10 = containsNumberSmallerThan10.some((containsNumberSmallerThan10) => {
    return containsNumberSmallerThan10 >= 10;
})
console.log(smallerThan10)
// result should be false


//d
const isItalyInTheGreat7 = (['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'])
const italy = isItalyInTheGreat7.some((isItalyInTheGreat7) => {
    return isItalyInTheGreat7 == 'Italy';
})
console.log(italy)
// result should be true




//e
const tenfold = ([1, 4, 3, 6, 9, 7, 11])
tenfold.forEach(tienvoud)

function tienvoud(item, index, arr) {
    arr[index] = item * 10
}

console.log(tenfold)
// result should be [10, 40, 30, 60, 90, 70, 110]



//f
const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]

const below100 = isBelow100.every((isBelow100) => {
    return isBelow100 <= 100
})
console.log(below100)
// result should be: false




//g
const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]
const total = bigSum.reduce((currentTotal, bigSum) => {
    return bigSum + currentTotal
}, 0)

console.log(total)
  // result should be 1118
