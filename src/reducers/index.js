import {SET_CURRENT_SET} from "../actions/index";

const initialState = { currentSet: null };

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_SET: {
      return {currentSet: action.payload}
    }
    default: return state;
  }
}