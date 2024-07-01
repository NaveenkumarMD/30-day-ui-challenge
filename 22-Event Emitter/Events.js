class DummyEvent {
  constructor() {
    this.callbacks = [];
  }
  subscribe(callback) {
    this.callbacks.push(callback);
  }
  emit(data) {
    for (let cb of this.callbacks) {
      cb(data);
    }
  }
}

const eventEmitter = new DummyEvent();

function main(data) {
  console.log("called", JSON.stringify(data));
}

function main1(data) {
  console.log("called", JSON.stringify(data));
}
eventEmitter.subscribe(main);
eventEmitter.subscribe(main1);
eventEmitter.emit("data");
