console.log("A");

const callback = () => {
  console.log("D");
};

console.log("B");

setTimeout(callback, 0);

console.log("C");