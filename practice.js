/*//AGE IN DOG YEARS//
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    
    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)



//BEST IN SHOW//
const createAFunction = (dogBreed) => {
   
    if (dogBreed === "schnauzer") {
       return `My favorite is ${dogBreed}`
    } else if (dogBreed === "meow") {
        return  "I like cats"
    } else {
        return  `${dogBreed} are good dogs.`
    }

}
const returnValue = createAFunction("schnauzer")
const someOtherValue = createAFunction("meow")
const thirdDog = createAFunction("Sheepdog")
console.log(returnValue)
console.log(someOtherValue)
console.log(thirdDog)


const someDog = (dogBreed) => {
    if (dogBreed === "German Shepherd") {
        return (`My favorite dog is a ${dogBreed}.`)
    } else if (dogBreed === "Meow") {
        return ("I like cats")
    }
}


someDog("German Shepherd")
const theOtherAnimal = someDog("")
console.log(theOtherAnimal)
const theCat = someDog("Meow")
console.log(theCat)



//ADDITIONS EXERCISE//
const add = (firstNumber, secondNumber, thirdNumber) => {
    return (firstNumber + secondNumber + thirdNumber)
}
myAddition = add(3, 2, 3)
console.log(myAddition)




//SELF DRIVING CARS
const go = (moveDirection, travelSpeed) => {
    if (travelSpeed > 75) {
        return (`The car is moving ${moveDirection} at ${travelSpeed} SLOW DOWN`)
    } else {
        return (`The car is moving ${moveDirection} at ${travelSpeed}`)
    }
}

const howAmITraveling = go("Forwards", 80)
console.log(howAmITraveling)


//EVENS OR ODDS//
const evenOrOdd = (number) => {
    if (number % 2 === 0) {
        return ("Even")
    } else {
        return ("Odd")
    }
}

const theAnswer = evenOrOdd(5)
console.log(theAnswer)

const numbersArray = [1, 2, 6, 20, 13, 39]
for (numbers of numbersArray) {
    const theAnswers = evenOrOdd(numbers)
    console.log(theAnswers)
} */

//DOUBLE FUNCTIONS//

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
const filterKWordsOut = () => {
    if (words.startsWith("k")) {
        return ()
    }
}
const myKs = filterKWordsOut(true)
console.log(myKs)

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */


/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


console.log()
