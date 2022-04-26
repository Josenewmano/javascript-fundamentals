const addToBatch = (array, number) => {
  if (array.length < 5) {
    newArray = array.concat(number);
    return newArray
  }
}

module.exports = addToBatch;