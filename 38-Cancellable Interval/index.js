function interval(fn, interval) {
  const timer = setInterval(fn, interval);
  function clear() {
    clearInterval(timer);
  }
  return clear;
}

function main() {
  console.log("Hello");
}

const clear = interval(main, 1000);
setTimeout(() => clear(), 5000);
