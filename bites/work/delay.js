const printHello = (message) => {
  console.log('Hello');
}

const executeAfterDelay = (delay, method) => {
  setTimeout(method, delay * 1000);
}

console.log(executeAfterDelay(5, printHello));