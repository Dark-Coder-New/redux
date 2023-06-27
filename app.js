import store from "./store.js"; 
import { increment, decrement, reset } from "./actions/CounterActionCreator.js";


// I can get value only via store 

console.log("Line 7",store.getState()); // 0

// subscribe to store: 
store.subscribe(
    ()=>{
        console.log("Value Updated", store.getState())
    }
)

store.dispatch(increment(10))
store.dispatch(increment(20))
store.dispatch(increment(100))
store.dispatch(decrement(500))


