const uppercaseMessage = (message) => {
  return message.toUpperCase();
}

const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

module.exports = {
  transform,
  uppercaseMessage,
  lowercaseMessage,
};
