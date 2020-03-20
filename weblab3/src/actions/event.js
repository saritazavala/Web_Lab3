import * as types from '../types/events.js';

export const addEvent = (babyId, id, type, annotations) => ({
    type: types.CREATE_EVENT,
    payload: { babyId, id, 
      type, annotations,
       date: new Date() },
    }
  );


export const deleteEvent = id => ({
  type: types.DELETE_EVENT,
  payload: id
});