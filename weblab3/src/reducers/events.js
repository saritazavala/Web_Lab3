import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/events';


const order = (state = [], action) => {
  switch (action.type) {
    case types.EVENT_ADDED: {
      return [...state, action.payload.id];
    }
    case types.EVENT_DELETED: {
      const newState = [...state].filter(b => b !== action.payload.id);
      return newState;
    }
    default: {
      return state;
    }
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.EVENT_ADDED: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case types.EVENT_DELETED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const byBabyID = (state = {}, action) => {
  switch (action.type) {
    case types.EVENT_BABY_ASSIGNED: {
      return {
        ...state,
        [action.payload.baby]: [state[action.payload.baby], action.payload.event],
      };
    }

    case types.EVENT_BABY_UNASSIGNED: {
      return {
        ...state,
        [action.payload.baby]: state[action.payload.baby].filter(b => b !== action.payload.event),
      };
    }
    default: {
      return state;
    }
  }
};


const events = combineReducers({
  byId,
  order,
  byBabyID,
});


export default events;

export const getEvent = (state, id) => state.byId[id];
export const getEvents = (state) => state.order.reverse().map(
  id => getEvent(state, id),
).filter(event => event != null);

export const getEventBaby = (state, babyId) => state.byBabyID[babyId];
export const getEventsBabies = state => state.order.map(
  babyId => getEventBaby(state, babyId),
).filter(babyId => babyId != null);
