class EventEmitter {
    constructor() {
        this.subscribers={};
    }
    subscribe(eventName, callback) {
        //find whether the eventName is already present
        if(this.subscribers.hasOwnProperty(eventName)){
            this.subscribers[eventName]=[...this.subscribers[eventName],callback];
        }
        else{
            this.subscribers[eventName]=[callback]
        }
        return {
            unsubscribe:()=>{
                this.subscribers[eventName]=this.subscribers[eventName].filter(subscriber=>{
                    return subscriber!==callback
                })
            }
        }
    }
    emit(eventName, ...args) {
        const subscribers=this.subscribers[eventName];
        subscribers?.forEach(cb=>{
            cb(...args)
        })
    }
}

const emitter = new EventEmitter();

const subscription1 = emitter.subscribe('event1', (data) => console.log(`Event 1: ${data}`));
const subscription2 = emitter.subscribe('event1', (data) => console.log(`Event 1 again: ${data}`));

emitter.emit('event1', 'Hello World');
// Output:
// Event 1: Hello World
// Event 1 again: Hello World

subscription1.unsubscribe();

emitter.emit('event1', 'Hello again');
// Output:
// Event 1 again: Hello again
