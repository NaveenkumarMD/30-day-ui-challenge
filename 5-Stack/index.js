class Stackx {
  constructor(array) {
    if (Array.isArray(array)) {
      this.stack = array;
    } else {
      this.stack = [];
    }
  }
  pop() {
    const lastIndex = this.length - 1;
    const elem = this.stack[lastIndex];
    this.stack.splice(lastIndex, 1);
    return elem;
  }
  push(elem) {
    this.stack[this.length] = elem;
  }
  get length() {
    return this.stack.length;
  }
}
const x = new Stackx([1, 2, 3, 4]);
x.push(2);
console.log(x.pop(), x);
