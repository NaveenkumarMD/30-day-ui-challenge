function debouncedMethod(method, delay = 3000) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      method.apply(this, args);
    }, delay);
  };
}

const method = () => {
  console.log("called");
};

const debounced = debouncedMethod(method);

let i = 2;
while (i > 1) {
  debounced();
  i++;
}
