class Queue {
  constructor(arr) {
    this.queue = arr ?? [];
  }
  add(elem) {
    this.queue.push(elem);
  }
  remove(elem) {
    this.queue.shift();
  }
  log() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.add(2);
queue.log();
