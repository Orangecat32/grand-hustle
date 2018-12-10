import {initialState} from '../store';
import { rappersReducer } from "./rappersReducer";


  export function rootReducer(state = initialState, action) {
    return {
      ...state,
      rappers: rappersReducer(state.rappers, action)
    }
  }
  
  export default rootReducer;
