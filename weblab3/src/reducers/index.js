import { combineReducers } from 'redux';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';
import selectedBaby, * as selectedBabySelectors from './selectedBaby';


const reducer = combineReducers({
  babies,
  events,
  selectedBaby,
});


export default reducer;


export const getBaby = (state, id) => babiesSelectors.getBaby(state.babies, id);
export const getBabies = state => babiesSelectors.getBabies(state.babies);

export const getEvent = (state, id) => eventsSelectors.getEvent(state.events, id);
export const getEvents = state => eventsSelectors.getEvents(state.events);

export const getEventBaby  = (state, babyID) => eventsSelectors.getEventBaby(state.events, babyID);
export const getEventsBabies = state => eventsSelectors.getEventsBabies(state.events);

export const getSelectedBaby = state => selectedBabySelectors.getSelectedBaby(state.selectedBaby);




