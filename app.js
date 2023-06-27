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

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())

