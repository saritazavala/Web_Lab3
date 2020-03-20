import * as types from '../types/selectedBaby';


export const selectBaby = index => ({
  type: types.BABY_SELECTED,
  payload: index,
});
