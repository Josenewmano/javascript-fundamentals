require('./fizzBuzz')

const fizzBuzzUntil = (a) => {
  for (let i = 0 ; i <= a ; i++) {
    console.log(fizzBuzz(i));
  }
}

module.exports = fizzBuzzUntil;