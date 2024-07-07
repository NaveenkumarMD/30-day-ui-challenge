function timeout(fn, interval) {
  const timer = setTimeout(fn, interval);
  function clear() {
    clearTimeout(timer);
  }
  return clear;
}

function main() {
  console.log("done");
}

const clear = timeout(main, 2000);
clear();
