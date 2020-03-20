import { combineReducers } from 'redux';

import * as types from '../types/baby';


const order = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_BABY: {
      return [ ...state, action.payload.id];
    }
    default: {
      return state;
    }
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_BABY: {
      return {
        ...state, [action.payload.id]: {
            id: action.payload.id,
            name : action.payload.name,
            lastName : action.payload.lastName,
        }  
      };
    }
    default: {
      return state;
    }
  }
};


const selectedBaby = (state = "", action) => {
  if(action.type === types.SELECT_BABY){
    return action.payload;
  }
  return state;
};

const baby = combineReducers({
  byId,
  order,
  selectedBaby,
});


export default baby;


export const getBaby = (state, id) => state.byId[id];
export const getBabies = state => state.order.map(
  id => getBaby(state, id),
).filter(baby => baby != null);
export const getSelectedBaby = state => state.selectedBaby;