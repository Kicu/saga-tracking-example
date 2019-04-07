import { FETCH_PEOPLE_SUCCESS, FETCH_PERSON_SUCCESS } from './actionTypes';

const defaultState = [];

function people(state = defaultState, action) {
  switch (action.type) {
    case FETCH_PEOPLE_SUCCESS:
      return action.data;
    case FETCH_PERSON_SUCCESS:
      const index = state.findIndex(p => p.id === action.data.id);

      if (index < 0) {
        return [...state, action.data];
      } else {
        return [
          ...state.slice(0, index),
          action.data,
          ...state.slice(index + 1)
        ];
      }
    default:
      return state;
  }
}

export default people;
