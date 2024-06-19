var count = 0;
function createCounter() {
  return function counter() {
    count++;
    return count;
  };
}

let increment = createCounter();
increment();
increment();
increment();
increment();
