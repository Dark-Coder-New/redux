
import { INCREMENT, DECREMENT,RESET } from '../actions/actionTypes.js'; // actionNames

let counterInitialState = 0



function CounterReducers (state=counterInitialState, actions) {

    switch(actions.type){

        case INCREMENT: 
                return state + 1;
        case DECREMENT:
                return state - 1;
        case RESET:
                return 0;
        default:
                return state;

    }
           
}



export default CounterReducers;


// actions 

// CouterRedcuer(state, incremnt)