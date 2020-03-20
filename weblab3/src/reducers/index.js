import { combineReducers } from 'redux';

import Baby, * as BabySelector from '../reducers/Baby';
import Event, * as EventSelector from '../reducers/Event';

const reducer = combineReducers({
  
  Baby,
  Event,

});

export default reducer;

export const getBaby = (state, id) => BabySelector.getBaby(state.Baby, id);
export const getBabies = state => BabySelector.getBabies(state.Baby);
export const selectBaby = state => BabySelector.getSelectedBaby(state.Baby);
export const getEvent = (state, id) => EventSelector.getEvent(state.Event, id);
export const getEvents = (state, babyId) => EventSelector.getEvents(state.Event, babyId);
