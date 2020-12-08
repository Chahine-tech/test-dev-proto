/**
 * A/ Fix Code
 * B/ Two example of array-like-objects
 */

console.log(Array.prototype.slice)

// A
const obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}

const sayHi = obj.person.sayHi.bind(obj)
console.log(sayHi())

// B
// -> arguments, document.getElementByClassName

/**
 * Functions To Write
 *
 * A/ sumEvenArguments
 * B/ arrayFrom
 * C/ Guessing Game
 */

// A
function sumEvenArguments() {
  return arrayFrom(arguments)
    .filter((n) => n % 2 === 0)
    .reduce((a, b) => a + b)
}

// B
function arrayFrom(arrayLike) {
  return Array.prototype.slice.call(arrayLike)
}

// C
function guessingGame(amount) {
    let nGuesses = 0 // Number of guesses
    let guesses = Math.floor(Math.random() * 10)

    function guess(n) {
        nGuesses++

        if (nGuesses >= amount) {
            console.log(`No more guesses the answer was ${guesses}`)
            return
        }

        if (n === guesses) {
            console.log('You got it!')
            return
        }

        const message = (n < guesses)
            ? "You'r too low!"
            : "You'r too high!"

        console.log(message)
    }

   return guess
}
