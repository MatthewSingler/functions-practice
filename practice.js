/*const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    
    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)*/

//write a function that will take string as arguement
/*const createAFunction = (dogBreed) => {
   
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
console.log(thirdDog)*/


const someDog = (dogBreed) => {
    if (dogBreed === "German Shepherd") {
        return (`My favorite dog is a ${dogBreed}.`)
    } else if (dogBreed === "Meow") {
        return ("I like cats")
    }
}


someDog("German Shepherd")
const theOtherAnimal = someDog("")
/*console.log(theOtherAnimal)*/
const theCat = someDog("Meow")
console.log(theCat)