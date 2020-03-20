import { combineReducers } from 'redux';
import * as types from '../types/events';

const byId = (state = {}, action) => {
    switch (action.type) {
      case types.CREATE_EVENT: {
        return {
          ...state, [action.payload.id]: {
              babyId: action.payload.babyId,
              id: action.payload.id,
              type : action.payload.type,
              notes : action.payload.annotations,
              date : action.payload.date,
          }  
        };
      }
      default: {
        return state;
      }
    }
  };


  const order = (state = [], action) => {
    if(action.type === types.CREATE_EVENT){
      return [ action.payload.id, ...state  ];
    } else if(action.type === types.DELETE_EVENT){
      return [...state].filter(event => event != action.payload)
    }
    return state;
  };

const event = combineReducers({
  byId,
  order,

});

export default event;

export const getEvent = (state, id) =>  state.byId[id];
export const getEvents = (state, babyId) => state.order.map(
  id => babyId === state.byId[id].babyId ?  getEvent(state, id) : null
).filter(event => event != null && babyId != "");

