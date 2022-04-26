const checkLength = (phoneNumber) => {
  if (phoneNumber.length < 11) {
    return true
  } else {
    return false
  }
}

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
};

const generateMessages = (array) => {
  return array.map( x => `Hi ${x.name}! ${x.discount}% off our best candies for you today!`);
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' 
];

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

console.log(generateMessages(namesAndDiscounts))

module.exports = {
  checkLength,
  filterLongNumbers,
  generateMessages,
};