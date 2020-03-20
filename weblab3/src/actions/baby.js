import * as types from '../types/baby';

export const addBaby = (id, name, lastName) => ({
    type: types.CREATE_BABY,
    payload: { id, name, lastName},
  });

export const selectBaby = (id) => ({
  type: types.SELECT_BABY,
  payload: id,
});
  