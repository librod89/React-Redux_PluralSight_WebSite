import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){ //ES6 default parameter
  switch(action.type){
    case types.CREATE_COURSE:
      return [...state, //ES6 spread operator
        Object.assign({}, action.course)];
    default:
      return state;
  }
}
