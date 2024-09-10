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


