import * as types from '../types/events';


export const addEvent = (id, type, dateTime, notes, baby) => ({
  type: types.EVENT_ADDED,
  payload: { id, type, dateTime, notes, baby},
});

export const deleteEvent =  ( id ) => ({
  type: types.EVENT_DELETED,
  payload: { id },
});


export const assignEventToBaby = (baby, event) => ({
  type: types.EVENT_BABY_ASSIGNED,
  payload: {baby, event}
}) ;

export const unassignEventToBaby = (baby, event) => ({
  type: types.EVENT_BABY_UNASSIGNED,
  payload: {baby, event}
});
