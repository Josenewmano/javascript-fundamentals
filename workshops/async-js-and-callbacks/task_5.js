let a = 10;

const callback = () => {
  a = 20;
  console.log(a);
};

setTimeout(callback, 1000);

console.log(a);