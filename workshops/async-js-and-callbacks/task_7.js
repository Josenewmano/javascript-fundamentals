let a = 10;

const callback = () => {
  console.log(a);
  a = 20;
  console.log(a);
};
setTimeout(callback, 0);