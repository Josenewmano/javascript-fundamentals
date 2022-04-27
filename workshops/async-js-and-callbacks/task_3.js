console.log("A");

const callback = () => {
  console.log("D");
};

console.log("B");

setTimeout(callback, 1000);

console.log("C");