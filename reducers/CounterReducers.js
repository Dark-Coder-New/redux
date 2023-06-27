
import { INCREMENT, DECREMENT,RESET } from '../actions/actionTypes.js'; // actionNames

let counterInitialState = 0



function CounterReducers (state=counterInitialState, actions) {

    switch(actions.type){

        case INCREMENT: 
                return state + actions.value;
        case DECREMENT:
                return state - actions.value;
        case RESET:
                return 0;
        default:
                return state;

    }
           
}



export default CounterReducers;


// actions 

// CouterRedcuer(state, incremnt)