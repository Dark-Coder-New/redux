
// action creators:  why do we need them?
// action is an object

import { INCREMENT, DECREMENT, RESET } from './actionTypes.js';


export const  increment = () => {
      return {
          type:  INCREMENT
      }
}

export const  decrement = () => {
        return {
            type:  DECREMENT
        }
}


export const  reset = () => {
        return {
            type:  RESET
        }
}



// action = {
//      type: INCREMENT,
//      calue:  10
// }